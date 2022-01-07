import React from "react";
import { ServicosArea, ListaServicos } from "./estilo";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Servicos({ page, transitonEffect }) {
  const [works, setWorks] = useState([
    {
      title: "Rastreador",
      photo:
        "https://images.unsplash.com/photo-1603841533901-7e17ffe0290e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=438&q=80",
      reverse: true,
    },
    {
      title: "Casos de traição",
      photo:
        "https://images.unsplash.com/photo-1516822003754-cca485356ecb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      reverse: false,
    },
    {
      title: "Localização de veículos",
      photo:
        "https://images.unsplash.com/photo-1549782745-3664e2977819?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      reverse: true,
    },
    {
      title: "Localização de Pessoas",
      photo:
        "https://images.unsplash.com/photo-1498354178607-a79df2916198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="right-side">
          {works.map((item, k) => (
            <ListaServicos key={k} change={item.reverse}>
              <div className="text">
                <h3>{item.title}</h3>
              </div>
              <div className="photo">
                <img src={item.photo} alt={item.title} />
              </div>
            </ListaServicos>
          ))}
        </div>
      </motion.div>
    </ServicosArea>
  );
}
