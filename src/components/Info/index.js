import React from "react";
import { InfoArea } from "./estilo";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
export default function Info({ page, transitonEffect }) {
  return (
    <InfoArea>
      <Fade top>
        <motion.div
          initial={page.out}
          animate={page.in}
          exit={page.out}
          variants={page}
          transition={transitonEffect}
          className="first-note"
        >
          <img src="/assets/gps.jpg" />
          <h2>Experiência & Segurança</h2>
          <p>
            Temos uma equipe com anos de proficiência nos serviços
            investigativos, e temos o maior prazer em entregar um trabalho de
            qualidade, segurança para nossos clientes.
          </p>
        </motion.div>
      </Fade>
      <Fade bottom delay={500}>
        <motion.div
          initial={page.out}
          animate={page.in}
          exit={page.out}
          variants={page}
          transition={transitonEffect}
          className="second-note"
        >
          <img src="/assets/camera.jpg" />
          <h2>Resultados Rápidos</h2>
          <p>
            Atenção aos detalhes faz a diferença em nosso trabalho, mas queremos
            também entregar os resultados de forma ágil e segura para nossos
            clientes.
          </p>
        </motion.div>
      </Fade>
    </InfoArea>
  );
}
