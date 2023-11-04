import React from "react";
import styles from "./DashboardMessages.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import MessagesDashboard from "../ComponentsDashboard/MessagesDashboard";
function DashboardMessages() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Messages</Title>
        <MessagesDashboard />
      </section>
    </main>
  );
}

export default DashboardMessages;
