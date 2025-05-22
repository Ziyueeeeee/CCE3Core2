"use client"

import type React from "react"

import { useState } from "react"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import WaveBackground from "@/components/wave-background"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-blue-100 mb-8"
            >
              Get in touch with our team to learn more about our work or to collaborate on addressing AI bias in
              healthcare.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Get In Touch
              </h2>
              <p className="text-blue-100 mb-8">
                Whether you're interested in our work, want to collaborate, or have questions about AI bias in
                healthcare, we'd love to hear from you.
              </p>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-blue-200">contact-aibias-healthcare@ucsd.edu</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-blue-200">(123) 456-7891</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start">
                  <div className="mr-4 h-10 w-10 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-blue-200">
                      9450 Gilman Dr
                      <br />
                      La Jolla, CA 92092
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 md:p-8 shadow-glow-blue"
            >
              <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-blue-950/50 border-blue-500/50 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-blue-950/50 border-blue-500/50 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-200 mb-1">
                    Subject
                  </label>
                  <Select onValueChange={handleSelectChange} value={formData.subject}>
                    <SelectTrigger className="bg-blue-950/50 border-blue-500/50 focus:border-cyan-400 focus:ring-cyan-400">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="stories">Share Your Story</SelectItem>
                      <SelectItem value="resources">Educational Resources</SelectItem>
                      <SelectItem value="speaking">Speaking Request</SelectItem>
                      <SelectItem value="media">Media Inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-200 mb-1">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-blue-950/50 border-blue-500/50 focus:border-cyan-400 focus:ring-cyan-400"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue"
                >
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-gradient-to-b from-blue-900/90 to-cyan-900/90 relative">
        <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
              Join Our Community
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 text-center shadow-glow-blue"
              >
                <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                <p className="text-blue-200 mb-4">Stay updated with our latest research, events, and resources.</p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue">
                  Subscribe
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 text-center shadow-glow-blue"
              >
                <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
                <p className="text-blue-200 mb-4">Contribute your skills to help advance our mission.</p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue">
                  Apply Now
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-800/40 to-cyan-800/40 backdrop-blur-md border border-blue-500/50 rounded-xl p-6 text-center shadow-glow-blue"
              >
                <h3 className="text-xl font-semibold mb-4">Donate</h3>
                <p className="text-blue-200 mb-4">Support our research and educational initiatives.</p>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue">
                  Donate
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
