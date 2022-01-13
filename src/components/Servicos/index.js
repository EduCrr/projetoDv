import React from "react";
import { ServicosArea, ListaServicos } from "./estilo";
import { useState } from "react";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
export default function Servicos({ page, transitonEffect }) {
  const [works, setWorks] = useState([
    {
      title: "Rastreador",
      photo: "/assets/notebook.jpg",
      reverse: true,
    },
    {
      title: "Casos de traição",
      photo: "/assets/traicao.jpg",
      reverse: false,
    },
    {
      title: "Localização de veículos",
      photo: "/assets/carros.jpg",
      reverse: true,
    },
    {
      title: "Localização de Pessoas",
      photo: "/assets/globo.jpg",
      reverse: false,
    },
    {
      title: "Desvios de mercadorias",
      photo: "/assets/desvios.jpg",
      reverse: true,
    },
  ]);

  return (
    <ServicosArea>
      <motion.div
        initial={page.out}
        animate={page.in}
        exit={page.out}
        variants={page}
        transition={transitonEffect}
        className="servicos"
      >
        <div className="left-side">
          <h1>Serviços</h1>
          <p>
            Nosso trabalho é efetuado com total sigilo absoluto, mantendo a
            segurança e integridade em cada caso realizado. Confira nossa lista
            de serviços prestados!
          </p>
        </div>

        <div className="right-side">
          {works.map((item, k) => (
            <ListaServicos key={k} change={item.reverse}>
              <Fade top>
                <div className="text">
                  <h3>{item.title}</h3>
                </div>
                <div className="photo">
                  <img src={item.photo} alt={item.title} />
                </div>
              </Fade>
            </ListaServicos>
          ))}
        </div>
      </motion.div>
    </ServicosArea>
  );
}
