import React from "react";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import HomeDashboard from "../ComponentsDashboard/HomeDashboard";

const Dashboard = () => {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Dashboard</Title>
        <HomeDashboard />
      </section>
    </main>
  );
};

export default Dashboard;
