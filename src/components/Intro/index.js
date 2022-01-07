import React from "react";
import { IntroArea } from "./estlio";
import { motion } from "framer-motion";
export default function Intro({ page, transitonEffect }) {
  return (
    <IntroArea>
      <motion.div
        initial={page.out}
        animate={page.in}
        exit={page.out}
        variants={page}
        transition={transitonEffect}
        className="container"
      >
        <div className="left-side">
          <h1>Serviços </h1>
          <h1>Investigativos</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <a className="more">Saiba mais</a>
        </div>
        <div className="right-side">
          <div class="mask"></div>
        </div>
      </motion.div>
    </IntroArea>
  );
}
