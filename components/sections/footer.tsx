'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
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

  const currentYear = new Date().getFullYear()

  return (
    <footer className="grain relative bg-background border-t border-white/5">
      <motion.div
        className="max-w-7xl mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <div className="grid md:grid-cols-4 gap-16 mb-16">
          <motion.div variants={itemVariants}>
            <div className="text-2xl font-display font-bold tracking-[0.2em] text-foreground mb-3">
              nefer
            </div>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Where vision meets precision. A design studio crafting refined digital experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-medium text-primary uppercase tracking-widest mb-6">
              Pages
            </h4>
            <ul className="space-y-3">
              {['About', 'Services', 'Work', 'Pricing', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-medium text-primary uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-3">
              {['Brand Development', 'UI/UX Design', 'Landing Pages', 'Digital Products', 'Direction'].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors font-body"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-medium text-primary uppercase tracking-widest mb-6">
              Connect
            </h4>
            <div className="flex gap-4">
              {[
                { icon: Mail, label: 'Email', href: '#' },
                { icon: Linkedin, label: 'LinkedIn', href: '#' },
                { icon: Github, label: 'GitHub', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' },
              ].map(({ icon: Icon, label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  className="p-2.5 rounded-none bg-primary/10 border border-primary/20 text-muted-foreground transition-all duration-300"
                  aria-label={label}
                  whilehover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }}
                  whiletap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6"
          variants={itemVariants}
        >
          <p className="text-xs text-muted-foreground font-body">
            © {currentYear} NEFER Studio. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-body">
              Terms
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
