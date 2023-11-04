import ButtonDash from "./ButtonDash";
import styles from "./SettingsDetails.module.css";
function SettingsDetails() {
  return (
    <section className={styles.settings}>
      <Card />
      <Table />
    </section>
  );
}

export default SettingsDetails;

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
        <button>Edit Role</button>
      </div>
    </div>
  );
}
function Table() {
  return (
    <table className={styles["cool-table"]}>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Name</th>
          <th>Job</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>
            <img className={styles.img} src="/images/client1.jpg" alt="" />
          </td>
          <td>johndoe@example.com</td>
          <td>(123) 456-7890</td>
          <td>React</td>
          <td>
            <ButtonDash color={"red"}>Delete</ButtonDash>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>
            <img className={styles.img} src="/images/client1.jpg" alt="" />
          </td>
          <td>johndoe@example.com</td>
          <td>(123) 456-7890</td>
          <td>React</td>
          <td>
            <ButtonDash color={"red"}>Delete</ButtonDash>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>
            <img className={styles.img} src="/images/client1.jpg" alt="" />
          </td>
          <td>johndoe@example.com</td>
          <td>(123) 456-7890</td>
          <td>React</td>
          <td>
            <ButtonDash color={"red"}>Delete</ButtonDash>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
