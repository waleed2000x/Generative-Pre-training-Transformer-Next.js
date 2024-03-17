import { CircularProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function Loading() {
  return (
    <LoadingParent>
      <StyledCircularProgress />
    </LoadingParent>
  );
}
const LoadingParent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
const StyledCircularProgress = styled(CircularProgress)`
  && {
    color: #fff;
  }
`;
