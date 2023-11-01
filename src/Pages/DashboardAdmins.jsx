import React from "react";
import styles from "./DashboardAdmins.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import AdminProfile from "../ComponentsDashboard/AdminProfile";
function DashboardAdmins() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Admins</Title>
        <ButtonDash>Add USer</ButtonDash>
        <AdminProfile />
      </section>
    </main>
  );
}

export default DashboardAdmins;
