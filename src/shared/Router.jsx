import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import ReactCalendar from "../pages/Calendar";
import Login from "../pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/calendar" element={<ReactCalendar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
