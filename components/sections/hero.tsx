'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="grain relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4 pt-20 pb-20">
      {/* Abstract blurred atmospheric backgrounds */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top-right organic crimson shape */}
        <motion.div
          className="absolute top-20 right-0 w-[500px] h-[400px] bg-primary/6 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-3xl mix-blend-overlay"
          animate={{
            x: [0, 20, -10, 15, 0],
            y: [0, -15, 10, -12, 0]
          }}
          transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
        ></motion.div>

        {/* Bottom-left organic burgundy shape */}
        <motion.div
          className="absolute -bottom-20 -left-20 w-[450px] h-[450px] bg-primary/5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl mix-blend-overlay"
          animate={{
            x: [0, -25, 15, -20, 0],
            y: [0, 20, -15, 18, 0]
          }}
          transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
        ></motion.div>
      </div>

      <motion.div
        className="w-full max-w-4xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        {/* Navigation Bar */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <motion.div
              className="text-xl font-display font-bold tracking-[0.2em] text-foreground"
              variants={itemVariants}
            >
              nefer
            </motion.div>
            <div className="hidden md:flex gap-8 items-center">
              {['About', 'Services', 'Work', 'Pricing', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </motion.nav>

        {/* Main Hero Content */}
        <div className="pt-20">
          <motion.h1
            className="text-6xl md:text-8xl font-display font-bold leading-tight tracking-tighter text-foreground mb-8"
            variants={itemVariants}
          >
            Where Vision
            <br />
            Meets Precision
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-body"
            variants={itemVariants}
          >
            A luxury web development and design studio crafting refined digital experiences for ambitious brands. Editorial elegance meets technical precision.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href="#work"
              className="group btn-interactive px-8 py-3 bg-primary text-primary-foreground font-medium font-display rounded-sm flex items-center gap-2"
              whilehover={{ scale: 1.03 }}
              whiletap={{ scale: 0.97 }}
            >
              View Portfolio
              <motion.span
                animate={{ x: 0 }}
                whilehover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </Link>
            <Link
              href="#contact"
              className="group btn-interactive px-8 py-3 border border-primary text-primary font-medium font-display rounded-sm"
              whilehover={{ scale: 1.03 }}
              whiletap={{ scale: 0.97 }}
            >
              Start a Project
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border border-primary rounded-full flex justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
