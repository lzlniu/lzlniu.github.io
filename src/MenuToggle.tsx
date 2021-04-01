import * as React from "react";
import { motion } from "framer-motion";
//import { isWhiteSpaceLike } from "typescript";

/*
interface IProps {
  props: string;
  d: string;
  //variants: ;
}
*/

interface IToggle {
  toggle: React.MouseEventHandler<HTMLButtonElement>;
  //toggle: React.DetailedHTMLProps<HTMLButtonElement>;
  //toggle: string;
}


const Path = ({...props}) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#FFF"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: IToggle) => {
  //const menustyle = { border: `3vh solid rgb(225,225,225)`, borderRadius: "3vh", backgroundColor: "rgb(225,225,225)" };
  
  return (
  <button onClick={ toggle }>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 1 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 1 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 1 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
  );
};
