import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./Rotas";
import Header from "./components/Header";
import Footer from "./components/Footer";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}
