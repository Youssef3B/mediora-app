import React from "react";
import styles from "./DashboardStats.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
function DashboardStats() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Stats</Title>
        <ButtonDash>Add USer</ButtonDash>
      </section>
    </main>
  );
}

export default DashboardStats;
