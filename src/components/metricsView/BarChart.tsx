import React, { useMemo } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { useDashboard } from "../../common/DashboardContext";
import { metricMapping } from "../../data/mockData";

const BarChart: React.FC = () => {
  const { filteredData, filters, sortConfig } = useDashboard();

  // Prepare data for the chart based on selected metrics
  const chartData = useMemo(() => {
    if (filteredData.length === 0) return [];

    // If no specific metrics are selected, default to My Spend
    const metricToShow = sortConfig.label;

    const metricKey = metricMapping[metricToShow];

    // Group by category
    const categoryData: Record<string, number> = {};

    filteredData.forEach((item) => {
      if (!categoryData[item.category]) {
        categoryData[item.category] = 0;
      }
      categoryData[item.category] +=
        //@ts-ignore
        item[metricKey as keyof typeof item].current;
    });

    // Convert to chart data format
    return Object.entries(categoryData).map(([category, value]) => ({
      category,
      value,
    }));
  }, [filteredData, filters.metrics, sortConfig.label]);

  // Format currency for tooltip
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Spend by Category - {sortConfig.label}
      </Typography>

      <Box sx={{ height: 400 }}>
        {chartData.length > 0 ? (
          <ResponsiveBar
            data={chartData}
            keys={["value"]}
            indexBy="category"
            margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            colors={{ scheme: "blues" }}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Category",
              legendPosition: "middle",
              legendOffset: 40,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Spend Amount",
              legendPosition: "middle",
              legendOffset: -50,
              format: (value) => {
                if (value >= 1000) return `${Math.round(value / 1000)}k`;
                return value;
              },
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            tooltip={(point) => (
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: 1,
                  boxShadow: 1,
                  borderRadius: 1,
                }}
              >
                <strong>{point.data.category}</strong>:{" "}
                {formatCurrency(point.data.value as number)}
              </Box>
            )}
            animate={true}
            // motionStiffness={90}
            // motionDamping={15}
          />
        ) : (
          <Box
            sx={{
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="body1" color="text.secondary">
              No data available to display
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default BarChart;
