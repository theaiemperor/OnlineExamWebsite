
import { Box, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
        <img
          src={imageUrl || "/logo.svg"}
          alt="logo"
          height={35}
          width={35}
           />

        <Typography
          variant="h1"
          className=" p-2"
        >
          {text || 'Arman'}
        </Typography>
      </Box>
    </LinkStyled>
  );
};
