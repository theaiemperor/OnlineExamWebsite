import { useMediaQuery, Box, Drawer, Typography } from "@mui/material";
import SidebarItems from "./SidebarItems";
import React from "react";

export default function ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  function UserProfile() {
    return (
      <>
        <Box className="w-full justify-center flex pr-9 my-5">
          <div className="flex flex-col items-center gap-3">
            <img
              src="https://avatars.githubusercontent.com/u/119550818?v=4"
              alt="user image"
              className="w-16 rounded-full border"
            />
            <Typography variant="h3">Arman</Typography>
          </div>
        </Box>
      </>
    );
  }

  const sidebarWidth = "270px";

  if (lgUp) {
    return (
      <Box
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
        }}
      >
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: {
              width: sidebarWidth,
              boxSizing: "border-box",
              border: "0",
              boxShadow: "rgba(113, 122, 131, 0.11) 0px 7px 30px 0px",
              backgroundColor: (theme) => theme.palette.background.paper,
            },
          }}
        >
          <Box
            sx={{
              height: "100%",
            }}
            py={2}
          >
            <UserProfile />

            <Box className="mt-7">
              <Box>
                <SidebarItems />
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={isMobileSidebarOpen}
      onClose={onSidebarClose}
      variant="temporary"
      PaperProps={{
        sx: {
          width: sidebarWidth,
          boxShadow: (theme) => theme.shadows[8],
          backgroundColor: (theme) => theme.palette.background.paper,
        },
      }}
    >
      <UserProfile />
      <SidebarItems />
    </Drawer>
  );
}
