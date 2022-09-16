import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import CicilanIdr from '../pages/CicilanIdr';
import CicilanIdrEng from '../pages/CicilanIdrEng';
import CicilanUsd from '../pages/CicilanUsd';
import InvestasiIdr from '../pages/InvestasiIdr';
import InvestasiIdrEng from '../pages/InvestasiIdrEng';
import InvestasiUsd from '../pages/InvestasiUsd';
import TheLeafMansion from "../pages/TheLeafMansion";
import TheLeafPlatinum from "../pages/TheLeafPlatinum";
import TheLeafResidence from "../pages/TheLeafResidence";

const Router = () => {
  return (
    <Routes>
      <Route path="/investasi-idr" element={<InvestasiIdr />} />
      <Route path="/investasi-idr-en" element={<InvestasiIdrEng />} />
      <Route path="/investasi-usd" element={<InvestasiUsd />} />
      <Route path="/cicilan-idr-en" element={<CicilanIdrEng />} />
      <Route path="/cicilan-idr" element={<CicilanIdr />} />
      <Route path="/cicilan-usd" element={<CicilanUsd />} />
      <Route path="/TLM" element={<TheLeafMansion/>} />
      <Route path="/TLP" element={<TheLeafPlatinum />} />
      <Route path="/TLR" element={<TheLeafResidence />} />
      <Route path="/" element={<Navigate to="/investasi-idr" />} />
    </Routes>
  );
}

export default Router