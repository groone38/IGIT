import { ChartOptions } from "chart.js";

export const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    tooltip: {
      displayColors: false,
      callbacks: {
        title(tooltipItems) {
          return `Time: ${tooltipItems[0].label}`;
        },
        label: (tooltipItems) => {
          return `Temp: ${tooltipItems.formattedValue}`;
        },
      },
    },
  },
  scales: {
    x: {
      title: {
        display: true,
        text: "HH:mm",
      },
    },
    y: {
      title: {
        display: true,
        text: "Temp",
      },
    },
  },
};
