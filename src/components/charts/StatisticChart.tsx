// src/components/charts/StatisticChart.tsx
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface StatisticChartProps {
  data: number[];
  labels: string[];
  title?: string;
}

export const StatisticChart: React.FC<StatisticChartProps> = ({ data, labels, title }) => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const chartRef = React.useRef<Chart | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(canvasRef.current, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: title || "Veriler",
            data,
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: !!title,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartRef.current?.destroy();
    };
  }, [data, labels, title]);

  return <canvas ref={canvasRef} />;
};
