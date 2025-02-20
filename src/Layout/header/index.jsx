import React from "react";
import { Box, AppBar, Toolbar, styled, IconButton } from "@mui/material";
import PropTypes from "prop-types";

import { IconMenu2 } from "@tabler/icons-react";
import Logo from "../../components/Global/Logo";

const Header = ({ toggleMobileSidebar }) => {
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",
    [theme.breakpoints.up("lg")]: {
      minHeight: "70px",
    },
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    width: "100%",
    color: theme.palette.text.secondary,
  }));

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{
            display: {
              lg: "none",
              xs: "inline",
            },
          }}
        >
          <IconMenu2 width="20" height="20" />
        </IconButton>
        <Box flexGrow={1}>
          <Logo />
        </Box>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

Header.propTypes = {
  sx: PropTypes.object,
};

export default Header;
