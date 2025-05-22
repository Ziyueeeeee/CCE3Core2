"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

// Sample data for visualization
const biasData = [
  //https://arxiv.org/abs/2004.13515
  { category: "Diagnosis Accuracy for Retinal Disease", biasLevel: 60.5, baseline: 73 },
  //https://www.kidneynews.org/view/journals/kidney-news/13/1/article-p1_1.xml
  { category: "Treatment Recommendations for Kidney Disease", biasLevel: 14.9, baseline: 18.4 },
  //https://pubmed.ncbi.nlm.nih.gov/31649194/
  { category: "Resource Allocation for Extra Care", biasLevel: 17.7, baseline: 46.5 },
  //https://www.cancer.gov/news-events/cancer-currents-blog/2024/black-patients-beliefs-clinical-medical-research
  { category: "Clinical Trial Selection for Black Americans vs Population Makeup", biasLevel: 6, baseline: 14 },
]

export default function BiasVisualizer() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center"
      >
        <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
          AI Bias Impact on Healthcare Outcomes
        </h3>
        <p className="text-blue-100 max-w-2xl mx-auto">
          This visualization shows the disparity in healthcare outcomes between baseline performance and performance for
          underrepresented groups.
        </p>
      </motion.div>

      <div className="space-y-6">
        {biasData.map((item, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between text-sm">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.category}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-blue-200"
              >
                {item.biasLevel}% vs {item.baseline}% baseline
              </motion.span>
            </div>
            <div className="relative h-8 bg-blue-900/30 backdrop-blur-sm rounded-md overflow-hidden border border-blue-500/30">
              <motion.div
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${item.baseline}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="absolute h-full bg-sky-600/40 backdrop-blur-sm rounded-md"
              />
              <motion.div
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${item.biasLevel}%` } : { width: 0 }}
                transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                className="absolute h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-md"
              />
            </div>
            <div className="flex justify-between text-xs text-blue-300">
              <span>0%</span>
              <span>100%</span>
            </div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-6 flex items-center justify-center space-x-6"
      >
        <div className="flex items-center">
          <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-sm mr-2"></div>
          <span className="text-sm text-blue-100">Underrepresented Groups</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-sky-600/40 rounded-sm mr-2"></div>
          <span className="text-sm text-blue-100">Baseline Performance</span>
        </div>
      </motion.div>
    </div>
  )
}
