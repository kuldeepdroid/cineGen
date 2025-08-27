import { Dashboard } from "@mui/icons-material";
import React from "react";

const SideNav = () => {
  const menuOptions = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <Dashboard />,
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <Dashboard />,
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <Dashboard />,
    },
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <Dashboard />,
    },
  ];
  return (
    <div className="w-64 flex-col h-screen shadow-md flex p-5">
      {menuOptions?.map((option, idx) => (
        <div
          key={idx}
          className="flex items-center gap-3 p-4  hover:bg-gray-100 rounded-md cursor-pointer"
        >
          <div>{option.icon}</div>
          <div>{option.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SideNav;
