import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function DataTable() {
  const columns = [
    { field: "sector", headerName: "Sector" },
    { field: "category", headerName: "Category" },
    { field: "spend", headerName: "Spend" },
    { field: "percentChange", headerName: "% Change" },
    { field: "absoluteChange", headerName: "Absolute Change" },
  ];

  const rows: any[] = [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.field}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
