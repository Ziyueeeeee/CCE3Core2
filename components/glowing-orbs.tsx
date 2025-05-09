"use client"

import { useEffect, useRef } from "react"

export default function GlowingOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

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

    // Orb class
    class Orb {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      alpha: number
      pulse: number
      pulseSpeed: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 100 + 50
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5

        // Blue and cyan colors
        const colors = [
          "rgba(59, 130, 246, ", // blue
          "rgba(6, 182, 212, ", // cyan
          "rgba(56, 189, 248, ", // sky
          "rgba(14, 165, 233, ", // light blue
        ]

        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.alpha = Math.random() * 0.05 + 0.02
        this.pulse = 0
        this.pulseSpeed = Math.random() * 0.01 + 0.005
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.pulse += this.pulseSpeed

        // Bounce off edges
        if (this.x > canvas.width + this.size || this.x < -this.size) {
          this.speedX = -this.speedX
        }

        if (this.y > canvas.height + this.size || this.y < -this.size) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return
        const pulseFactor = Math.sin(this.pulse) * 0.2 + 0.8
        const size = this.size * pulseFactor

        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, size)
        gradient.addColorStop(0, this.color + this.alpha * 2 + ")")
        gradient.addColorStop(0.5, this.color + this.alpha + ")")
        gradient.addColorStop(1, this.color + "0)")

        ctx.beginPath()
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Create orbs
    const orbs: Orb[] = []
    const orbCount = 5

    for (let i = 0; i < orbCount; i++) {
      orbs.push(new Orb())
    }

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw orbs
      for (const orb of orbs) {
        orb.update()
        orb.draw()
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
