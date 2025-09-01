"use client";
import {
  AccountCircleOutlined,
  AddCircleOutline,
  Dashboard,
  UpgradeOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import React from "react";

const SideNav = () => {
  const params = usePathname();
  const menuOptions = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <Dashboard />,
    },
    {
      name: "Create New ",
      link: "/dashboard/create",
      icon: <AddCircleOutline />,
    },
    {
      name: "Upgrade",
      link: "/upgrade",
      icon: <UpgradeOutlined />,
    },
    {
      name: "Account",
      link: "/account",
      icon: <AccountCircleOutlined />,
    },
  ];

  return (
    <div className="w-64 flex-col h-screen shadow-md flex gap-2 p-2">
      {menuOptions?.map((option, idx) => (
        <Link key={idx} href={option.link}>
          <div
            className={`flex items-center gap-3 p-4 ${
              params === option.link ? "bg-primary text-white" : ""
            }  hover:bg-primary hover:text-white rounded-md cursor-pointer`}
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
