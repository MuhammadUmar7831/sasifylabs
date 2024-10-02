import React from "react";
import styles from "@/app/styles/Glow.module.css";

export default function Glow({ className }) {
  return <div className={`absolute z-0 ${styles.glow} ${className}`}></div>;
}
