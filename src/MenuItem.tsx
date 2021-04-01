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

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
//const contexts = ["My Info", "KU Courses", "Bioinformatics", "Tools", "My Projects"];
const links = [<Link to="/">1</Link>, <Link to="/BW">2</Link>];

export const MenuItem = ({ i }: IProps) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}>{links[i]}</div>
      {/*
      <div className="text-placeholder" style={style}></div>
      */}
    </motion.li>
  );
};
