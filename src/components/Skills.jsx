import { motion } from "framer-motion";
import { experience } from "../constants";
import { styles } from "../styles";

const Skills = () => {
  return (
    <section
      id="skills"
      className={`${styles.paddingX}  w-full ml-auto mr-auto pt-[80px]`}
    >
      <ul className="list-none flex  flex-row flex-wrap justify-center gap-x-24 gap-y-14  ">
        {experience.map((link) => (
          <motion.li
            key={link.id}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 60 }}
            className="w-[100px] h-[100px] p-[16px] text-[14px] text-center font-semibold flex flex-col justify-center items-center glassmorphism"
          >
            <p>{link.title}</p>
            <img src={link.icon} alt={link.title} className="w-11" />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
