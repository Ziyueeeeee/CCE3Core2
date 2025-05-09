"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Stories", path: "/stories" },
    { name: "Resources", path: "/resources" },
    { name: "Contact", path: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-gradient-to-r from-blue-900/80 to-cyan-900/80 backdrop-blur-md border-b border-blue-500/30 shadow-glow-blue-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              AI Bias Initiative
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {routes.map((route, index) => (
              <motion.div
                key={route.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={route.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-cyan-300",
                    pathname === route.path ? "text-cyan-300" : "text-blue-100",
                  )}
                >
                  {route.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: routes.length * 0.1 }}
            >
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue">
                Take Action
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="md:hidden p-2 text-blue-100 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gradient-to-r from-blue-900/90 to-cyan-900/90 backdrop-blur-md border-b border-blue-500/30"
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {routes.map((route, index) => (
                <motion.div
                  key={route.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    href={route.path}
                    className={cn(
                      "text-sm font-medium py-2 transition-colors hover:text-cyan-300",
                      pathname === route.path ? "text-cyan-300" : "text-blue-100",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {route.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: routes.length * 0.1 }}
              >
                <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border-0 shadow-glow-blue w-full">
                  Take Action
                </Button>
              </motion.div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  )
}
