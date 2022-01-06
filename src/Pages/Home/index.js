import React from "react";
import Intro from "../../components/Intro";
import Sobre from "../../components/Sobre";
import Servicos from "../../components/Servicos";
import Info from "../../components/Info";
export default function Home() {
  return (
    <div>
      <Intro />
      <Sobre />
      <Servicos />
      <Info />
    </div>
  );
}
