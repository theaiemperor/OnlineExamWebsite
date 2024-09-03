
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Constants } from "../../Store/general/Constants";

const LinkStyled = styled(Link)(() => ({
  overflow: "hidden",
  display: "block",
}));

type LogoProps = {
  imageUrl?: string
  link?: string,
  text?: string
}

export default function ({ imageUrl, link, text }: LogoProps) {
  return (
    <LinkStyled to={link || "/"}>
      <Box className="flex items-center gap-4 justify-center">
        <Box className="flex">
          <img
            src={imageUrl || "/logo.svg"}
            alt="logo"
            height={35}
            width={35}
          />
          &nbsp; &nbsp;
          <Typography
            variant="h1"
          >
            <b>{text || Constants.app_name}</b>
          </Typography>
        </Box>
      </Box>
    </LinkStyled>
  );
};
