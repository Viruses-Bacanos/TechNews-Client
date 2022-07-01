import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import MainLayout from "../layouts/mainLayout";

import Home from "./Home";

function CustomRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Outlet />{" "}
            </MainLayout>
          }
        >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default CustomRoutes;
