import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <img src="/images/logo black.png" alt="" />
        <form className={styles.form} action="">
          <h3>Sign In to Mediora</h3>
          <p>Digital solutions for Empowering Your Digital Journey</p>
          <div className={styles.inp}>
            <label htmlFor="Email">Email</label>
            <input type="email" />
          </div>
          <div className={styles.inp}>
            <label htmlFor="Password">Password</label>
            <input type="password" />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <Link to="/">
              <p className={styles.link}>Go Back To Page Home</p>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
