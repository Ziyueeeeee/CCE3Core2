"use client"

import { useState, useEffect, type ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  description: string
  icon?: ReactNode
}

export default function StatCard({ title, value, description, icon }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02, rotateY: 5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={cn(
        "bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6",
        "hover:border-cyan-400 transition-all duration-300 shadow-glow-blue transform-gpu",
      )}
    >
      {icon && (
        <motion.div
          animate={isHovered ? { rotate: 5, scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4"
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-lg font-medium text-blue-100 mb-2">{title}</h3>
      <div className="flex items-baseline mb-3">
        <motion.span
          className="text-3xl font-bold text-white mr-2"
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {value}
        </motion.span>
      </div>
      <p className="text-blue-100">{description}</p>
    </motion.div>
  )
}
