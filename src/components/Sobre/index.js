import React from "react";
import { SobreArea } from "./estilo";
import CheckBox from "@material-ui/icons/CheckBox";
import EnhancedEncryption from "@material-ui/icons/EnhancedEncryption";
import MobileFriendly from "@material-ui/icons/MobileFriendly";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
export default function Sobre({ page, transitonEffect }) {
  return (
    <SobreArea>
      <motion.div
        initial={page.out}
        animate={page.in}
        exit={page.out}
        variants={page}
        transition={transitonEffect}
        className="container"
      >
        <Fade bottom>
          <div className="left-side">
            <img src="/assets/sobre-foto.jpg" />
          </div>
        </Fade>
        <Fade top delay={500}>
          <div className="right-side">
            <h1>Sobre nós</h1>
            <p>
              O Detetive Particular, é um profissional preparado para solucionar
              as suas dúvidas tais como: traição, pessoas envolvidas com drogas,
              desvio de conduta de funcionários, localização de pessoas
              desaparecidas, dossiê de pessoas físicas e jurídicas etc.. com
              ética, integridade, meu objetivo é contribuir para achar a verdade
              sobre o seu caso.
            </p>
            <div className="infos-area">
              <div className="info">
                <CheckBox />
                <h5>Resultado</h5>
              </div>
              <div className="info">
                <VerifiedUser />
                <h5>Segurança</h5>
              </div>
              <div className="info">
                <EnhancedEncryption />
                <h5>Sigilo</h5>
              </div>
            </div>
          </div>
        </Fade>
      </motion.div>
    </SobreArea>
  );
}
