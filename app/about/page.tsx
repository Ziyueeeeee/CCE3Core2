"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import WaveBackground from "@/components/wave-background"

export default function AboutPage() {
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
              About Our Initiative
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              We are dedicated to exposing algorithmic bias in healthcare AI systems and advocating for equitable
              solutions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-blue-100 mb-4">
                Our mission is to identify, expose, and eliminate algorithmic bias in healthcare AI systems that
                disproportionately impact marginalized communities.
              </p>
              <p className="text-blue-100 mb-4">
                We believe that AI has the potential to revolutionize healthcare, but only if it works equitably for
                everyone. Through research, education, and advocacy, we're working to ensure that healthcare AI systems
                deliver fair and just outcomes.
              </p>
              <p className="text-blue-100">
                Inspired by the work of the Algorithmic Justice League, we focus specifically on healthcare AI systems
                and their impact on patient outcomes across different demographic groups.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-8 shadow-glow-blue">
              <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Equity</h4>
                    <p className="text-blue-200 text-sm">Ensuring AI systems work fairly for all populations</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Transparency</h4>
                    <p className="text-blue-200 text-sm">Advocating for open and explainable AI systems</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Accountability</h4>
                    <p className="text-blue-200 text-sm">Holding developers and institutions responsible</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="mr-4 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Education</h4>
                    <p className="text-blue-200 text-sm">Spreading awareness about AI bias in healthcare</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Maya Johnson",
                role: "Founder & Lead Researcher",
                bio: "AI ethics researcher with 15 years of experience in healthcare technology",
              },
              {
                name: "Alex Rivera",
                role: "Data Scientist",
                bio: "Specializes in identifying bias patterns in large healthcare datasets",
              },
              {
                name: "Dr. Sarah Chen",
                role: "Medical Advisor",
                bio: "Practicing physician focused on health equity and technology integration",
              },
              {
                name: "Marcus Williams",
                role: "Policy Advocate",
                bio: "Works with legislators to develop ethical guidelines for AI in healthcare",
              },
              {
                name: "Priya Patel",
                role: "Community Outreach",
                bio: "Connects with affected communities to document real-world impacts",
              },
              {
                name: "Dr. James Wilson",
                role: "Technical Director",
                bio: "Develops tools to audit healthcare AI systems for bias",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 shadow-glow-blue"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mb-4" />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-cyan-400 mb-2">{member.role}</p>
                <p className="text-blue-200">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Cause</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're looking for researchers, healthcare professionals, and advocates to join our initiative.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue"
            >
              <Link href="/contact">
                Get Involved <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
