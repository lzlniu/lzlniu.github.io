import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

export const Dragbox = ({title,subtitle}:any) => {
  const constraintsRef = useRef(null);

  return (
    <div className="top-container" >
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef} style={{cursor:`pointer`}}>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </motion.div>
    </div>
  );
};
