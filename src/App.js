import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./Rotas";
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}
