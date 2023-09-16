import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { UserChatComponent } from "./userChatComponent";

export const RouteWithUserChatComponent = () => {
  return (
    <>
      <Outlet />
      <UserChatComponent />
    </>
  );
};
