import React, { useEffect, useState } from "react";
import ScreenContainer from "./components/ScreenContainer";
import Sidebar from "./components/Sidebar";
import TwoFactorAuthScreen from "./screens/TwoFactorAuthScreen";
import { fetchSidebarData } from "./utils/ApiClient"
import "./App.css";

function App() {
  const [sidebarItems, setSidebarItems] = useState({});

  useEffect(() => {
    try {
      fetchSidebarData().then((results) => {
        setSidebarItems(results)
      });
    } catch (e) {
      console.log(e.message)
    }
  }, []);
  return (
    <>
      <ScreenContainer>
        <TwoFactorAuthScreen />
        <Sidebar items={sidebarItems} />
      </ScreenContainer>
    </>
  );
}

export default App;
