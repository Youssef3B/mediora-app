import React from "react";
import styles from "./DashboardReviews.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import ReviewCard from "../ComponentsDashboard/ReviewCard";
function DashboardReviews() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Reviews</Title>
        <ButtonDash>Add a Review</ButtonDash>
        <ReviewCard />
      </section>
    </main>
  );
}

export default DashboardReviews;
