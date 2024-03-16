"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

export default function Header() {
  const { isLoading, error, user } = useUser();
  console.log(user);
  return (
    <div className="header-parent">
      <div>Logo</div>
      <div>
        {isLoading && <p>Loading</p>}
        {user && <a href="/api/auth/logout">Logout</a>}
        {!user && <a href="/api/auth/Login">Login</a>}
      </div>
    </div>
  );
}
