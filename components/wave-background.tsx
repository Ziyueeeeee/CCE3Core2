"use client"

import { useEffect, useRef } from "react"

export default function WaveBackground() {
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

    // Wave parameters
    const waves = [
      {
        wavelength: 200,
        amplitude: 50,
        speed: 0.05,
        color: "rgba(56, 189, 248, 0.1)", // cyan
        offset: 0,
      },
      {
        wavelength: 100,
        amplitude: 30,
        speed: 0.03,
        color: "rgba(59, 130, 246, 0.1)", // blue
        offset: 50,
      },
      {
        wavelength: 300,
        amplitude: 70,
        speed: 0.02,
        color: "rgba(6, 182, 212, 0.1)", // cyan
        offset: 100,
      },
    ]

    let animationFrameId: number
    let time = 0

    // Animation loop
    const animate = () => {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach((wave) => {
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)

        for (let x = 0; x < canvas.width; x++) {
          const y =
            Math.sin((x + wave.offset + time * wave.speed) / wave.wavelength) * wave.amplitude + canvas.height / 2
          ctx.lineTo(x, y)
        }

        ctx.lineTo(canvas.width, canvas.height)
        ctx.lineTo(0, canvas.height)
        ctx.closePath()
        ctx.fillStyle = wave.color
        ctx.fill()
      })

      time++
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />
}
