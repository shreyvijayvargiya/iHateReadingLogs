import React, { useEffect, useState } from "react";
import { fetchSidebarData } from "../utils/ApiClient";

const SidebarItem = ({ children }) => (
  <div className="sidebar-item">{children}</div>
);

// TODO Q5
const Sidebar = (props) => {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const response = await fetchSidebarData();
    const keys = Object.keys(response);
    const data = keys.filter((item) => {
      if (
        Number(item.substring(5)) <= response.count &&
        Number(item.substring(5)) !== 0
      ) {
        console.log(item, "response");
        return response[item];
      } else {
        return null;
      }
    });

    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="sidebar" data-testid="sidebar">
      {data &&
        data.length &&
        data.map((line) => <SidebarItem children={line} />)}
    </div>
  );
};

export default Sidebar;
