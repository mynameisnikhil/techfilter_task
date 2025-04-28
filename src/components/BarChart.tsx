import { ResponsiveBar } from "@nivo/bar";

function BarChart() {
  const data = [
    {
      category: "Juice",
      spend: 120000,
    },
    {
      category: "Snacks",
      spend: 90000,
    },
  ];

  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={data}
        keys={["spend"]}
        indexBy="category"
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: "nivo" }}
        axisBottom={{
          legend: "Category",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          legend: "Spend",
          legendPosition: "middle",
          legendOffset: -40,
        }}
      />
    </div>
  );
}

export default BarChart;
