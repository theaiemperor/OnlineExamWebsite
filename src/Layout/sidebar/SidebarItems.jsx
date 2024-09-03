import React from "react";
import Menuitems from "./MenuItems";

import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import { useLocation } from "react-router-dom";

const SidebarItems = ({ toggleMobileSidebar }) => {
  const location = useLocation();
  const pathDirect = location.pathname;

  return (
    <Box sx={{ px: 2 }}>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {Menuitems.map((item) => {
          return (
            <NavItem
              item={item}
              key={item.id}
              pathDirect={pathDirect}
              onClick={toggleMobileSidebar}
            />
          );
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
