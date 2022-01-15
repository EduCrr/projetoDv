import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./Pages/Home";
import { NotFound } from "./components/NotFound";
import Contato from "./Pages/Contato";
export default function Rotas() {
  let location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}
