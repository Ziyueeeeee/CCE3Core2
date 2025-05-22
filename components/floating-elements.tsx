"use client"

import { motion } from "framer-motion"

export default function FloatingElements() {
  const elements = [
    { size: 60, x: "10%", y: "20%", delay: 0, duration: 8 },
    { size: 40, x: "85%", y: "15%", delay: 1, duration: 10 },
    { size: 80, x: "75%", y: "60%", delay: 2, duration: 12 },
    { size: 30, x: "20%", y: "70%", delay: 3, duration: 9 },
    { size: 50, x: "50%", y: "30%", delay: 4, duration: 11 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, index) => (
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
          {/* Medical Cross */}
          <div className="relative" style={{ width: el.size, height: el.size }}>
            {/* Vertical part of cross */}
            <div 
              className="absolute bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-md"
              style={{
                width: el.size * 0.3,
                height: el.size,
                left: "50%",
                transform: "translateX(-50%)",
              }}
            />
            {/* Horizontal part of cross */}
            <div 
              className="absolute bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-md"
              style={{
                width: el.size,
                height: el.size * 0.3,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  )
}
