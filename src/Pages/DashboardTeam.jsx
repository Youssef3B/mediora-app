import React from "react";
import styles from "./DashboardTeam.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import TeamCard from "../ComponentsDashboard/TeamCard";
function DashboardTeam() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Team</Title>
        <ButtonDash>Add a New Member</ButtonDash>
        <TeamCard />
      </section>
    </main>
  );
}

export default DashboardTeam;
