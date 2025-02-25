import { AnimatePresence, motion } from "framer-motion";
import TextReveal from "@components/effects/TextReveal";

const cardVariants = {
  hidden: { opacity: 0.5, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.15,
      ease: [0.4, 0, 0.2, 1],
      duration: 0.6,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const HeroTypography = () => {
  return (
    <div className="flex flex-col justify-center max-w-2xl space-y-14 text-center md:text-left">
      {/* Brand Name */}
      <TextReveal
        tag="h1"
        className="text-5xl md:text-6xl xl:text-9xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
        <span className="bg-gradient-to-r from-indigo-800 to-pink-400 dark:from-indigo-500 dark:to-teal-500 bg-clip-text text-transparent">
          Pooreffects
        </span>
      </TextReveal>
      {/* Subtitle */}

      <TextReveal
        tag="h2"
        className="text-lg md:text-xl xl:text-5xl font-medium text-gray-700 dark:text-gray-300 ml-4">
        A hub for my digital garden, blog, and tech playground.
      </TextReveal>

      {/* Info Card */}
      <AnimatePresence mode="wait">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={cardVariants}
          className="bg-white/30 dark:bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl space-y-6 max-w-lg mx-auto md:mx-0 xl:ml-4">
          {/* Engaging Hook */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="text-xl font-semibold text-gray-900 dark:text-gray-100 leading-snug">
            Transforming ideas into immersive digital experiences.
          </motion.p>

          {/* Supporting Statement */}
          <motion.p
            variants={itemVariants}
            transition={{ duration: 1.1, ease: [0.25, 1, 0.5, 1] }}
            className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
            Discover innovative designs, high-performance web applications, and
            seamless user interactions—all crafted to elevate your brand.
          </motion.p>

          {/* CTA Buttons with No Flashing */}
          <motion.div
            initial="hidden"
            animate="visible"
            layout
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="flex justify-center md:justify-start gap-5">
            <motion.button
              layout
              variants={{
                hidden: { opacity: 0.2, y: 10 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, type: "spring", stiffness: 100 },
                },
              }}
              className="px-6 py-3 rounded-full text-white text-lg font-medium bg-gradient-to-r from-indigo-500 to-teal-500 
                 shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105 active:scale-95">
              Get Started
            </motion.button>

            <motion.button
              variants={{
                hidden: { opacity: 0.5, y: 10 }, // Not fully invisible
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 90,
                  },
                },
              }}
              className="px-6 py-3 rounded-full text-lg font-medium text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 
             transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95">
              Learn More
            </motion.button>
          </motion.div>
        </motion.section>
      </AnimatePresence>
    </div>
  );
};

export default HeroTypography;
