import React from "react";
import { UserStore, SessionStore } from "../stores";

export const storesContext = React.createContext({
  userStore: new UserStore(),
  sessionStore: new SessionStore()
});
