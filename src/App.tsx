import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { CardInfo, DrawerLeft, FormLogin } from "./shared/components";
import { AppThemeProvider } from "./shared/contexts";
import { AuthProvider } from "./shared/contexts/AuthContext";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <AuthProvider>
      <AppThemeProvider>
        <FormLogin>
          <BrowserRouter>
            <DrawerLeft>
              <CardInfo />
              <AppRoutes />
            </DrawerLeft>
          </BrowserRouter>
        </FormLogin>
      </AppThemeProvider>
    </AuthProvider>
  );
}