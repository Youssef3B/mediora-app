import React from "react";
import styles from "./DashboardMessages.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
function DashboardMessages() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Messages</Title>
        <ButtonDash>Add USer</ButtonDash>
      </section>
    </main>
  );
}

export default DashboardMessages;
