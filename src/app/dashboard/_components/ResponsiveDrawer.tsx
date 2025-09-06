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

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <IconButton onClick={() => setOpen(true)}>
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
          className="!-z-0"
          variant="permanent"
          sx={{
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              boxSizing: "border-box",
              height: "calc(100% - 64px)",
              marginTop: "62px",
            },
          }}
        >
          {children}
        </Drawer>
      )}
    </>
  );
}
