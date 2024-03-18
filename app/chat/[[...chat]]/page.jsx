"use client";
import { IconButton } from "@mui/material";
import RouteProtector from "../../components/RouteProtector";
import SendIcon from "@mui/icons-material/Send";
import { Input } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { streamReader } from "openai-edge-stream";
export default function Chat() {
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/chat/sendMessage", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ message }),
    });
    const data = response.body;
    if (!data) {
      return;
    }
    const reader = data.getReader();
    await streamReader(reader, async (message) => {
      console.log(message);
    });
  };
  return (
    <>
      <RouteProtector />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="chat-parent">
          <div className="chat-history">Left</div>
          <div className="chat-box">
            <div className="chat-box-conversation"></div>
            <div className="chat-box-text-bar">
              <form onSubmit={handleSubmit}>
                <StyledInput
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  multiline
                  rows={3}
                  placeholder="Start a chat..."
                />
                <IconButton type="submit">
                  <SendIcon style={{ color: "#fff", fontSize: "35px" }} />
                </IconButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
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
