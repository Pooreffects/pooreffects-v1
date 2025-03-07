import { motion } from "framer-motion";

interface PoorButtonProps {
  type?: "button" | "submit" | "reset";
  size?: "md" | "lg";
  block?: boolean;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  [x: string]: any;
}

const sizes = {
  md: "px-5 py-2.5",
  lg: "px-6 py-3",
};

export default function PoorButton({
  type = "button",
  size = "md",
  variant = "primary",
  block,
  className,
  children,
  ...rest
}: PoorButtonProps) {
  return (
    <motion.button
      layout
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded text-center focus-visible:ring-2 ring-offset-2 ring-gray-200 ${
        block ? "w-full" : ""
      } ${sizes[size]} ${
        variant === "primary" ? "primary-btn" : "sec-btn"
      } ${className}`}
      {...rest}>
      {children}
    </motion.button>
  );
}
