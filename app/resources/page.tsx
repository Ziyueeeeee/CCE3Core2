"use client"

import { ArrowRight, BookOpen, FileText, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import WaveBackground from "@/components/wave-background"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0">
          <WaveBackground />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-800/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-grid-pattern" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200"
            >
              Educational Resources
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              Tools, guides, and materials to help you understand and address AI bias in healthcare.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Resources Categories */}
      <section className="py-20 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 text-center shadow-glow-blue"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Educational Guides</h3>
              <p className="text-blue-200">Comprehensive guides to understanding AI bias in healthcare contexts</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 text-center shadow-glow-blue"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
              <p className="text-blue-200">Real-world examples of AI bias in healthcare systems and their impacts</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 text-center shadow-glow-blue"
            >
              <div className="mx-auto w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center mb-4">
                <Video className="h-6 w-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Tutorials</h3>
              <p className="text-blue-200">Visual explanations of complex concepts related to AI bias</p>
            </motion.div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Featured Resources
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "Understanding AI Bias in Healthcare: A Primer",
                type: "Guide",
                description:
                  "This comprehensive guide explains the fundamental concepts of AI bias in healthcare contexts, with examples and case studies.",
                icon: <BookOpen className="h-5 w-5 text-cyan-400" />,
              },
              {
                title: "Bias Detection Toolkit for Healthcare Professionals",
                type: "Toolkit",
                description:
                  "A practical toolkit designed to help healthcare professionals identify potential bias in the AI systems they use in clinical settings.",
                icon: <FileText className="h-5 w-5 text-cyan-400" />,
              },
              {
                title: "The Racial Bias in Pain Assessment Algorithms: Case Study",
                type: "Case Study",
                description:
                  "An in-depth analysis of how pain assessment algorithms show racial bias and the real-world impact on patient care.",
                icon: <FileText className="h-5 w-5 text-cyan-400" />,
              },
              {
                title: "How AI Reinforces Healthcare Disparities: Video Series",
                type: "Video",
                description:
                  "A six-part video series exploring how AI systems can reinforce existing healthcare disparities if not properly designed and monitored.",
                icon: <Video className="h-5 w-5 text-cyan-400" />,
              },
              {
                title: "Inclusive Dataset Development Guide",
                type: "Guide",
                description:
                  "A guide for researchers and developers on creating more inclusive and representative datasets for training healthcare AI models.",
                icon: <BookOpen className="h-5 w-5 text-cyan-400" />,
              },
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 shadow-glow-blue"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">{resource.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                    <p className="text-cyan-400 mb-2">{resource.type}</p>
                    <p className="text-blue-100 mb-4">{resource.description}</p>
                    <Button variant="outline" size="sm" className="border-blue-400 text-blue-200 hover:bg-blue-800/50">
                      Access Resource <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Tool Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Interactive Bias Statistics Tool
            </h2>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-8 shadow-glow-blue"
            >
              <p className="text-blue-100 mb-6 text-center">
                Our interactive tool allows you to explore statistics about AI bias in healthcare across different
                demographic groups and medical contexts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1">Medical Context</label>
                    <select className="w-full bg-blue-950/50 border border-blue-500/50 rounded-md p-2 text-white focus:border-cyan-400 focus:ring-cyan-400">
                      <option>Diagnostic Systems</option>
                      <option>Treatment Recommendations</option>
                      <option>Pain Assessment</option>
                      <option>Resource Allocation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-200 mb-1">Demographic Factor</label>
                    <select className="w-full bg-blue-950/50 border border-blue-500/50 rounded-md p-2 text-white focus:border-cyan-400 focus:ring-cyan-400">
                      <option>Race/Ethnicity</option>
                      <option>Gender</option>
                      <option>Age</option>
                      <option>Socioeconomic Status</option>
                    </select>
                  </div>
                </div>

                <div className="bg-blue-950/50 border border-blue-500/30 rounded-lg p-4 flex items-center justify-center">
                  <p className="text-blue-200 text-center">
                    [Interactive visualization will appear here based on your selection]
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue">
                  Generate Statistics
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Request Resources Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Need Specific Resources?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              If you're looking for specific educational materials or resources, let us know and we'll help you find
              them.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue"
            >
              <Link href="/contact">
                Request Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
