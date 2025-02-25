import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const previews = [
  {
    id: "01",
    title: "S4DX Lab",
    image: "/previews/S4DX.png",
    description:
      "Developed high-performance dashboards for real-time laboratory data analytics, ensuring seamless user interactions and scalability.",
  },
  {
    id: "02",
    title: "Yassir",
    image: "/previews/Yassir.png",
    description:
      "Enhanced user experience by optimizing frontend performance for the leading ride-hailing and delivery platform in North Africa.",
  },
  {
    id: "03",
    title: "Intelifox",
    image: "/previews/Intelifox.png",
    description:
      "Built intuitive admin interfaces and data visualization tools for an AI-driven business automation platform.",
  },
  {
    id: "04",
    title: "CHECK24",
    image: "/previews/Check24.png",
    description:
      "Implemented responsive and accessible UI components for Germany’s leading comparison platform, improving usability across multiple devices.",
  },
  {
    id: "05",
    title: "Almaahed",
    image: "/previews/Almaahed.png",
    description:
      "Designed and developed a multilingual e-learning platform, enabling seamless course access and a smooth onboarding experience.",
  },
  {
    id: "06",
    title: "Shabakettak",
    image: "/previews/Shabakettak.png",
    description:
      "Engineered a real-time networking hub with dynamic content updates, enhancing engagement and collaboration within communities.",
  },
];

function useParallax(scrollYProgress: any, distance: number) {
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}

export function WorkItem({ id, title, image, description }: any) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 100);

  return (
    <motion.section
      ref={ref}
      className="h-screen flex flex-col justify-center items-center snap-start relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}>
      {/* ID + Title Animated */}
      <motion.h2
        style={{ y }}
        className="text-5xl -translate-z-1/2 font-bold text-pink-300 absolute top-80 left-4 font-serif">
        {id}
        <span className="pl-2 font-sans tracking-wider text-indigo-900 dark:text-indigo-100">
          {title}
        </span>
      </motion.h2>

      {/* Card Container */}
      <motion.div
        className="w-72 h-96 bg-gray-100 p-4 shadow-lg flex flex-col items-center justify-center rounded-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <img src={image} alt={title} className="w-full h-auto rounded-md" />
        <h3 className="mt-4 text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 mt-2 text-center">{description}</p>
      </motion.div>
    </motion.section>
  );
}

export default function Works() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="snap-y snap-mandatory overflow-y-auto scrollbar-none overflow-x-hidden w-full h-full flex flex-col bg-white/30 dark:bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-xl">
      {previews.map((work) => (
        <WorkItem key={work.id} {...work} />
      ))}
      <motion.div
        className="absolute left-0 right-0 bottom-12 h-1 bg-teal-400"
        style={{ scaleX }}
      />
    </div>
  );
}
