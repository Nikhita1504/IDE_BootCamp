import React, { useEffect, useState } from "react";
import ChartComponent from "./ChartComponent";

const ChartPage = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Retrieve chart data from session storage
    const storedChartData = sessionStorage.getItem("chartData");
    if (storedChartData) {
      setChartData(JSON.parse(storedChartData));
    }
  }, []);

  return (
    <div>
      <h1>Chart Page</h1>
      <div className="chart-container">
        {chartData && chartData.data ? ( // Ensure chartData and chartData.data exist
          <ChartComponent type={chartData.type} data={chartData.data} />
        ) : (
          <p>No chart data available</p>
        )}
      </div>
    </div>
  );
};

export default ChartPage;
