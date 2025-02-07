"use client";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);
export const PopulationChart = ({ population, countryName }) => {
  const chartData = {
    labels: population.populationCounts.map((item) => item.year),
    datasets: [
      {
        label: "Population",
        data: population.populationCounts.map((item) => item.value),
        backgroundColor: "rgba(96, 165, 250, 0.6)",
        borderColor: "rgba(96, 165, 250, 1)",
        borderWidth: 2,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      title: {
        display: true,
        text: `${countryName} population over the years`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Population",
        },
        ticks: {
          callback: (value) => new Intl.NumberFormat().format(value),
        },
      },
    },
  };

  return (
    <div className="relative w-full h-[300px] md:h-[400px] xl:w-4/5">
      <Bar data={chartData} options={options} />;
    </div>
  );
};
