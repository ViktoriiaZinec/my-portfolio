import { motion } from "framer-motion";
import Card from "./Card";

import { styles } from "../styles";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className={`${styles.paddingX}  w-full ml-auto mr-auto pt-[80px]`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 30 }}
      >
        <div>
          <h2 className={`${styles.sectionTitle}`}>My projects</h2>

          <p className={`${styles.baseText} w-2/3 pt-4`}>
            Here I showcase my projects. While I may not have extensive
            experience, I am dedicated to creating functional and visually
            appealing web applications using HTML, CSS, JavaScript, React, and
            Node.js. Each project reflects my ability to solve complex problems,
            work with different technologies, and manage projects effectively.
          </p>
        </div>
      </motion.div>
      <div className="mt-20 flex justify-center ml-auto mr-auto flex-wrap gap-7">
        {projects.map((project, index) => (
          <Card key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
