import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import { AppEmtyp } from "./components/principales/AppEmtyp";
import { privateRoutes, publicRoutes } from "./routes";
import { useAuthStore } from "./storage/authStore";

const queryClient = new QueryClient();

export const Root = (props: any) => {
  const userInformation = useAuthStore((state: any) => state.userInformation);
  const isLoggedIn = !!userInformation && !!userInformation.token;
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {isLoggedIn ? (
            <App>
              <Routes>
                {privateRoutes.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
                <Route
                  index
                  path="/"
                  element={<Navigate to="/app/home" replace />}
                />
              </Routes>
            </App>
          ) : (
            <AppEmtyp>
              <Routes>
                {publicRoutes.map(({ path, Component }) => (
                  <Route key={path} path={path} element={<Component />} />
                ))}
                <Route
                  index
                  path="/"
                  element={<Navigate to="/app/login" replace />}
                />
              </Routes>
            </AppEmtyp>
          )}

          <Routes>
            <Route path="**" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Root />
);
