import { NavLink } from "react-router-dom";
import styles from "./RolesDash.module.css";
function RolesDash() {
  return (
    <section className={styles.roles}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  );
}

export default RolesDash;

function Card() {
  return (
    <div className={styles.card}>
      <h2>Super Admin</h2>
      <p>
        Total users with this role: <span>5</span>
      </p>
      <ul>
        <li>- All Admin Controls</li>
        <li>- View and Edit Financial Summaries</li>
        <li>- Enabled Bulk Reports</li>
        <li>- View and Edit Payouts</li>
        <li>- View and Edit Disputes</li>
        <li>- and 7 more...</li>
      </ul>
      <div className={styles.flex}>
        <NavLink to={"/dashboard/details"}>
          <button>View Role</button>
        </NavLink>
        <button>Edit Role</button>
      </div>
    </div>
  );
}
