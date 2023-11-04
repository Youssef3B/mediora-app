import React, { useEffect, useRef } from "react";
import styles from "./DashboardStats.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import { BsEmojiSmile } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import Chart from "chart.js/auto";

const stats = [
  { emoji: <BsEmojiSmile size={32} />, title: "Happy Clients", stat: "320" },
  { emoji: <BiTask size={32} />, title: "Project Complete", stat: "320" },
  { emoji: <FiUsers size={32} />, title: "Happy Clients", stat: "4100" },
];
function DashboardStats() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Stats</Title>
        <div className={styles.up}>
          {stats.map((stat) => (
            <Card stat={stat} />
          ))}
        </div>
        <div className={styles.down}>
          <div className={styles.card}>
            <ChartComponent />
          </div>
          <div>
            <div className={styles.card}>
              <DoughnutChart />
            </div>
            <div className={styles.card}>
              <Box />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
function Card({ stat }) {
  return (
    <div className={styles.card}>
      <div className={styles.flex}>
        {stat.emoji}
        <h3>{stat.title}</h3>
      </div>
      <div className={styles.flex}>
        <h5>{stat.stat}</h5>
        <p>
          +12% <AiOutlineArrowUp />
        </p>
      </div>
      <h6>Compared to (300 last month)</h6>
    </div>
  );
}

const ChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create a gradient background
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(239, 58, 93, 0.5)");
    gradient.addColorStop(1, "rgba(239, 58, 93, 0)");

    const data = {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
      ],
      datasets: [
        {
          label: "Sample Data",
          borderColor: "#ef3a5d",
          backgroundColor: gradient,
          data: [2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000],
        },
      ],
    };

    const options = {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        line: {
          fill: true,
        },
      },
    };

    const myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: options,
    });

    return () => {
      myChart.destroy(); // Cleanup when the component unmounts
    };
  }, []);

  return (
    <div className="box mt-5" data-aos="fade-down" data-aos-duration="1200">
      <h4>Total Visitors</h4>
      <div className="chart-container">
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

const DoughnutChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Data for the doughnut chart
    const data = {
      labels: ["Visits (68%)", "Users (20%)", "Members (12%)"],
      datasets: [
        {
          data: [68, 20, 12],
          backgroundColor: ["#ef3a5d", "#8d1c33", "#54323a"],
        },
      ],
    };

    // Configuration options
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: "right",
        },
        tooltips: {
          callbacks: {
            label: function (context) {
              return context.label; // Display the label as it is (e.g., "Visits (68%)")
            },
          },
        },
      },
    };

    // Get the canvas element and create the doughnut chart
    const ctx = chartRef.current.getContext("2d");
    const doughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: data,
      options: options,
    });

    return () => {
      doughnutChart.destroy(); // Clean up when the component unmounts
    };
  }, []);

  return (
    <div className="col-lg-4">
      <div className="box mt-5" data-aos="fade-down" data-aos-duration="1200">
        <div className="chart-container">
          <canvas id="doughnutChart" ref={chartRef}></canvas>
        </div>
      </div>
    </div>
  );
};

const Box = () => {
  return (
    <div className={styles.box}>
      <h4>This week's revenue</h4>
      <div className={styles.flex}>
        <h2>34 600 MAD</h2>
        <p>+14%</p>
      </div>
      <p>Compared to (29 400 MAD last month)</p>
    </div>
  );
};
export default DashboardStats;
