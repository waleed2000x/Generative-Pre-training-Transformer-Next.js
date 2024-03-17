"use client";
import Lottie from "lottie-react";
import React from "react";
import BanterBG from "@/public/assets/BanterBG";
import styled from "styled-components";
export default function Background() {
  return (
    <BackgroundParent>
      <Lottie animationData={BanterBG} loop={true} />
    </BackgroundParent>
  );
}
const BackgroundParent = styled.div`
  position: fixed;
  top: 200px;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 0;
`;
