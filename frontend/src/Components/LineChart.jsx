// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ["October", "November","December", "January", "February", "March", "April"],
    datasets: [
      {
        label: "Suspicious Activity",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Ensures responsiveness
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "#374151", // Text color using Tailwind's gray-700
        },
      },
      title: {
        display: true,
        text: "Suspicious Activity Over Time",
        color: "#1F2937", // Title color using Tailwind's gray-800
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
          color: "#374151",
        },
        ticks: {
          color: "#6B7280", // gray-500
        },
      },
      y: {
        title: {
          display: true,
          text: "Suspicious Accounts",
          color: "#374151",
        },
        ticks: {
          color: "#6B7280",
        },
      },
    },
  };

  return (
    <div className="w-full mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-md rounded-lg">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 text-center mb-4">
            Suspicious Activity
        </h2>
        <div className="relative h-80">
            <Line data={data} options={options} />
        </div>
    </div>
  );
};

export default LineChart;
