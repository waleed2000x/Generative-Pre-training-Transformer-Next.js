"use client";
import styled from "styled-components";

const StyledStandardButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  color: #fff;
  border: 2px solid transparent;
  border-radius: 6px;
  background: linear-gradient(to right, #34495e, #2c3e50);
  outline: none;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #2c3e50, #233342);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    .ripple {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  .ripple {
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    animation: rippleEffect 0.5s;
    z-index: 0;
  }

  @keyframes rippleEffect {
    to {
      transform: scale(2.5);
      opacity: 0;
    }
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export function StandardButton({ Title, Icon }) {
  return (
    <StyledStandardButton>
      {Icon && <Icon />}
      <span>{Title}</span>
      <div className="ripple" />
    </StyledStandardButton>
  );
}
