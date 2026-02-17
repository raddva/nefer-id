'use client'

import { motion } from 'framer-motion'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="about" className="grain relative py-32 px-4 bg-background">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-1/3 w-125 h-125 bg-primary/5 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl mix-blend-overlay"
          animate={{
            x: [0, 20, -15, 0],
            y: [0, -25, 20, 0]
          }}
          transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.span
                className="text-xs font-medium text-primary tracking-widest uppercase"
                variants={itemVariants}
              >
                Who We Are
              </motion.span>
              <motion.h2
                className="text-5xl md:text-6xl font-display font-bold mt-6 text-foreground"
                variants={itemVariants}
              >
                Where Vision Meets Craft
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed font-body"
              variants={itemVariants}
            >
              Nefer—from the Egyptian concept meaning beauty, completeness, and perfection. We channel this philosophy into every project: meticulous attention to detail, refined aesthetics, and technical excellence working in harmony.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed font-body"
              variants={itemVariants}
            >
              We're a design studio and development house specializing in premium digital experiences. From editorial websites to complex applications, we craft solutions that are as beautiful as they are functional—designed to inspire and built to perform.
            </motion.p>

            <motion.div
              className="pt-4 flex gap-16 border-t border-white/5"
              variants={itemVariants}
            >
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground font-body">Projects Delivered</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">40+</div>
                <p className="text-sm text-muted-foreground font-body">Luxury Brands</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">10+</div>
                <p className="text-sm text-muted-foreground font-body">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-96 rounded-none overflow-hidden glassmorphism border-white/10"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/8 to-secondary/5"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-7xl font-serif text-primary/30">◆</div>
                <p className="text-muted-foreground font-body mt-4">Refined Craft</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
