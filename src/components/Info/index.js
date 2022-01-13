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
            Temos uma equipe com anos de experiência nos serviços
            investigativos, e temos a maior satisfação em entregar um trabalho
            de excelência, segurança para nossos clientes.
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
            Atenção aos detalhes é o ponto chave do nosso trabalho, mas queremos
            também entregar os resultados de forma rápida e segura para nossos
            clientes.
          </p>
        </motion.div>
      </Fade>
    </InfoArea>
  );
}
