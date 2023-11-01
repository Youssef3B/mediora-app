import React from "react";
import ButtonDash from "./ButtonDash";
import styles from "./PricesCard.module.css";
import { FiUserCheck } from "react-icons/fi";
import { FiUserX } from "react-icons/fi";

const Prices = [
  {
    id: 1,
    Names: "Basic Plan",
    Price: "690 MAD",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates deserunt tempora.",
    Prop: [
      { Prop: "Lorem ipsum1.", Possibility: true },
      { Prop: "Lorem ipsum2.", Possibility: true },
      { Prop: "Lorem ipsum3.", Possibility: false },
      { Prop: "Lorem ipsum4.", Possibility: false },
    ],
  },
  {
    id: 2,
    Names: "Normal Plan",
    Price: "990 MAD",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates deserunt tempora.",
    Prop: [
      { Prop: "Lorem ipsum1.", Possibility: true },
      { Prop: "Lorem ipsum2.", Possibility: true },
      { Prop: "Lorem ipsum3.", Possibility: true },
      { Prop: "Lorem ipsum4.", Possibility: false },
    ],
  },
  {
    id: 3,
    Names: "Advanced Plan",
    Price: "1990 MAD",
    Description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates deserunt tempora.",
    Prop: [
      { Prop: "Lorem ipsum1.", Possibility: true },
      { Prop: "Lorem ipsum2.", Possibility: true },
      { Prop: "Lorem ipsum3.", Possibility: true },
      { Prop: "Lorem ipsum4.", Possibility: true },
    ],
  },
];

function PricesCard() {
  return (
    <div className={styles.flex}>
      {Prices.map((price) => (
        <Card key={price.id} price={price} />
      ))}
    </div>
  );
}

export default PricesCard;

function Card({ price }) {
  const list = price.Prop;
  return (
    <div className={styles.card}>
      <h2>{price.Names}</h2>
      <h3>{price.Price}</h3>
      <p>{price.Description}</p>
      <ul>
        {list.map((list) => (
          <List list={list} key={list.Prop} />
        ))}
      </ul>
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

function List({ list }) {
  return (
    <li
      style={
        list.Possibility === true ? { color: "#309366" } : { color: "#ef3a5d" }
      }
    >
      {list.Possibility === true ? (
        <FiUserCheck size={20} />
      ) : (
        <FiUserX size={20} />
      )}
      <p>{list.Prop}</p>
    </li>
  );
}
