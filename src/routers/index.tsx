import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Page } from "./types";

export const pages: Page[] = [{ path: "/", component: HomePage }];

const Routes = () => {
  return (
    <BrowserRouter basename="/">
        {pages.map(({ component, path }) => {
          return (
            <Route
              key={path}
              path={path}
              element= {component}
             />
          );
        })}
    </BrowserRouter>
  );
};

export default Routes;
