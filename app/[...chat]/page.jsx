import { IconButton } from "@mui/material";
import RouteProtector from "../components/RouteProtector";
import SendIcon from "@mui/icons-material/Send";
import Inputs from "../components/Inputs";

export default function Chat() {
  return (
    <>
      <RouteProtector />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="chat-parent">
          <div className="chat-history">Left</div>
          <div className="chat-box">
            <div className="chat-box-conversation"></div>
            <div className="chat-box-text-bar">
              <Inputs />
              <IconButton>
                <SendIcon style={{ color: "#fff", fontSize: "35px" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
