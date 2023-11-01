import React from "react";
import styles from "./DashboardPortfolio.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import AdminProfile from "../ComponentsDashboard/AdminProfile";
import PortfolioProfile from "../ComponentsDashboard/PortfolioProfile";

function DashboardPortfolio() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Portfolio</Title>
        <ButtonDash>Add Portfolio</ButtonDash>
        <PortfolioProfile />
      </section>
    </main>
  );
}

export default DashboardPortfolio;
