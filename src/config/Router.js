import React from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import CicilanIdr from '../pages/CicilanIdr';
import CicilanUsd from '../pages/CicilanUsd';
import InvestasiIdr from '../pages/InvestasiIdr';
import InvestasiUsd from '../pages/InvestasiUsd';

const Router = () => {
  return (
    <Routes>
      <Route path="/investasi-idr" element={<InvestasiIdr />} />
      <Route path="/investasi-usd" element={<InvestasiUsd />} />
      <Route path="/cicilan-idr" element={<CicilanIdr />} />
      <Route path="/cicilan-usd" element={<CicilanUsd />} />
      <Route path="/" element={<Navigate to="/investasi-idr" />} />
    </Routes>
  );
}

export default Router