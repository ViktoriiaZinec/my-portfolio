import { useEffect } from "react";
import { styles } from "../styles";
import { ComputerCanvas } from "./canvas";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ x: 0 });
  }, [controls]);

  return (
    <section
      className={`${styles.paddingX} relative w-full pt-[30px] max-sm:pt-[20px] max-md:pt-[40px] mx-auto`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 30 }}
      >
        <div className="pt-[48px]  w-full ">
          <h1 className={`${styles.heroTitle}`}>Hi!</h1>
          <h2 className={`${styles.heroText}`}>
            I am Viktoriia, a junior full-stack developer
          </h2>
        </div>
      </motion.div>
      <ComputerCanvas />
    </section>
  );
};

export default Hero;
