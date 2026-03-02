'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Meridian Studio',
    category: 'Design Platform',
    description: 'Editorial-first design tool with refined interactions and luxury aesthetic',
    featured: true,
  },
  {
    id: 2,
    title: 'Essentia',
    category: 'Brand Experience',
    description: 'Luxury skincare brand website with seamless storytelling',
    featured: false,
  },
  {
    id: 3,
    title: 'Arc Collective',
    category: 'Portfolio',
    description: 'Artist collective platform showcasing curated work',
    featured: false,
  },
  {
    id: 4,
    title: 'Onyx Analytics',
    category: 'Dashboard',
    description: 'Premium analytics interface with editorial precision',
    featured: false,
  },
  {
    id: 5,
    title: 'Campaign Suite',
    category: 'Marketing',
    description: 'High-converting editorial campaigns for luxury brands',
    featured: false,
  },
  {
    id: 6,
    title: 'Verity Identity',
    category: 'Brand Design',
    description: 'Complete visual systems and brand guidelines',
    featured: false,
  },
]

export default function Portfolio() {
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
    <section id="work" className="grain relative py-32 px-4 bg-background">
      {/* Abstract atmospheric background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-[40%_60%_30%_70%/70%_30%_70%_30%] blur-3xl mix-blend-overlay"
          animate={{
            x: [0, 20, -25, 0],
            y: [0, -20, 15, 0]
          }}
          transition={{ duration: 15, ease: 'easeInOut', repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          <motion.span
            className="text-xs font-medium text-primary tracking-widest uppercase"
            variants={itemVariants}
          >
            Featured Work
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-display font-bold mt-6 text-foreground"
            variants={itemVariants}
          >
            Portfolio
          </motion.h2>
          <motion.div
            className="w-8 h-px bg-primary mt-6"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`group relative rounded-none overflow-hidden border border-white/10 cursor-pointer shadow-depth ${project.featured ? 'lg:col-span-2' : ''
                }`}
              variants={itemVariants}
              whilehover={{ y: -10 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              <motion.div
                className={`relative overflow-hidden bg-gradient-to-br from-primary/8 to-secondary/5 ${project.featured ? 'h-80' : 'h-56'}`}
                whilehover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                {/* Subtle grid background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(rgba(122, 15, 20, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(122, 15, 20, 0.08) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                  }}></div>
                </div>

                {/* Overlay blur on hover */}
                <motion.div
                  className="absolute inset-0 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  whilehover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                ></motion.div>

                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0.3 }}
                  whilehover={{ opacity: 0.7 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-center">
                    <div className="text-6xl font-display text-primary/30">◆</div>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="p-8 bg-card/50 backdrop-blur-sm border-t border-white/5"
                initial={{ y: 0 }}
                whilehover={{ y: -4 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-medium text-primary uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-display font-bold text-foreground mt-4 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6 font-body leading-relaxed">
                  {project.description}
                </p>
                <motion.div
                  className="flex items-center text-primary text-sm font-medium"
                  whilehover={{ gap: 8 }}
                >
                  Explore Project
                  <motion.span
                    animate={{ x: 0, y: 0 }}
                    whilehover={{ x: 4, y: -4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  >
                    <ArrowUpRight className="w-4 h-4 ml-2" />
                  </motion.span>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
