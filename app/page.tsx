"use client"

import Link from "next/link"
import { ArrowRight, BarChart3, Brain, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import StatCard from "@/components/stat-card"
import BiasVisualizer from "@/components/bias-visualizer"
import { motion } from "framer-motion"
import WaveBackground from "@/components/wave-background"
import FloatingElements from "@/components/floating-elements"
import GlowingOrbs from "@/components/glowing-orbs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-cyan-900 text-white">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 z-0">
          <WaveBackground />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-800/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.2),transparent_70%)]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        </div>

        <GlowingOrbs />

        <div className="container relative z-10 px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              Exposing AI Bias in Healthcare
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 text-blue-100"
            >
              Uncovering algorithmic injustice and advocating for equitable healthcare AI systems
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue"
              >
                <Link href="/stories">
                  Explore Stories <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-blue-400 text-blue-200 hover:bg-blue-900/50 backdrop-blur-sm"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <FloatingElements />
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/80 to-cyan-900/80 backdrop-blur-md relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptNiA2djZoNnYtNmgtNnptLTYgNnYtNmgtNnY2aDZ6bS02IDZ2LTZoLTZ2Nmg2em0xMi0xMnYtNmgtNnY2aDZ6bTYtNnYtNmgtNnY2aDZ6bS0xOCAwdi02aC02djZoNnptLTYgMHY2aDZ2LTZoLTZ6bTYgMTJ2LTZoLTZ2Nmg2em0tNiAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            The Reality of AI Bias in Healthcare
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StatCard
            //https://nihcm.org/publications/artificial-intelligences-racial-bias-in-health-care
              title="Racial Disparity"
              value="4.7x"
              description="AI algorithms create 4.7x more racial disparities in pain treatment measurements than standard methods"
              icon={<Users className="h-8 w-8 text-cyan-300" />}
            />
            <StatCard
            //https://www.unwomen.org/en/articles/explainer/artificial-intelligence-and-gender-equality
              title="Gender Bias"
              value="44%"
              description="of AI systems show significant gender bias at inference time"
              icon={<Brain className="h-8 w-8 text-blue-300" />}
            />
            <StatCard
            //https://executivegov.com/2023/08/deltek-report-federal-agencies-spent-7-7b-on-ai-in-past-3-fiscal-years/ 
            //https://www.grantexec.com/post/federal-ai-market-report-illuminating-a-multi-billion-dollar-landscape
              title="Research Gap"
              value="~$7.6B"
              description="funding disparity in AI research for equity driven initiatives"
              icon={<BarChart3 className="h-8 w-8 text-sky-300" />}
            />
          </div>
        </div>
      </section>

      {/* Visualization Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Visualizing the Impact
          </h2>

          <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 md:p-8 shadow-glow-blue-lg">
            <BiasVisualizer />
          </div>
        </div>

        {/* Background Blobs */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-cyan-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Explore Our Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/stories" className="group">
              <motion.div
                whileHover={{ y: -5, scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 h-full transition-all duration-300 hover:border-cyan-400 shadow-glow-blue"
              >
                <FileText className="h-10 w-10 text-cyan-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personal Stories</h3>
                <p className="text-blue-100">Read real experiences of people affected by AI bias in healthcare</p>
                <div className="mt-4 text-cyan-300 group-hover:text-cyan-200 flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>

            <Link href="/resources" className="group">
              <motion.div
                whileHover={{ y: -5, scale: 1.02, rotateY: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 h-full transition-all duration-300 hover:border-cyan-400 shadow-glow-blue"
              >
                <Brain className="h-10 w-10 text-blue-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Educational Materials</h3>
                <p className="text-blue-100">Tools and guides to understand and identify AI bias in healthcare</p>
                <div className="mt-4 text-cyan-300 group-hover:text-cyan-200 flex items-center">
                  Explore resources{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>

            <Link href="/contact" className="group">
              <motion.div
                whileHover={{ y: -5, scale: 1.02, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 h-full transition-all duration-300 hover:border-cyan-400 shadow-glow-blue"
              >
                <Users className="h-10 w-10 text-sky-300 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
                <p className="text-blue-100">Connect with researchers, healthcare professionals, and advocates</p>
                <div className="mt-4 text-cyan-300 group-hover:text-cyan-200 flex items-center">
                  Get involved <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
