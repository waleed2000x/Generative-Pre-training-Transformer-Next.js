"use client";
import React, { useEffect } from "react";
import styled from "styled-components";

export default function CursorTrail() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    // const colors = ["#000000"];
    // const colors = [
    //   "#ffb56b",
    //   "#fdaf69",
    //   "#f89d63",
    //   "#f59761",
    //   "#ef865e",
    //   "#ec805d",
    //   "#e36e5c",
    //   "#df685c",
    //   "#d5585c",
    //   "#d1525c",
    //   "#c5415d",
    //   "#c03b5d",
    //   "#b22c5e",
    //   "#ac265e",
    //   "#9c155f",
    //   "#950f5f",
    //   "#830060",
    //   "#7c0060",
    //   "#680060",
    //   "#60005f",
    //   "#48005f",
    //   "#3d005e",
    // ];
    const colors = [
      "#0077FF",
      "#00BFFF",
      "#1E90FF",
      "#4682B4",
      "#87CEEB",
      "#ADD8E6",
      "#F0F8FF",
      "#FFFFFF",
      "#AFEEEE",
      "#00CED1",
      "#20B2AA",
      "#66CDAA",
      "#5F9EA0",
      "#87CEFA",
      "#B0C4DE",
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {};
  }, []);

  return (
    <>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
      <Circle className="circle"></Circle>
    </>
  );
}

const Circle = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 24px;
  background-color: black;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999999;
`;
