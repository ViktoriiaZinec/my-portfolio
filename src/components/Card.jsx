import { motion } from "framer-motion";
import { BsGithub } from "react-icons/bs";
import { Tilt } from "react-tilt";

import PropTypes from "prop-types";
import { styles } from "../styles";

const Card = ({ name, description, tags, image, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 30 }}
    >
      <Tilt
        options={{
          max: 30,
          scale: 1,
          speed: 400,
        }}
        className="glassmorphism p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[220px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <div className="mt-5">
          <h3 className={`${styles.sectionTitle}`}>{name}</h3>
          <p className="mt-2 text-white text-[14px]">{description}</p>
        </div>
        <div className="absolute  flex justify-end items-end m-4 inset-0 card-img_hover">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <BsGithub className="github-btn" />
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
