"use client";

import { Menu } from "@mui/icons-material";
import { Drawer, IconButton, useMediaQuery } from "@mui/material";
import { useState } from "react";

export default function ResponsiveDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [open, setOpen] = useState(false);

  const drawerWidth = 240;

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <IconButton
          onClick={() => setOpen(true)}
          sx={{ position: "absolute", top: 16, left: 16, zIndex: 1300 }}
        >
          <Menu />
        </IconButton>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          anchor="left"
          open={open}
          onClose={() => setOpen(false)}
          sx={{
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          {children}
        </Drawer>
      )}

      {/* Desktop Permanent Drawer */}
      {!isMobile && (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              height: "calc(100% - 64px)", // below header
              marginTop: "64px", // same as header height
            },
          }}
        >
          {children}
        </Drawer>
      )}
    </>
  );
}
