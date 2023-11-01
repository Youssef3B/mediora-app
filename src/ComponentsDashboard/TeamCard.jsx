import React from "react";
import styles from "./TeamCard.module.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import ButtonDash from "./ButtonDash";

function TeamCard() {
  return (
    <div className={styles.grid}>
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
      <MemberCard />
    </div>
  );
}

export default TeamCard;

function MemberCard() {
  return (
    <div className={styles.card}>
      <img src="/images/admin.avif"></img>
      <h3>Youssef Ababou</h3>
      <p>Designer</p>
      <div className={styles.flex}>
        <div className={styles.left}>
          <AiOutlineInstagram color="#ef3a5d" size={21} />
        </div>
        <div className={styles.left}>
          <BiLogoLinkedin color="#ef3a5d" size={21} />
        </div>
        <div className={styles.left}>
          <FaFacebookF color="#ef3a5d" size={21} />
        </div>
      </div>
      <a href="#">View Profile</a>
      <div className={styles.flex2}>
        <div className={styles.left}>
          <ButtonDash color="yellow">Edit</ButtonDash>
        </div>
        <div>
          <ButtonDash color="red">Delete</ButtonDash>
        </div>
      </div>
    </div>
  );
}
