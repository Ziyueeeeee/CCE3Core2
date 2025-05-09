"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  const elements = [
    { size: 60, x: "10%", y: "20%", delay: 0, duration: 8, shape: "circle" },
    { size: 40, x: "85%", y: "15%", delay: 1, duration: 10, shape: "triangle" },
    { size: 80, x: "75%", y: "60%", delay: 2, duration: 12, shape: "square" },
    { size: 30, x: "20%", y: "70%", delay: 3, duration: 9, shape: "circle" },
    { size: 50, x: "50%", y: "30%", delay: 4, duration: 11, shape: "pentagon" },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, index) => {
        let shape
        switch (el.shape) {
          case "triangle":
            shape = (
              <div
                className="absolute bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: `${el.size / 2}px solid transparent`,
                  borderRight: `${el.size / 2}px solid transparent`,
                  borderBottom: `${el.size}px solid rgba(56, 189, 248, 0.1)`,
                }}
              />
            )
            break
          case "square":
            shape = (
              <div
                className="absolute rounded-md bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md"
                style={{
                  width: el.size,
                  height: el.size,
                }}
              />
            )
            break
          case "pentagon":
            shape = (
              <div
                className="absolute bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md"
                style={{
                  width: el.size,
                  height: el.size,
                  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
                }}
              />
            )
            break
          default:
            shape = (
              <div
                className="absolute rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md"
                style={{
                  width: el.size,
                  height: el.size,
                }}
              />
            )
        }

        return (
          <motion.div
            key={index}
            style={{
              left: el.x,
              top: el.y,
            }}
            animate={{
              y: ["0%", "5%", "0%", "-5%", "0%"],
              x: ["0%", "3%", "0%", "-3%", "0%"],
              rotate: [0, 10, 0, -10, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: el.duration,
              delay: el.delay,
              ease: "easeInOut",
            }}
          >
            {shape}
          </motion.div>
        )
      })}
    </div>
  )
}
