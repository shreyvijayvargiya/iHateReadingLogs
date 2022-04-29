import React from "react";
import Header from "./Header";

const ScreenContainer = ({ children }) => (
  <>
    <Header />
    <div className="screen-container">{children}</div>
  </>
);

export default ScreenContainer;
