import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import './ChartComponent.css';

const ChartComponent = ({ type, data }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (!chartRef.current || !data || !type) {
            // If chart data or type is not available, return early
            return;
        }

        const ctx = chartRef.current.getContext("2d");

        // Clear existing chart
        if (window.myChart) {
            window.myChart.destroy();
        }

        // Create new chart
        window.myChart = new Chart(ctx, {
            type: type,
            data: data,
            options: {
              plugins: {
                legend: {
                  labels: {
                    color: 'white',
                    font: {
                      size: 16,
                      weight: 'bold'
                    }
                  }
                }
              },
              scales: {
                x: {
                  ticks: {
                    color: 'white',
                    font: {
                      size: 14, // Adjust font size for x-axis values
                      weight: 'bold'
                    }
                  }
                },
                y: {
                  ticks: {
                    color: 'white',
                    font: {
                      size: 14, // Adjust font size for y-axis values
                      weight: 'bold'
                    }
                  }
                }
              }
            }
          });

        // Cleanup function
        return () => {
            // Destroy the chart when the component unmounts
            if (window.myChart) {
                window.myChart.destroy();
            }
        };
    }, [type, data]);

    return <canvas ref={chartRef} />;
};

export default ChartComponent;
