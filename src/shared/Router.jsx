import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import DailyLog from "../pages/DailyLog";
import MonthlyLog from "../pages/MonthlyLog";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="/dailys" element={<DailyLog />} />
          <Route path="/monthlys" element={<MonthlyLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
