'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Zap, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Brand Development',
    description: 'Strategic web experiences that embody your brand vision with refined aesthetics.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Elegant interfaces marrying form and function with editorial precision.',
  },
  {
    icon: Smartphone,
    title: 'Landing Pages',
    description: 'Conversion-focused editorial experiences that captivate and inspire.',
  },
  {
    icon: Zap,
    title: 'Digital Products',
    description: 'Thoughtfully crafted applications with intuitive, beautiful interactions.',
  },
  {
    icon: CheckCircle2,
    title: 'Direction',
    description: 'Creative consultation and strategic guidance for digital excellence.',
  },
]

export default function Services() {
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
    <section id="services" className="grain relative py-32 px-4 bg-background">
      {/* Abstract atmospheric background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 right-0 w-[450px] h-[450px] bg-primary/5 rounded-[70%_30%_30%_70%/30%_70%_70%_30%] blur-3xl mix-blend-overlay"
          animate={{ 
            x: [0, -30, 20, 0],
            y: [0, 20, -15, 0]
          }}
          transition={{ duration: 13, ease: 'easeInOut', repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          <motion.span
            className="text-xs font-medium text-primary tracking-widest uppercase"
            variants={itemVariants}
          >
            What We Offer
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-display font-bold mt-6 text-foreground"
            variants={itemVariants}
          >
            Services
          </motion.h2>
          <motion.div
            className="w-8 h-px bg-primary mx-auto mt-6"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                className="group card-lift glassmorphism p-8 rounded-none border border-white/10 overflow-hidden relative"
                variants={itemVariants}
                whilehover={{ y: -6, rotateX: 2 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                {/* Shimmer border effect */}
                <motion.div
                  className="absolute inset-0 border border-primary/0 rounded-none pointer-events-none"
                  initial={{ borderColor: 'rgba(122, 15, 20, 0)' }}
                  whilehover={{ borderColor: 'rgba(122, 15, 20, 0.2)' }}
                  transition={{ duration: 0.3 }}
                ></motion.div>

                {/* Inner glow on hover */}
                <motion.div
                  className="absolute inset-0 rounded-none"
                  initial={{ opacity: 0 }}
                  whilehover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    boxShadow: 'inset 0 0 20px rgba(122, 15, 20, 0.2)',
                  }}
                ></motion.div>

                <div className="relative z-10">
                  <motion.div 
                    className="mb-6"
                    whilehover={{ scale: 1.1, color: 'rgba(122, 15, 20, 0.8)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-6 h-6 text-primary transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-body">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
