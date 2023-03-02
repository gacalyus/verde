import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./use-cases/";
import { Home, Login, NotFound, Single } from "./components/pages";
import { SiteSettingsProvider, ThemeProvider } from "./contexts";
import Header from "./components/pages/header/Header";
import Detail from "./components/pages/detail/Detail";

function App() {
  const [login, setLogin] = useState(false);
 
  return (
    <ThemeProvider>
      <SiteSettingsProvider>
        <BrowserRouter basename={""}>
          {login && <Header />}
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route
              path={"/single-title"}
              element={
                <PrivateRoute roles={["ROLE_USER"]} minlevel={2}>
                  <Single />
                </PrivateRoute>
              }
            />
            <Route
              path={"/users"}
              element={
                <PrivateRoute roles={["ROLE_ADMIN"]} minlevel={4}>
                  <Single />
                </PrivateRoute>
              }
            />
            <Route
              path={"/login"}
              element={<Login login={login} setLogin={setLogin} />}
            />
            <Route path={"/detail"} element={<Detail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SiteSettingsProvider>
    </ThemeProvider>
  );
}

export default App;
