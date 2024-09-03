import { useMediaQuery, Box, Drawer } from "@mui/material";
import SidebarItems from "./SidebarItems";
import React from "react";
import Logo from "../../components/Global/Logo";

export default function ({
  isMobileSidebarOpen,
  onSidebarClose,
  isSidebarOpen,
}) {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));

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
            <Box px={2}>
              <Logo />
            </Box>
            <Box>
              <Box mt={3}>
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
      <Box className="p-2">
        <Logo />
      </Box>
      <SidebarItems />
    </Drawer>
  );
}
