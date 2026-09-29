import "./headerPages.css";
import { motion } from "motion/react";

export default function HeaderPages({ title, subTitle }) {
  return (
    <div className="headerPages">
      <motion.h1
        className="headerPagesTitle"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        {subTitle}
      </motion.p>
    </div>
  );
}
