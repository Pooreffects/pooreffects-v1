import { useEffect, useState } from "react";

const delayMap: Record<string, number> = {
  fancy: 0,
  h2: 0.2,
  p: 0.4,
  button: 0.6,
};

interface TextRevealProps {
  tag?: keyof typeof delayMap;
  children: React.ReactNode;
  className?: string;
}

export default function TextReveal({
  tag = "p",
  children,
  className,
}: TextRevealProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), delayMap[tag] * 1000);
    return () => clearTimeout(timeout);
  }, [tag]);

  return (
    <div
      className={`opacity-0 transform translate-y-5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : ""
      } ${className}`}>
      {children}
    </div>
  );
}
