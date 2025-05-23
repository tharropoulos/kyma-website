import "./index.css";
import { Hero } from "@/components/ui/hero";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute top-0  h-screen w-screen  bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.25),rgba(255,255,255,0))]"
      ></motion.div>
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_bottom_right,black,transparent_70%)]"></div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
          rotate: -5,
          y: 50,
        }}
        animate={{
          opacity: 0.7,
          scale: 1,
          rotate: 0,
          y: 0,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
          times: [0, 1],
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[600px] md:h-[900px]"
      >
        <svg
          viewBox="-50 0 700 400"
          fill="none"
          className="w-full h-full [filter:blur(8px)] [mask-image:linear-gradient(to_left,transparent,black_70%)]"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.5,
            }}
            d="M0 200 C 50 150, 100 250, 150 200 C 200 150, 250 250, 300 200 C 350 150, 400 250, 450 200 C 500 150, 550 250, 600 200"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      <Hero />
    </div>
  );
}

export default App;
