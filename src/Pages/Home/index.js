import React from "react";
import Intro from "../../components/Intro";
import Sobre from "../../components/Sobre";
import Servicos from "../../components/Servicos";
import Info from "../../components/Info";
import ArrowDropUp from "@material-ui/icons/ArrowDropUp";
export default function Home() {
  const pageTransition = {
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "-100vh",
      scale: 0.8,
    },
  };
  const styleTransition = {
    duration: 0.6,
  };
  return (
    <div>
      <Intro page={pageTransition} transitonEffect={styleTransition} />
      <Sobre page={pageTransition} transitonEffect={styleTransition} />
      <Servicos page={pageTransition} transitonEffect={styleTransition} />
      <Info page={pageTransition} transitonEffect={styleTransition} />
      <a href="#home" className="scrolltop">
        <ArrowDropUp />
      </a>
    </div>
  );
}
