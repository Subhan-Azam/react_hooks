"use client";
import React, { useState, useEffect } from "react";

export default function ScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  const currentScreenWidth = () => {
    setScreenWidth(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);
    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  });

  return (
    <div style={div}>
      <h1 style={h1}>
        The width of screen : <span style={span}> {screenWidth}</span>
      </h1>
    </div>
  );
}
const div = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "Column",
  backgroundColor: "black",
  height: "100vh",
  backgroundColor: "black",
};

const h1 = {
  color: "white",
  fontSize:'30px'
};
const span = {
  color: "blue",
  fontSize:'35px'
};
