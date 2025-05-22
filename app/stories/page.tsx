"use client"

import { ArrowRight, MessageCircle, Share2, ThumbsUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import WaveBackground from "@/components/wave-background"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export default function StoriesPage() {
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
              Real Stories, Real Impact
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              Personal experiences that highlight the human cost of algorithmic bias in healthcare AI systems.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            Featured Stories
          </h2>

          <div className="space-y-12">
            {[
              {
                title: "Misdiagnosed: How AI Overlooked My Symptoms",
                author: "Maria Rodriguez",
                location: "Chicago, IL",
                date: "June 12, 2023",
                tags: ["Diagnosis", "Racial Bias", "Primary Care"],
                excerpt:
                  "I first noticed a small, irregular mole on my medium-brown skin early this year, but the clinic’s AI-powered dermoscopy scanner flagged it as low-risk—despite systems reporting 96% sensitivity on fair skin versus 61% on darker tones—so it wasn’t biopsied until it grew and started itching, only then revealing Stage II melanoma instead of the earlier Stage I it could have been caught as.",
                image: "/placeholder.svg?height=400&width=400",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "The Algorithm Didn't See My Pain",
                author: "James Washington",
                location: "Atlanta, GA",
                date: "March 3, 2023",
                tags: ["Pain Assessment", "Racial Bias", "Emergency Care"],
                excerpt:
                  "After my stage III colon-cancer surgery, I hoped to join a promising immunotherapy trial, but the eligibility algorithm screened me out—reflecting a pattern where Black patients make up only 5–7% of oncology trial enrollees despite representing about 14% of U.S. cancer patients—leaving me on standard chemo and missing cutting-edge care.",
                image: "/placeholder.svg?height=400&width=400",
                avatar: "/placeholder.svg?height=100&width=100",
              },
              {
                title: "Denied Care: When Algorithms Make Life-Altering Decisions",
                author: "Dr. Sarah Chen",
                location: "Boston, MA",
                date: "April 17, 2023",
                tags: ["Resource Allocation", "Socioeconomic Bias", "Healthcare Access"],
                excerpt:
                  "At our hospital, an AI tool prioritized CT lung-cancer screening for suburban branches—where it predicted 80% scan completion rate versus 45% in our urban clinic—so lower-income, predominantly non-White patients were not prioritized, causing early-stage detection to rise 15% in the suburbs while stagnating in the city.",
                image: "/placeholder.svg?height=400&width=400",
                avatar: "/placeholder.svg?height=100&width=100",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl overflow-hidden shadow-glow-blue"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 z-10" />
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10 mr-3 border-2 border-blue-500">
                        <AvatarImage src={story.avatar || "/placeholder.svg"} alt={story.author} />
                        <AvatarFallback className="bg-blue-700">{story.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium text-white">{story.author}</h4>
                        <p className="text-sm text-blue-200">
                          {story.location} • {story.date}
                        </p>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{story.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {story.tags.map((tag) => (
                        <Badge key={tag} className="bg-blue-600/50 hover:bg-blue-600/70 text-white">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-blue-100 mb-6">{story.excerpt}</p>
                    <div className="flex flex-wrap gap-3 items-center">
                      <Button variant="outline" className="border-blue-400 text-blue-200 hover:bg-blue-800/50">
                        Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                      <div className="flex gap-3 ml-auto">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-blue-300 hover:text-white hover:bg-blue-800/50"
                        >
                          <ThumbsUp className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-blue-300 hover:text-white hover:bg-blue-800/50"
                        >
                          <MessageCircle className="h-5 w-5" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-blue-300 hover:text-white hover:bg-blue-800/50"
                        >
                          <Share2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Share Your Story Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Share Your Story
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Have you experienced bias in healthcare AI systems? Your story can help drive change and awareness.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue"
            >
              <Link href="/contact">
                Submit Your Experience <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
