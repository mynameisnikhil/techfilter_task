import React, { useMemo } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Box,
  Typography,
  TableSortLabel,
} from "@mui/material";
import { useDashboard } from "../../common/DashboardContext";
import { ALL_METRICS, Column, MetricType, SortConfig } from "../../types";
import { metricMapping } from "../../data/mockData";
import { set } from "date-fns";

// Format currency based on country
const formatCurrency = (value: number, country: string): string => {
  const formatter = new Intl.NumberFormat(
    country === "USA" ? "en-US" : country === "India" ? "en-IN" : "en-US",
    {
      style: "currency",
      currency: country === "USA" ? "USD" : country === "India" ? "INR" : "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
  );

  return formatter.format(value);
};

// Format percentage
const formatPercentage = (value: number): string => {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
};

// Format absolute change with currency
const formatAbsoluteChange = (value: number, country: string): string => {
  return `${value >= 0 ? "+" : ""}${formatCurrency(value, country)}`;
};

const DataTable: React.FC = () => {
  const {
    filteredData,
    filters,
    sortConfig,
    setSortConfig,
    page,
    rowsPerPage,
    setPage,
    setRowsPerPage,
  } = useDashboard();

  const setColumnsForMetrics = (metricsArr: string[]) => {
    const result = [];
    for (const metric of metricsArr) {
      result.push({
        id: `${metricMapping[metric]}.current`,
        label: metric,
        numeric: true,
        currency: true,
      });
    }
    return result;
  };

  // Define columns based on selected attributes and metrics
  const tableCoulmns = useMemo(() => {
    const cols: Column[] = [];

    if (filters.attributes.length > 0) {
      for (const attr of filters.attributes) {
        cols.push({ id: attr.toLocaleLowerCase(), label: attr });
      }
    } else {
      cols.push(
        { id: "sector", label: "Sector" },
        { id: "category", label: "Category" }
      );
    }

    if (filters.metrics.length === 0) {
      cols.push(...setColumnsForMetrics(ALL_METRICS));
    } else {
      cols.push(...setColumnsForMetrics(filters.metrics));
    }

    return cols;
  }, [filters.attributes, filters.metrics]);

  // Sort data based on current sort configuration
  const sortedData = useMemo(() => {
    const { key, direction } = sortConfig;

    return [...filteredData].sort((a, b) => {
      // Handle nested keys like 'mySpend.current'
      const aValue = key.includes(".")
        ? key
            .split(".")
            .reduce((obj, k) => obj[k as keyof typeof obj], a as any)
        : a[key as keyof typeof a];

      const bValue = key.includes(".")
        ? key
            .split(".")
            .reduce((obj, k) => obj[k as keyof typeof obj], b as any)
        : b[key as keyof typeof b];

      if (direction === "asc") {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });
  }, [filteredData, sortConfig]);

  // Get displayed data after pagination
  const displayData = useMemo(() => {
    return sortedData.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [sortedData, page, rowsPerPage]);

  // Handle sort request
  const handleSort = (columnId: string, columnLable: string) => {
    const isAsc = sortConfig.key === columnId && sortConfig.direction === "asc";
    setSortConfig({
      key: columnId,
      direction: isAsc ? "desc" : "asc",
      label: columnLable as MetricType,
    });
  };

  // Handle page change
  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Get cell value
  const getCellValue = (row: any, columnId: string) => {
    if (columnId.includes(".")) {
      const [parent, child] = columnId.split(".");
      return row[parent][child];
    }
    return row[columnId];
  };

  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <Box sx={{ p: 2, borderBottom: 1, borderColor: "divider" }}>
        <Typography variant="h6">Data Table</Typography>
      </Box>

      <TableContainer>
        <Table stickyHeader aria-label="metrics table">
          <TableHead>
            <TableRow>
              {tableCoulmns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.numeric ? "right" : "left"}
                  sortDirection={
                    sortConfig.key === column.id ? sortConfig.direction : false
                  }
                >
                  <TableSortLabel
                    active={sortConfig.key === column.id}
                    direction={
                      sortConfig.key === column.id
                        ? sortConfig.direction
                        : "asc"
                    }
                    onClick={() => handleSort(column.id, column.label)}
                  >
                    {column.label}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData.map((row, index) => (
              <TableRow hover key={index}>
                {tableCoulmns.map((column) => {
                  const value = getCellValue(row, column.id);

                  let cellContent = value;
                  if (column.currency) {
                    cellContent = formatCurrency(value, row.country);
                  } else if (column.percentChange) {
                    cellContent = formatPercentage(value);
                  } else if (column.id.endsWith(".absoluteChange")) {
                    cellContent = formatAbsoluteChange(value, row.country);
                  }

                  const isNegative = typeof value === "number" && value < 0;

                  return (
                    <TableCell
                      key={column.id}
                      align={column.numeric ? "right" : "left"}
                      sx={{
                        color:
                          column.percentChange ||
                          column.id.endsWith(".absoluteChange")
                            ? isNegative
                              ? "error.main"
                              : "success.main"
                            : "inherit",
                        fontWeight: column.percentChange ? 500 : "inherit",
                      }}
                    >
                      {cellContent}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}

            {displayData.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={tableCoulmns.length}
                  align="center"
                  sx={{ py: 3 }}
                >
                  No data found with the current filters
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={sortedData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default DataTable;
