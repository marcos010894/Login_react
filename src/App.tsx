import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { DrawerLeft, FormLogin } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
      {/* <FormLogin> */}
        <DrawerLeft >
          <AppRoutes />
        </DrawerLeft>
      {/* </FormLogin> */}
      </BrowserRouter>
    </AppThemeProvider>
  );
}