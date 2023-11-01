import React from "react";
import styles from "./DashboardServices.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import ServicesCard from "../ComponentsDashboard/ServicesCard";
function DashboardServices() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Services</Title>
        <ButtonDash>Add USer</ButtonDash>
        <ServicesCard />
      </section>
    </main>
  );
}

export default DashboardServices;
