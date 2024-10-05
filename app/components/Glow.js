import React from "react";
import styles from "@/app/styles/Glow.module.css";

export default function Glow({ className }) {
  return <div className={`absolute z-0 w-[505px] h-[380px] filter blur-[250px] ${styles.glow} ${className}`}></div>;
}
