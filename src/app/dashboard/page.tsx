"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { EmptyState } from "../components/EmptyState";
import Link from "next/link";
import ResponsiveDrawer from "./_components/ResponsiveDrawer";

const Page = () => {
  const [videoList] = useState([]);
  console.log("width", window.screen.width);
  window.screen.width;
  return (
    <>
      <div className="flex justify-between items-center ">
        <h2 className="font-bold text-primary text-xl">Dashboard</h2>
        <Link href="/dashboard/create">
          <Button className="!bg-primary !text-white">
            Create New Short Video
          </Button>
        </Link>
      </div>
      <div>
        {videoList.length === 0 && (
          <div>
            <EmptyState />
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
