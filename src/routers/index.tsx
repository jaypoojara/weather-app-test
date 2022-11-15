import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { Page } from "./types";

export const pages: Page[] = [{ path: "/", component: <HomePage /> }];

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pages.map(({ component, path }) => {
          return (
            <Route
              key={path}
              path={path}
              element= {component}
             />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
