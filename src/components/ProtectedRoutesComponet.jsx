import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserChatComponent } from "./user/userChatComponent";

export const ProtectedRoutesComponet = ({ admin }) => {
  

  if (admin) {
    let adminAuth = true;
    return adminAuth ? <Outlet /> : <Navigate to="/login" />;
  } else {
    let userAuth = true;

    return userAuth ? (
      <>
        <UserChatComponent />
        <Outlet />
      </>
    ) : (
      <Navigate to="login" />
    );
  }
};
