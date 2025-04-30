import React, { useMemo } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import { useDashboard } from "../../common/DashboardContext";
import { generateTimeSeriesData, metricColors } from "../../data/mockData";
import { ALL_METRICS } from "../../types";

const TimeSeriesChart: React.FC = () => {
  const { currentUser, filters } = useDashboard();

  // Generate time series data for the current user
  const timeSeriesData = useMemo(() => {
    const rawData = generateTimeSeriesData(currentUser.id);

    // Determine which metrics to show based on filters
    const metricsToShow =
      filters.metrics.length > 0 ? filters.metrics : ALL_METRICS;

    // Transform data for the line chart
    return metricsToShow.map((metric) => ({
      id: metric,
      data: rawData.map((item) => ({
        x: item.date,
        y: item[metric as keyof typeof item] || 0,
      })),
    }));
  }, [currentUser.id, filters.metrics]);

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
        Spend Over Time
      </Typography>

      <Box sx={{ height: 400 }}>
        {timeSeriesData.length > 0 ? (
          <ResponsiveLine
            data={timeSeriesData}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: "auto",
              max: "auto",
              stacked: false,
              reverse: false,
            }}
            yFormat={(value) => formatCurrency(value as number)}
            curve="monotoneX"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Month",
              legendOffset: 36,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Amount",
              legendOffset: -50,
              legendPosition: "middle",
              format: (value) => {
                if (value >= 1000000) return `${Math.round(value / 1000000)}M`;
                if (value >= 1000) return `${Math.round(value / 1000)}k`;
                return value;
              },
            }}
            colors={({ id }) => metricColors[id as string] || "#000000"}
            lineWidth={3}
            pointSize={10}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
            tooltip={({ point }) => (
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: 1,
                  boxShadow: 1,
                  borderRadius: 1,
                }}
              >
                <Typography variant="body2" sx={{ mb: 0.5 }}>
                  {/* error version: <strong>{point.serieId}</strong> */}
                  <strong>{point.id}</strong>
                </Typography>
                <Typography variant="body2">
                  {point.data.xFormatted}:{" "}
                  {formatCurrency(point.data.y as number)}
                </Typography>
              </Box>
            )}
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

export default TimeSeriesChart;
