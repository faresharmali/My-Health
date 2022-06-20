import React, { useState, useEffect } from "react";
import Administration from "./Administration";

import { LogBox } from "react-native";

LogBox.ignoreAllLogs();

export default function Dashboard({ PageHandler, LoggedUser }) {
  return <Administration PageHandler={PageHandler} LoggedUser={LoggedUser} />;
}
