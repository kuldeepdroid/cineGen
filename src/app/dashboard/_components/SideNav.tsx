"use client";
import {
  AccountCircleOutlined,
  AddOutlined,
  DashboardOutlined,
  TrendingUpOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNav = () => {
  const pathname = usePathname();

  const menuOptions = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <DashboardOutlined />,
    },
    {
      name: "Create New ",
      link: "/dashboard/create",
      icon: <AddOutlined />,
    },
    {
      name: "Upgrade",
      link: "/upgrade",
      icon: <TrendingUpOutlined />,
    },
    {
      name: "Account",
      link: "/user",
      icon: <AccountCircleOutlined />,
    },
  ];

  return (
    <div className="w-64 flex-col h-screen shadow-md flex gap-3 p-5">
      {menuOptions?.map((option, idx) => (
        <Link href={option.link} key={idx}>
          <div
            key={idx}
            className={`flex items-center gap-2 p-4   rounded-md hover:bg-primary hover:text-white cursor-pointer ${
              pathname === option.link ? "bg-primary text-white" : ""
            }`}
          >
            <div>{option.icon}</div>
            <div>{option.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideNav;
