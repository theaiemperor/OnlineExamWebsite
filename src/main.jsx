import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./styles/CSS/global.css";

import Routes from "./Layout/Routes/Routes";
import RootWrapper from "./Store/wrappers/RootWrapper";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RootWrapper>
        <Routes />
      </RootWrapper>
    </BrowserRouter>
  </StrictMode>
);
