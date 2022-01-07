import React from "react";
import { InfoArea } from "./estilo";
import { motion } from "framer-motion";
export default function Info({ page, transitonEffect }) {
  return (
    <InfoArea>
      <motion.div
        initial={page.out}
        animate={page.in}
        exit={page.out}
        variants={page}
        transition={transitonEffect}
        className="first-note"
      >
        <img src="/assets/gps.jpg" />
        <h2>Testando</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>
      <motion.div
        initial={page.out}
        animate={page.in}
        exit={page.out}
        variants={page}
        transition={transitonEffect}
        className="second-note"
      >
        <img src="/assets/camera.jpg" />
        <h2>Testando</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
      </motion.div>
    </InfoArea>
  );
}
