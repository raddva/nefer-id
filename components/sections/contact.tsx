'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, FormEvent } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', projectType: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

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
    <section id="contact" className="grain relative py-32 px-4 bg-background">
      {/* Abstract atmospheric background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-primary/5 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-3xl mix-blend-overlay"
          animate={{
            x: [0, 25, -20, 0],
            y: [0, -20, 25, 0]
          }}
          transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
        ></motion.div>
      </div>

      <div className="max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          <motion.span
            className="text-xs font-medium text-primary tracking-widest uppercase"
            variants={itemVariants}
          >
            Let's Connect
          </motion.span>
          <motion.h2
            className="text-5xl md:text-6xl font-display font-bold mt-6 text-foreground"
            variants={itemVariants}
          >
            Start Something Great
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground mt-8 font-body leading-relaxed"
            variants={itemVariants}
          >
            Tell us about your vision. We'll craft a strategy and timeline tailored to your goals.
          </motion.p>
          <motion.div
            className="w-8 h-px bg-primary mx-auto mt-8"
            variants={itemVariants}
          ></motion.div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <label className="block text-xs font-medium text-primary uppercase tracking-widest mb-3">
                Your Name
              </label>
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/10 border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 rounded-none font-body"
                placeholder="Name"
                whileFocus={{ scale: 1.02, boxShadow: '0 0 15px rgba(122, 15, 20, 0.3)' }}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label className="block text-xs font-medium text-primary uppercase tracking-widest mb-3">
                Email
              </label>
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-secondary/10 border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 rounded-none font-body"
                placeholder="hello@example.com"
                whileFocus={{ scale: 1.02, boxShadow: '0 0 15px rgba(122, 15, 20, 0.3)' }}
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <label className="block text-xs font-medium text-primary uppercase tracking-widest mb-3">
              Project Type
            </label>
            <motion.select
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-secondary/10 border border-white/10 text-foreground focus:outline-none focus:border-primary transition-all duration-300 appearance-none cursor-pointer rounded-none font-body"
              whileFocus={{ scale: 1.02, boxShadow: '0 0 15px rgba(122, 15, 20, 0.3)' }}
            >
              <option value="">Select a type...</option>
              <option value="website">Brand Website</option>
              <option value="design">Design Direction</option>
              <option value="landing">Landing Page</option>
              <option value="webapp">Digital Product</option>
              <option value="other">Consultation</option>
            </motion.select>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-xs font-medium text-primary uppercase tracking-widest mb-3">
              Tell Us More
            </label>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-secondary/10 border border-white/10 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-all duration-300 resize-none rounded-none font-body"
              placeholder="Your vision, timeline, budget, and any other details..."
              whileFocus={{ scale: 1.02, boxShadow: '0 0 15px rgba(122, 15, 20, 0.3)' }}
            ></motion.textarea>
          </motion.div>

          <motion.button
            type="submit"
            disabled={submitted}
            className="w-full py-3 bg-primary text-primary-foreground font-medium font-display rounded-none btn-interactive disabled:opacity-75 flex items-center justify-center gap-2"
            variants={itemVariants}
            whilehover={{ scale: 1.03 }}
            whiletap={{ scale: 0.97 }}
          >
            {submitted ? (
              <motion.span
                className="font-display"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                Message Received ✓
              </motion.span>
            ) : (
              <>
                Begin Conversation
                <motion.span
                  animate={{ x: 0 }}
                  whilehover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </>
            )}
          </motion.button>

          <motion.p
            className="text-center text-xs text-muted-foreground font-body"
            variants={itemVariants}
          >
            We'll reply within 24 hours with next steps and a customized proposal.
          </motion.p>
        </motion.form>
      </div>
    </section>
  )
}
