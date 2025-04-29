import React, { useState } from "react";
import {
  Paper,
  Typography,
  Button,
  MenuItem,
  Chip,
  Box,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Refresh as RefreshIcon } from "@mui/icons-material";
import { useDashboard } from "../common/DashboardContext";
import {
  ALL_ATTRIBUTES,
  ALL_METRICS,
  ALL_SECTORS,
  ALL_CATEGORIES,
  GroupingAttribute,
  MetricType,
  SectorType,
  CategoryType,
} from "../types";
import { subMonths } from "date-fns";
import { Stack } from "@mui/system";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { metricMapping } from "../data/mockData";

const FilterPanel: React.FC = () => {
  const { filters, updateFilters, clearFilters, setSortConfig } =
    useDashboard();

  // Handler for toggling attribute selection
  const handleToggleAttribute = (
    event: SelectChangeEvent<GroupingAttribute[]>
  ) => {
    const attributes = event.target.value as GroupingAttribute[];
    updateFilters({ attributes: attributes });
  };

  // Handler for toggling metric selection
  const handleToggleMetric = (event: SelectChangeEvent<MetricType[]>) => {
    const metrics = event.target.value as MetricType[];
    const newAddedMetrics = metrics.filter(
      //@ts-ignore
      (metric) => !filters.metrics.includes(metric)
    )[0];
    updateFilters({ metrics: metrics });
    setSortConfig({
      key: `${metricMapping[newAddedMetrics]}.current`,
      direction: "desc",
      label: newAddedMetrics,
    });
  };

  // Date change handlers
  const handleStartDateChange = (newDate: Date | null) => {
    updateFilters({ startDate: newDate });
  };

  const handleEndDateChange = (newDate: Date | null) => {
    updateFilters({ endDate: newDate });
  };

  // Sector change handler
  const handleSectorChange = (event: SelectChangeEvent<SectorType>) => {
    updateFilters({ sector: event.target.value as SectorType });
  };

  // Category change handler
  const handleCategoryChange = (event: SelectChangeEvent<CategoryType>) => {
    updateFilters({ category: event.target.value as CategoryType });
  };

  // Get the maximum allowed date (today)
  const maxDate = new Date();

  // Get the minimum allowed date (12 months ago)
  const minDate = subMonths(new Date(), 12);

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Filters</Typography>
        <Button
          startIcon={<RefreshIcon />}
          color="primary"
          size="small"
          onClick={clearFilters}
        >
          Reset To Defaults
        </Button>
      </Box>

      <Stack direction={"column"} spacing={3}>
        <Box display={"grid"} gridTemplateColumns={"repeat(4, 1fr)"} gap={2}>
          {/* Date Range Picker */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Start Date"
              value={filters.startDate}
              onChange={handleStartDateChange}
              maxDate={filters.endDate || maxDate}
              minDate={minDate}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  margin: "dense",
                },
              }}
            />

            <DatePicker
              label="End Date"
              value={filters.endDate}
              onChange={handleEndDateChange}
              maxDate={maxDate}
              minDate={filters.startDate || minDate}
              slotProps={{
                textField: {
                  fullWidth: true,
                  size: "small",
                  margin: "dense",
                },
              }}
            />
          </LocalizationProvider>

          {/* Sector Dropdown */}
          <FormControl size="small" margin="dense">
            <InputLabel>Sector</InputLabel>
            <Select
              value={filters.sector || ""}
              onChange={handleSectorChange}
              label="Sector"
            >
              {ALL_SECTORS.map((sector) => (
                <MenuItem key={sector} value={sector}>
                  {sector}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Category Dropdown */}
          <FormControl size="small" margin="dense">
            <InputLabel>Category</InputLabel>
            <Select
              value={filters.category || ""}
              onChange={handleCategoryChange}
              label="Category"
            >
              {ALL_CATEGORIES.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Attribute Selector */}
          <FormControl size="small" margin="dense">
            <InputLabel id="attribute-select-label">
              Grouping Attributes
            </InputLabel>
            <Select
              labelId="attribute-select-label"
              label="Grouping Attributes"
              fullWidth
              size="small"
              multiple
              value={filters.attributes}
              onChange={handleToggleAttribute}
              renderValue={(selected: GroupingAttribute[]) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      size="small"
                      variant="outlined"
                      //   onDelete={() =>  handleRemoveAttribute(value)}
                    />
                  ))}
                </Box>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 250, // Limit dropdown height
                  },
                },
              }}
            >
              {ALL_ATTRIBUTES.map((attribute) => (
                <MenuItem key={attribute} value={attribute}>
                  <ListItemText primary={attribute} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Metric Selector */}
          <FormControl size="small" margin="dense">
            <InputLabel id="metric-select-label">Metrics</InputLabel>
            <Select
              labelId="metric-select-label"
              label="Metrics"
              fullWidth
              size="small"
              multiple
              value={filters.metrics}
              onChange={handleToggleMetric}
              renderValue={(selected: MetricType[]) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      size="small"
                      variant="outlined"
                    />
                  ))}
                </Box>
              )}
              MenuProps={{
                PaperProps: {
                  style: {
                    maxHeight: 250, // Limit dropdown height
                  },
                },
              }}
            >
              {ALL_METRICS.map((metric) => (
                <MenuItem key={metric} value={metric}>
                  <ListItemText primary={metric} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Stack>
    </Paper>
  );
};

export default FilterPanel;
