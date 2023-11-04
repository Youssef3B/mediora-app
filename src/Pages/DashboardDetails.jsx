import BlogProfile from "../ComponentsDashboard/BlogProfile";
import ButtonDash from "../ComponentsDashboard/ButtonDash";
import NavDash from "../ComponentsDashboard/NavDash";
import NavDashUp from "../ComponentsDashboard/NavDashUp";
import SettingsDetails from "../ComponentsDashboard/SettingsDetails";
import Title from "../ComponentsDashboard/Title";

function DashboardDetails() {
  return (
    <main className="dashboard">
      <NavDash />
      <section className="main">
        <NavDashUp />
        <Title>Settings</Title>
        <ButtonDash>Add a New Post</ButtonDash>
        <SettingsDetails />
      </section>
    </main>
  );
}

export default DashboardDetails;
