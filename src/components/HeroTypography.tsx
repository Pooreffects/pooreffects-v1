import { motion } from "framer-motion";
import TextReveal from "@components/effects/TextReveal";
import PoorButton from "./ui/PoorButton";

const parentVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15, // Faster stagger
      ease: [0.4, 0, 0.2, 1], // Smooth material-like curve
      duration: 0.6,
      delayChildren: 0.3, // Optional delay to sync with hero bg animations
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
};

const HeroTypography = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={parentVariants}
      className="flex flex-col justify-center max-w-2xl space-y-14 text-center md:text-left">
      <TextReveal
        tag="h1"
        className="text-5xl md:text-6xl xl:text-9xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        <span className="bg-gradient-to-r from-indigo-800 to-pink-400 dark:from-indigo-500 dark:to-teal-500 bg-clip-text text-transparent">
          Pooreffects
        </span>
      </TextReveal>

      <motion.div variants={childVariants}>
        <TextReveal
          tag="h2"
          className="text-lg md:text-xl xl:text-5xl font-medium text-gray-700 dark:text-indigo-100 ml-4">
          A hub for my digital garden, blog, and tech playground.
        </TextReveal>
      </motion.div>

      <motion.section
        variants={childVariants}
        layout
        className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 max-w-lg mx-auto md:mx-0 xl:ml-4">
        <motion.p
          variants={childVariants}
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-snug">
          Transforming ideas into immersive digital experiences.
        </motion.p>

        <motion.p
          variants={childVariants}
          className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          Discover innovative designs, high-performance web applications, and
          seamless user interactions—all crafted to elevate your brand.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex justify-center md:justify-start gap-5">
          <PoorButton variant="primary" size="lg">
            Get Started
          </PoorButton>

          <PoorButton variant="secondary" size="lg">
            Learn More
          </PoorButton>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default HeroTypography;
