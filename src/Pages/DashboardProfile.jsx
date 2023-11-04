import React from "react";
import styles from "./DashboardProfile.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import ProfileForm from "../ComponentsDashboard/ProfileForm";
function DashboardProfile() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Profile</Title>
        <ProfileForm />
      </section>
    </main>
  );
}

export default DashboardProfile;
