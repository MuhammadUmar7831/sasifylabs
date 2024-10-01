import React from "react";
import styles from "@/app/styles/Glow.module.css";

export default function Glow({ top, left }) {
  return (
    <div className={`z-0 ${styles.glow} top-[${top}] left-[${left}]`}></div>
  );
}
