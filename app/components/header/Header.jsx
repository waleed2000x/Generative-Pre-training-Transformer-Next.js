"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { useState } from "react";
import { Avatar, Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Loading from "../Loading";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isLoading, error, user } = useUser();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header-parent">
      <div>
        <div className="logo">
          <Image src="/images/Logo.png" alt="logo" width={300} height={180} />
        </div>
      </div>
      <div className="user-status">
        {isLoading && <Loading />}
        {error && <p>Error💥</p>}
        {user && (
          <>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar src={user.picture} />
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <a
                href="/api/auth/logout"
                style={{ textDecoration: "none", color: "#000" }}
              >
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </a>
            </Menu>
          </>
        )}
      </div>
    </div>
  );
}
