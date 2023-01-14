import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import DailyLog from "../pages/DailyLog";
import MonthlyLog from "../pages/MonthlyLog";
import Start from "../pages/Start";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Start />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<Main />} />
          <Route path="/dailys" element={<DailyLog />} />
          <Route path="/monthlys" element={<MonthlyLog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
