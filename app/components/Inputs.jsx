"use client";
import { Input } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Inputs() {
  return <StyledInput multiline rows={3} />;
}
const StyledInput = styled(Input)`
  && {
    width: 100%;
    max-height: 100%;
    color: #fff;
    padding: 10px;
    font-family: inherit;
    letter-spacing: 2px;
  }
`;
