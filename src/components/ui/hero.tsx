"use client";

import { motion } from "framer-motion";
import { Circle, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Octokit } from "@octokit/core";
import { useQuery } from "@tanstack/react-query";

function Hero() {
  const [copied, setCopied] = useState(false);

  const { data: latestVersion, isLoading } = useQuery({
    queryKey: ["latestVersion"],
    queryFn: async () => {
      const octokit = new Octokit({
        auth: import.meta.env.VITE_GITHUB_TOKEN,
      });

      const tagsData = await octokit.request("GET /repos/{owner}/{repo}/tags", {
        owner: "museslabs",
        repo: "kyma",
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      });

      if (tagsData?.data?.length > 0) {
        return `${tagsData.data[0].name} 🎉`;
      }
      return "0.0.0";
    },
  });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText("go install github.com/museslabs/kyma@latest");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative z-10 w-full mx-auto px-4 md:px-6">
      <div className="mx-auto text-center">
        <motion.a
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate={!isLoading ? "visible" : "hidden"}
          href="https://github.com/museslabs/kyma"
          className={cn(
            "text-xs md:text-sm inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/90 border border-white/[0.08] lg:mb-12 cursor-pointer transition-colors duration-500 hover:bg-sky-950/50"
          )}
        >
          <Circle className="h-2 w-2 fill-sky-500/80" />
          {latestVersion && <span className="text-white/60 tracking-wide font-mono">{latestVersion}</span>}
        </motion.a>
        <motion.div
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center"
        >
          <TypewriterEffectSmooth
            className="text-4xl sm:text-3xl font-bold mb-2 md:mb-8 tracking-tight font-mono mx-auto"
            cursorClassName="text-white/60"
            words={[
              { text: ">", className: "text-white/60" },
              { text: "kyma", className: "bg-gradient-to-r from-sky-300 to-sky-500 bg-clip-text text-transparent" },
              { text: "presentation.md", className: "text-white" },
            ]}
          />
        </motion.div>

        <motion.div custom={2} variants={fadeUpVariants} initial="hidden" animate="visible">
          <p className="text-sm w-[90%] md:w-[60%] lg:w-[50%] xl:w-[40%] md:text-lg xl:text-2xl text-white/60 mb-8 leading-relaxed font-medium  max-w-xl mx-auto md:px-4">
            Have your next presentation in the terminal. Animations included.
          </p>
        </motion.div>

        <motion.div custom={3} variants={fadeUpVariants} initial="hidden" animate="visible">
          <div className="w-full sm:w-[60%] md:w-[52%] lg:w-[60%]  2xl:w-1/4 xl:w-1/3 mx-auto flex justify-between items-center md:gap-2 px-2 md:px-4 py-2 rounded-md bg-gradient-to-r from-sky-600/10 to-sky-900/10 border border-white/10 backdrop-blur-sm">
            <code className="text-xs md:text-sm text-white/80 font-mono w-[90%]">
              go install github.com/museslabs/kyma@latest
            </code>
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 md:h-8 md:w-8 hover:bg-white/5 transition-colors duration-300"
              onClick={copyToClipboard}
            >
              <div className="relative h-4 w-4">
                <Copy
                  className={cn(
                    "h-4 w-4 text-white/60 absolute transition-all duration-300",
                    copied ? "scale-0 rotate-90" : "scale-100 rotate-0"
                  )}
                />
                <Check
                  className={cn(
                    "h-4 w-4 text-green-500 absolute transition-all duration-300",
                    copied ? "scale-100 rotate-0" : "scale-0 -rotate-90"
                  )}
                />
              </div>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export { Hero };
