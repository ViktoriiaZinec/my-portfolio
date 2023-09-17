import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import * as Yup from "yup";

import { styles } from "../styles";

const validationSchema = Yup.object({
  name: Yup.string().required("Please enter your name"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Please enter your email"),
  message: Yup.string()
    .required("Please enter your message")
    .min(10, "Message must be at least 10 characters")
    .max(150, "Message should be no longer than 150 characters"),
});

const Contacts = () => {
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      emailjs
        .send(
          "service_escgkql",
          "template_iz6nyug",

          {
            from_name: values.name,
            to_name: "Viktoriia",
            from_email: values.email,
            to_email: "samarityankav@gmail.com",
            message: `${values.message}\nEmail: ${values.email}`,
          },
          "uZ96wX6ZDosfwXDGM"
        )
        .then(
          () => {
            setLoading(false);
            enqueueSnackbar(
              "Thank you. I will get back to you as soon as possible",
              {
                variant: "info",
              }
            );
            resetForm();
          },
          (error) => {
            setLoading(false);
            console.log(error);
            enqueueSnackbar("Something went wrong", { variant: "error" });
          }
        );
    },
  });

  return (
    <section
      id="contacts"
      className={`${styles.paddingX} justify-around pt-[70px] pb-[70px] mt-2 xl:flex-row  flex overflow-hidden`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 30 }}
        className="flex-[0.3] glassmorphism p-8 rounded-2xl"
      >
        <h2 className={`${styles.sectionTitle}`}>Get in touch</h2>

        <form
          onSubmit={formik.handleSubmit}
          className="mt-4 flex flex-col gap-2"
        >
          <label className="flex flex-col">
            <span className="text-slate-300 mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="glassmorphism-form py-3 px-6 rounded-lg outline-none border-none font-medium"
              placeholder="Your Name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500">{formik.errors.name}</div>
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-slate-300 mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="glassmorphism-form py-3 px-6 rounded-lg outline-none border-none font-medium"
              placeholder="Your Email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500">{formik.errors.email}</div>
            ) : null}
          </label>
          <label className="flex flex-col">
            <span className="text-slate-300 mb-2">Your Message</span>
            <textarea
              rows="6"
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="glassmorphism-form py-3 px-6 rounded-lg outline-none border-none font-medium"
              placeholder="Type Your Message"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-500">{formik.errors.message}</div>
            ) : null}
          </label>
          <button
            type="submit"
            className="button hover:color-red py-2 rounded-xl px-12 outline-none w-fit text-white font-bold shadow-md shadow-primary"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contacts;
