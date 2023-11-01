import React from "react";
import styles from "./DashboardPrices.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import PricesCard from "../ComponentsDashboard/PricesCard";
function DashboardPrices() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Prices</Title>
        <ButtonDash>Add USer</ButtonDash>
        <PricesCard />
      </section>
    </main>
  );
}

export default DashboardPrices;
