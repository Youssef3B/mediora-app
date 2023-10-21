import styles from "./CountSection.module.css";
const stats = [
  { count: 122, title: "Happy Clients" },
  { count: 182, title: "Project Complete" },
  { count: 5, title: "Years Of Experience" },
  { count: 21, title: "Colleagues" },
];
export default function CountSection() {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" className={styles.count}>
      <div className={styles.grid}>
        {stats.map((stat) => (
          <Stats stat={stat} key={stat.title} />
        ))}
      </div>
    </div>
  );
}

function Stats({ stat }) {
  return (
    <div className={styles.card}>
      <h4>{stat.count}</h4>
      <p>{stat.title}</p>
    </div>
  );
}
