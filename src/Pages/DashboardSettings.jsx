import React from "react";
import styles from "./DashboardSettings.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
function DashboardSettings() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Settings</Title>
        <ButtonDash>Add USer</ButtonDash>
      </section>
    </main>
  );
}

export default DashboardSettings;
