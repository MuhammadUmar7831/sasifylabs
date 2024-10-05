import React from "react";

export default function Design({ className }) {
  return (
    <div className={`absolute z-0 hidden md:block ${className}`}>
      <svg
        width="127"
        height="271"
        viewBox="0 0 127 271"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.5">
          <path
            d="M1.5 2L115.215 45.5082C115.989 45.8044 116.5 46.5474 116.5 47.3762V100.5"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M116.6 139.5C116.6 138.892 116.108 138.4 115.5 138.4C114.892 138.4 114.4 138.892 114.4 139.5H116.6ZM114.219 224.994L114.615 226.02L114.219 224.994ZM114.4 139.5V223.127H116.6V139.5H114.4ZM113.824 223.967L-0.395472 267.974L0.395472 270.026L114.615 226.02L113.824 223.967ZM114.4 223.127C114.4 223.499 114.171 223.833 113.824 223.967L114.615 226.02C115.811 225.559 116.6 224.409 116.6 223.127H114.4Z"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            d="M112.881 223.91C113.384 224.251 114.068 224.121 114.41 223.619C114.751 223.116 114.621 222.432 114.119 222.09L112.881 223.91ZM114.119 222.09L1.61854 145.59L0.381459 147.41L112.881 223.91L114.119 222.09Z"
            fill="white"
            fillOpacity="0.1"
          />
          <path
            d="M116.5 102L116.5 146"
            stroke="url(#paint0_linear_487_3642)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_487_3642"
            x1="123.795"
            y1="94.0253"
            x2="109.98"
            y2="150.788"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#150720" />
            <stop offset="0.487027" stop-color="#7B1ECC" />
            <stop offset="1" stop-color="#150720" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
