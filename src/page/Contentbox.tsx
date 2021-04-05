import * as React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence  } from "framer-motion";
import "./style.css"

function Item({title,content}:any) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
        <motion.div className="avatar" layout><h2>{title}</h2></motion.div>
        <AnimatePresence>{isOpen && <Content content={content}/>}</AnimatePresence>
      </motion.li>
    );
} //style={{ color:`rgb(33,33,33)` }}
  
function Content({content}:any) {
    return (
      <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        {content}
      </motion.div>
    );
}

//const [selectedId, setSelectedId] = useState(null)
interface ItemsProps {
    id:number[];
    title:string[];
    content:string[]
}

export const Contentbox = ({id,title,content}:ItemsProps) => {
  return (
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }}>
        {id.map(i => (
          <Item key={i} title={title[i]} content={content[i]}/> //content={item.subtitle}
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
};

/*
        <AnimateSharedLayout type="crossfade">
            {items.map(item => (
            <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
            </motion.div>
            ))}
            <AnimatePresence>
                {selectedId && (
                <motion.div layoutId={selectedIdentifier}>
                    <motion.h5>{item.subtitle}</motion.h5>
                    <motion.h2>{item.title}</motion.h2>
                    <motion.button onClick={() => setSelectedId(null)} />
                </motion.div>
            )}
            </AnimatePresence>
        </AnimateSharedLayout>
*/