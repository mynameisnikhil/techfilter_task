import React, { useMemo } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { useDashboard } from "../../common/DashboardContext";
import { generateStackedBarData } from "../../data/mockData";

const StackedBarChart: React.FC = () => {
  const { currentUser, filters } = useDashboard();

  // Generate stacked bar data
  const stackedData = useMemo(() => {
    return generateStackedBarData(currentUser.id);
  }, [currentUser.id]);

  // Determine which metrics to show based on filters
  const metricsToShow = useMemo(() => {
    return filters.metrics.length > 0
      ? filters.metrics
      : ["My Spend", "Same Store Spend", "New Store Spend", "Lost Store Spend"];
  }, [filters.metrics]);

  // Define colors for each metric
  const metricColors: Record<string, string> = {
    "My Spend": "#1976d2",
    "Same Store Spend": "#9c27b0",
    "New Store Spend": "#2e7d32",
    "Lost Store Spend": "#d32f2f",
  };

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
        Spend Composition
      </Typography>

      <Box sx={{ height: 400 }}>
        {stackedData.length > 0 ? (
          <ResponsiveBar
            data={stackedData}
            keys={metricsToShow}
            indexBy="country"
            margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
            padding={0.3}
            valueScale={{ type: "linear" }}
            colors={({ id }) => metricColors[id as string] || "#000000"}
            borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Country",
              legendPosition: "middle",
              legendOffset: 32,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Spend",
              legendPosition: "middle",
              legendOffset: -50,
              format: (value) => {
                if (value >= 1000000) return `${Math.round(value / 1000000)}M`;
                if (value >= 1000) return `${Math.round(value / 1000)}k`;
                return value;
              },
            }}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
            legends={[
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            tooltip={(point) => (
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: 1,
                  boxShadow: 1,
                  borderRadius: 1,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ fontWeight: "bold", mb: 0.5 }}
                >
                  {point.data.country}
                </Typography>
                <Typography variant="body2">
                  {point.id}: {formatCurrency(point.value)}
                </Typography>
              </Box>
            )}
            animate={true}
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

export default StackedBarChart;
