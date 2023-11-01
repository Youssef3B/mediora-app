import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./Button.module.css";

export default function Button({ children }) {
  return (
    <button className="btn">
      {children} <AiOutlineArrowRight size={12} />
    </button>
  );
}
