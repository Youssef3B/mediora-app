import React from "react";
import styles from "./DashboardBlog.module.css";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import Title from "../ComponentsDashboard/Title";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import BlogProfile from "../ComponentsDashboard/BlogProfile";
function DashboardBlog() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Blogs</Title>
        <ButtonDash>Add a New Post</ButtonDash>
        <BlogProfile />
      </section>
    </main>
  );
}

export default DashboardBlog;
