import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/LogIn";
import Main from "../pages/Main";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
