"use client"

import { useEffect, useRef, useState } from "react"

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const [particleCount, setParticleCount] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5

        // Bright purple and pink colors
        const colors = [
          "rgba(255, 105, 180, ", // Hot pink
          "rgba(186, 85, 211, ", // Medium orchid
          "rgba(147, 112, 219, ", // Medium purple
          "rgba(138, 43, 226, ", // Blue violet
          "rgba(255, 0, 255, ", // Magenta
          "rgba(218, 112, 214, ", // Orchid
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.5 + 0.1
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color + this.alpha + ")"
        ctx.fill()
      }
    }

    // Create particles only after mount (client-side)
    const count = Math.min(100, Math.floor((window.innerWidth * window.innerHeight) / 10000))
    setParticleCount(count)
    particlesRef.current = Array.from({ length: count }, () => new Particle())

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (const particle of particlesRef.current) {
        particle.update()
        particle.draw()
      }

      // Draw connections
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x
          const dy = particlesRef.current[i].y - particlesRef.current[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y)
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
