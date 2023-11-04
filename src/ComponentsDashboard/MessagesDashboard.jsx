import ButtonDash from "./ButtonDash";
import styles from "./MessagesDashboard.module.css";
function MessagesDashboard() {
  return (
    <table className={styles["cool-table"]}>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Subject</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td>(123) 456-7890</td>
          <td>React</td>
          <td>Sample message</td>
          <td>
            <ButtonDash color={"red"}>Delete</ButtonDash>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td>(123) 456-7890</td>
          <td>React</td>
          <td>Sample message</td>
          <td>
            <ButtonDash color={"red"}>Delete</ButtonDash>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>John Doe</td>
          <td>johndoe@example.com</td>
          <td>(123) 456-7890</td>
          <td>React</td>
          <td>Sample message</td>
          <td>
            <ButtonDash color={"red"}>Delete</ButtonDash>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default MessagesDashboard;
