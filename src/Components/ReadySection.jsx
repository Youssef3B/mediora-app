import { NavLink } from "react-router-dom";
import Button from "./Button";
import styles from "./ReadySection.module.css";
import { CgEditBlackPoint } from "react-icons/cg";

export default function ReadySection() {
  return (
    <section className={styles.ready}>
      <div data-aos="fade-up" data-aos-duration="2000" className={styles.grid}>
        <div>
          <h3>
            Ready To Get Our Professional Digital Services
            <span> Solutions ?</span>
          </h3>
          <h6>5 Years Of Experience We Provide Digital Services</h6>
        </div>
        <div>
          <div className={styles.flex}>
            <CgEditBlackPoint size={26} color="6cebae" />
            <p>Get Every Single Updates</p>
          </div>
          <NavLink to="/contact">
            <Button>Lets Talk digital Expertise</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}
