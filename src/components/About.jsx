import { motion } from "framer-motion";

import image from "../assets/img/life.jpg";
import { developer_female, web_developer } from "../assets/svg";
import { styles } from "../styles";

const About = () => {
  return (
    <section
      id="about"
      className={`${styles.paddingX}  w-full ml-auto mr-auto  pt-20 mt-[-160px] max-md:mt-[-110px]`}
    >
      <div className="flex flex-row gap-14 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 30 }}
          className="w-4/12  block relative"
        >
          <img src={image} alt="coding" className="rounded-lg" />
          <img
            src={web_developer}
            alt="I`m web developer"
            className="rotating-icon absolute bottom-[-35px] right-[-35px]"
          />
          <img
            src={developer_female}
            alt="I`m web developer"
            className="absolute bottom-[-9px] right-[-9px]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 30 }}
          className="w-2/4 "
        >
          <p className={`${styles.baseText}`}>
            I am a junior full-stack developer who is passionate about creating
            websites that are not only functional but also aesthetically
            pleasing. I strive to combine my technical skills with a keen eye
            for design to deliver user-friendly and visually appealing web
            experiences. My goal is to make the digital world a more enjoyable
            and efficient place, one website at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
