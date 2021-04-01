import * as React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface IProps {
  i: number; // typescript index type can only be string or number
  // any other props that come into the component
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

//const colors = ["rgba(255,0,153,0.5)", "rgba(255,0,119,0.5)", "rgb(211,9,225)", "rgb(137,104,205)", "rgb(156,104,255)"];
const bgcolors = ["rgba(255,0,153,0.5)", "rgba(255,0,119,0.5)", "rgba(211,9,225,0.5)", "rgba(137,104,205,0.5)", "rgba(156,104,255,0.5)"];
const numlinks = [<Link to="/">1</Link>, <Link to="/textml">2</Link>, <Link to="/minecraft">3</Link>, <Link to="/ucph">4</Link>, <Link to="/other">5</Link>];
const wordlinks = [<Link to="/">Intro</Link>, <Link to="/textml">Text ML</Link>, <Link to="/minecraft">Minecraft</Link>, <Link to="/ucph">UCPH</Link>, <Link to="/other">Other</Link>];

export const MenuItem = ({ i }: IProps) => {
  const style = { border: `2px solid rgba(225,225,225,1)` , background: `${bgcolors[i]}`};
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>{numlinks[i]}</div>
      <div className="text-placeholder" style={style}>{wordlinks[i]}</div>
    </motion.li>
  );
};
