'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Editorial',
    price: '3k',
    description: 'Landing pages and brand stories',
    features: [
      'Custom design direction',
      'Responsive layouts',
      'Performance optimization',
      'SEO fundamentals',
      '30 days support',
      'Unlimited revisions',
    ],
    highlighted: false,
  },
  {
    name: 'Studio',
    price: '8k',
    description: 'The complete package',
    features: [
      'Multi-page websites',
      'Complete design system',
      'Advanced integrations',
      'Analytics & conversion',
      '60 days support',
      'Unlimited revisions',
      'Brand guidelines',
    ],
    highlighted: true,
  },
  {
    name: 'Agency',
    price: '15k+',
    description: 'Complex digital products',
    features: [
      'Web applications',
      'Custom technology stack',
      'Ongoing consultation',
      '90+ days support',
      'Unlimited revisions',
      'Deployment & monitoring',
      'Security & compliance',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
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
    <section id="pricing" className="grain relative py-32 px-4 bg-background">
      {/* Abstract atmospheric background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-primary/5 rounded-[50%_50%_40%_60%/60%_40%_50%_50%] blur-3xl mix-blend-overlay"
          animate={{ 
            x: [0, -30, 25, 0],
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
            Investment
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-display font-bold mt-6 text-foreground"
            variants={itemVariants}
          >
            Pricing
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mt-8 max-w-2xl mx-auto font-body leading-relaxed"
            variants={itemVariants}
          >
            Transparent, bespoke pricing for projects of all scales. Each engagement is customized to your vision.
          </motion.p>
          <motion.div
            className="w-8 h-px bg-primary mx-auto mt-8"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative rounded-none border transition-all duration-500 p-10 ${
                plan.highlighted
                  ? 'glassmorphism border-primary/40 md:scale-105 md:-translate-y-4 animate-pulse-glow'
                  : 'glassmorphism border-white/10'
              }`}
              variants={itemVariants}
              whilehover={!plan.highlighted ? { y: -8, boxShadow: '0 0 30px rgba(122, 15, 20, 0.3)' } : {}}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              {plan.highlighted && (
                <motion.div
                  className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-primary px-4 py-2 rounded-none text-xs font-display font-bold text-primary-foreground"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  FEATURED
                </motion.div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm font-body">
                  {plan.description}
                </p>
              </div>

              <div className="mb-10 pb-10 border-b border-white/5">
                <div className="text-5xl font-display font-bold text-primary">
                  ${plan.price}
                </div>
                <p className="text-xs text-muted-foreground mt-3">Project-based pricing</p>
              </div>

              <motion.div
                whilehover={{ scale: 1.03 }}
                whiletap={{ scale: 0.97 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Link
                  href="#contact"
                  className={`w-full py-3 font-medium font-display rounded-none mb-10 transition-all block text-center btn-interactive ${
                    plan.highlighted
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-primary text-primary'
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <span className="text-sm text-foreground font-body">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
