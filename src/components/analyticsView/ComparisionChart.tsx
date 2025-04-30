import React, { useMemo } from "react";
import { Paper, Box, Typography } from "@mui/material";
import { ResponsiveScatterPlot } from "@nivo/scatterplot";
import { useDashboard } from "../../common/DashboardContext";
import { generateComparisonData } from "../../data/mockData";

const ComparisonChart: React.FC = () => {
  const { currentUser } = useDashboard();

  const comparisonData = useMemo(() => {
    const data = generateComparisonData(currentUser.id);

    return [
      {
        id: "Categories",
        data: data,
      },
    ];
  }, [currentUser.id]);

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
        % Change vs Reference
      </Typography>

      <Box sx={{ height: 400 }}>
        {comparisonData[0].data.length > 0 ? (
          <ResponsiveScatterPlot
            data={comparisonData}
            margin={{ top: 60, right: 140, bottom: 70, left: 90 }}
            xScale={{ type: "linear", min: 0, max: "auto" }}
            xFormat={(value) => formatCurrency(value as number)}
            yScale={{ type: "linear", min: -40, max: 120 }}
            yFormat={(value) => `${value}%`}
            blendMode="multiply"
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Reference Value",
              legendPosition: "middle",
              legendOffset: 46,
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "% Change",
              legendPosition: "middle",
              legendOffset: -60,
            }}
            colors={{ scheme: "category10" }}
            nodeSize={12}
            // nodeComponent={( node:any, x: any, y: any, size: any, color: any ) => (
            //   <g transform={`translate(${x},${y})`}>
            //     <circle
            //       r={size / 2}
            //       fill={color}
            //       style={{
            //         mixBlendMode: 'multiply',
            //         cursor: 'pointer'
            //       }}
            //     />
            //     <text
            //       textAnchor="middle"
            //       y={-10}
            //       style={{
            //         fontSize: 10,
            //         fill: '#666'
            //       }}
            //     >
            //       {node.data.label}
            //     </text>
            //   </g>
            // )}
            tooltip={({ node }) => (
              <Box
                sx={{
                  backgroundColor: "background.paper",
                  padding: 1,
                  boxShadow: 1,
                  borderRadius: 1,
                }}
              >
                <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                  {node.data.id}
                </Typography>
                <Typography variant="body2">
                  Reference: {formatCurrency(node.data.x)}
                </Typography>
                <Typography variant="body2">
                  % Change: {node.data.y}%
                </Typography>
                <Typography variant="body2">
                  Value: {formatCurrency(node.data.size)}
                </Typography>
              </Box>
            )}
            theme={{
              grid: {
                line: {
                  stroke: "#e0e0e0",
                  strokeWidth: 1,
                },
              },
              crosshair: {
                line: {
                  stroke: "#b0b0b0",
                  strokeWidth: 1,
                  strokeOpacity: 0.35,
                },
              },
            }}
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

export default ComparisonChart;
