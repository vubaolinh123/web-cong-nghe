"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"

interface Vector2D {
  x: number
  y: number
}

class Particle {
  pos: Vector2D = { x: 0, y: 0 }
  vel: Vector2D = { x: 0, y: 0 }
  acc: Vector2D = { x: 0, y: 0 }
  target: Vector2D = { x: 0, y: 0 }

  closeEnoughTarget = 80
  maxSpeed = 0.8
  maxForce = 0.08
  particleSize = 10
  isKilled = false

  startColor = { r: 0, g: 0, b: 0 }
  targetColor = { r: 0, g: 0, b: 0 }
  colorWeight = 0
  colorBlendRate = 0.01

  move() {
    let proximityMult = 1
    const distance = Math.sqrt(Math.pow(this.pos.x - this.target.x, 2) + Math.pow(this.pos.y - this.target.y, 2))

    if (distance < this.closeEnoughTarget) {
      proximityMult = distance / this.closeEnoughTarget
    }

    const towardsTarget = {
      x: this.target.x - this.pos.x,
      y: this.target.y - this.pos.y,
    }

    const magnitude = Math.sqrt(towardsTarget.x * towardsTarget.x + towardsTarget.y * towardsTarget.y)
    if (magnitude > 0) {
      towardsTarget.x = (towardsTarget.x / magnitude) * this.maxSpeed * proximityMult
      towardsTarget.y = (towardsTarget.y / magnitude) * this.maxSpeed * proximityMult
    }

    const steer = {
      x: towardsTarget.x - this.vel.x,
      y: towardsTarget.y - this.vel.y,
    }

    const steerMagnitude = Math.sqrt(steer.x * steer.x + steer.y * steer.y)
    if (steerMagnitude > 0) {
      steer.x = (steer.x / steerMagnitude) * this.maxForce
      steer.y = (steer.y / steerMagnitude) * this.maxForce
    }

    this.acc.x += steer.x
    this.acc.y += steer.y

    this.vel.x += this.acc.x
    this.vel.y += this.acc.y
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
    this.acc.x = 0
    this.acc.y = 0
  }

  draw(ctx: CanvasRenderingContext2D, drawAsPoints: boolean) {
    if (this.colorWeight < 1.0) {
      this.colorWeight = Math.min(this.colorWeight + this.colorBlendRate, 1.0)
    }

    const currentColor = {
      r: Math.round(this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight),
      g: Math.round(this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight),
      b: Math.round(this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight),
    }

    if (drawAsPoints) {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
      ctx.fillRect(this.pos.x, this.pos.y, 2, 2)
    } else {
      ctx.fillStyle = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`
      ctx.beginPath()
      ctx.arc(this.pos.x, this.pos.y, this.particleSize / 2, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  kill(width: number, height: number) {
    if (!this.isKilled) {
      const randomPos = this.generateRandomPos(width / 2, height / 2, (width + height) / 2)
      this.target.x = randomPos.x
      this.target.y = randomPos.y

      this.startColor = {
        r: this.startColor.r + (this.targetColor.r - this.startColor.r) * this.colorWeight,
        g: this.startColor.g + (this.targetColor.g - this.startColor.g) * this.colorWeight,
        b: this.startColor.b + (this.targetColor.b - this.startColor.b) * this.colorWeight,
      }
      this.targetColor = { r: 0, g: 0, b: 0 }
      this.colorWeight = 0

      this.isKilled = true
    }
  }

  private generateRandomPos(x: number, y: number, mag: number): Vector2D {
    const randomX = Math.random() * 1000
    const randomY = Math.random() * 500

    const direction = {
      x: randomX - x,
      y: randomY - y,
    }

    const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y)
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag
      direction.y = (direction.y / magnitude) * mag
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    }
  }
}

// Brand colors for ASI EVEREST
const BRAND_COLORS = [
  { r: 6, g: 182, b: 212 },   // cyan-500
  { r: 59, g: 130, b: 246 },  // blue-500
  { r: 34, g: 211, b: 238 },  // cyan-400
  { r: 96, g: 165, b: 250 },  // blue-400
  { r: 14, g: 165, b: 233 },  // sky-500
]

interface ParticleTextEffectProps {
  words?: string[]
  onComplete?: () => void
  showLogoAtEnd?: boolean
  logoSrc?: string
  autoAdvanceInterval?: number // frames between words (60fps)
}

const DEFAULT_WORDS = ["HELLO", "WE", "ARE", "ASI EVEREST"]

export function ParticleTextEffect({
  words = DEFAULT_WORDS,
  onComplete,
  showLogoAtEnd = true,
  logoSrc = "/image/logo.png",
  autoAdvanceInterval = 48 // 0.8 seconds at 60fps
}: ParticleTextEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const frameCountRef = useRef(0)
  const wordIndexRef = useRef(0)
  const [showLogo, setShowLogo] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const colorIndexRef = useRef(0)

  // Preload logo image
  useEffect(() => {
    if (showLogoAtEnd && logoSrc) {
      const img = new window.Image()
      img.onload = () => setLogoLoaded(true)
      img.src = logoSrc
    }
  }, [showLogoAtEnd, logoSrc])

  const pixelSteps = 15 // Optimized from 10 to further reduce particle count for better performance
  const drawAsPoints = true

  const generateRandomPos = (x: number, y: number, mag: number): Vector2D => {
    const randomX = Math.random() * 1000
    const randomY = Math.random() * 500

    const direction = {
      x: randomX - x,
      y: randomY - y,
    }

    const magnitude = Math.sqrt(direction.x * direction.x + direction.y * direction.y)
    if (magnitude > 0) {
      direction.x = (direction.x / magnitude) * mag
      direction.y = (direction.y / magnitude) * mag
    }

    return {
      x: x + direction.x,
      y: y + direction.y,
    }
  }

  const nextWord = useCallback((word: string, canvas: HTMLCanvasElement) => {
    const offscreenCanvas = document.createElement("canvas")
    offscreenCanvas.width = canvas.width
    offscreenCanvas.height = canvas.height
    const offscreenCtx = offscreenCanvas.getContext("2d")!

    // Calculate responsive font size - much bigger
    const fontSize = Math.min(canvas.width / 4, 200)

    offscreenCtx.fillStyle = "white"
    offscreenCtx.font = `bold ${fontSize}px Arial`
    offscreenCtx.textAlign = "center"
    offscreenCtx.textBaseline = "middle"
    // Convert to uppercase
    offscreenCtx.fillText(word.toUpperCase(), canvas.width / 2, canvas.height / 2)

    const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data

    // Use brand colors instead of random
    colorIndexRef.current = (colorIndexRef.current + 1) % BRAND_COLORS.length
    const newColor = BRAND_COLORS[colorIndexRef.current]

    const particles = particlesRef.current
    let particleIndex = 0

    const coordsIndexes: number[] = []
    for (let i = 0; i < pixels.length; i += pixelSteps * 4) {
      coordsIndexes.push(i)
    }

    // Shuffle for fluid motion
    for (let i = coordsIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
        ;[coordsIndexes[i], coordsIndexes[j]] = [coordsIndexes[j], coordsIndexes[i]]
    }

    for (const coordIndex of coordsIndexes) {
      const pixelIndex = coordIndex
      const alpha = pixels[pixelIndex + 3]

      if (alpha > 0) {
        const x = (pixelIndex / 4) % canvas.width
        const y = Math.floor(pixelIndex / 4 / canvas.width)

        let particle: Particle

        if (particleIndex < particles.length) {
          particle = particles[particleIndex]
          particle.isKilled = false
          particleIndex++
        } else {
          particle = new Particle()

          const randomPos = generateRandomPos(canvas.width / 2, canvas.height / 2, (canvas.width + canvas.height) / 2)
          particle.pos.x = randomPos.x
          particle.pos.y = randomPos.y

          particle.maxSpeed = Math.random() * 3 + 2 // Further reduced for performance
          particle.maxForce = particle.maxSpeed * 0.03 // Further reduced force
          particle.particleSize = Math.random() * 3 + 3 // Smaller particles for performance
          particle.colorBlendRate = Math.random() * 0.03 + 0.005 // Slightly faster color blend

          particles.push(particle)
        }

        particle.startColor = {
          r: particle.startColor.r + (particle.targetColor.r - particle.startColor.r) * particle.colorWeight,
          g: particle.startColor.g + (particle.targetColor.g - particle.startColor.g) * particle.colorWeight,
          b: particle.startColor.b + (particle.targetColor.b - particle.startColor.b) * particle.colorWeight,
        }
        particle.targetColor = newColor
        particle.colorWeight = 0

        particle.target.x = x
        particle.target.y = y
      }
    }

    // Kill remaining particles
    for (let i = particleIndex; i < particles.length; i++) {
      particles[i].kill(canvas.width, canvas.height)
    }
  }, [])

  const handleSkip = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    setIsComplete(true)
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    // Set canvas size based on container
    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    // Initialize with first word
    nextWord(words[0], canvas)

    const animate = () => {
      const ctx = canvas.getContext("2d")!
      const particles = particlesRef.current

      // Background with motion blur - higher opacity for better performance and cleaner trails
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        particle.move()
        particle.draw(ctx, drawAsPoints)

        if (particle.isKilled) {
          if (
            particle.pos.x < 0 ||
            particle.pos.x > canvas.width ||
            particle.pos.y < 0 ||
            particle.pos.y > canvas.height
          ) {
            particles.splice(i, 1)
          }
        }
      }

      // Auto-advance words
      frameCountRef.current++
      if (frameCountRef.current % autoAdvanceInterval === 0) {
        wordIndexRef.current++

        if (wordIndexRef.current < words.length) {
          nextWord(words[wordIndexRef.current], canvas)
        } else if (showLogoAtEnd && wordIndexRef.current === words.length) {
          // Kill all particles and show logo
          particles.forEach((particle) => {
            particle.kill(canvas.width, canvas.height)
          })

          // Wait a bit then show logo
          setTimeout(() => {
            setShowLogo(true)
            // Complete after logo display
            setTimeout(() => {
              setIsComplete(true)
              onComplete?.()
            }, 2000)
          }, 500)
        } else if (!showLogoAtEnd) {
          // No logo, complete now
          setIsComplete(true)
          onComplete?.()
        }
      }

      if (!isComplete) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', updateCanvasSize)
    }
  }, [words, autoAdvanceInterval, showLogoAtEnd, onComplete, nextWord, isComplete])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Logo overlay - only show when logo is loaded */}
      {showLogo && logoSrc && logoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-10 animate-fade-in">
          {/* Dark gradient background overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-900/95 to-slate-950/90" />

          <div className="relative">
            {/* Simplified glow for better performance */}
            <div className="absolute -inset-12 rounded-full bg-cyan-500/20 blur-2xl" />

            {/* Logo container with gradient background */}
            <div className="relative bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-950/90 border-2 border-cyan-400/60 rounded-3xl p-10 sm:p-12 shadow-[0_0_60px_rgba(34,211,238,0.4)]">
              {/* Inner border glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10" />

              <Image
                src={logoSrc}
                alt="Logo"
                width={500}
                height={200}
                priority
                className="relative h-28 sm:h-36 md:h-48 w-auto object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.3)] filter brightness-110"
              />
            </div>
          </div>
        </div>
      )}

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 z-20 px-4 py-2 text-sm text-slate-400 hover:text-white border border-slate-700 hover:border-cyan-500/50 rounded-full transition-all duration-300 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50"
      >
        Skip
      </button>

      {/* Progress indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {words.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index <= wordIndexRef.current
              ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
              : 'bg-slate-700'
              }`}
          />
        ))}
        {showLogoAtEnd && (
          <div
            className={`w-2 h-2 rounded-full transition-all duration-300 ${showLogo
              ? 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
              : 'bg-slate-700'
              }`}
          />
        )}
      </div>
    </div>
  )
}

export default ParticleTextEffect
