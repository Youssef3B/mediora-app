import React from "react";
import styles from "./DashboardProfile.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
function DashboardProfile() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Profile</Title>
        <ButtonDash>Add USer</ButtonDash>
      </section>
    </main>
  );
}

export default DashboardProfile;
