import { CssBaseline, ThemeProvider } from "@mui/material";
import { base_light_theme } from "../../styles/MUI/theme/DefaultColors";

export default function ({ children }) {
  return (
    <ThemeProvider theme={base_light_theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
