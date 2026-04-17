import { Globe, Shield, Users, Zap } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LandingAccordionItem } from '../ui/interactive-image-accordion'

const perks = [
  { icon: Zap, text: 'Website design and development for growth-focused brands' },
  { icon: Globe, text: 'Custom web apps with scalable architecture and clean UX' },
  { icon: Shield, text: 'Cross-platform mobile apps for iOS and Android' },
  { icon: Users, text: 'Dedicated support, optimization, and feature iteration' },
]

const perksContainerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: 'easeOut',
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
}

const perkItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 160, damping: 20, mass: 0.8 },
  },
}

function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id='services' className='section services-section'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ y: -2 }}
        className='services-accordion-block'
      >
        <LandingAccordionItem />
      </motion.div>

      <motion.div
        variants={perksContainerVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        className='perks-grid'
      >
        {perks.map((perk) => (
          <motion.div
            key={perk.text}
            className='perk-card'
            variants={perkItemVariants}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <motion.span className='perk-icon-wrap' whileHover={{ rotate: -8, scale: 1.08 }} transition={{ type: 'spring', stiffness: 220, damping: 14 }}>
              <perk.icon size={14} color='var(--primary)' />
            </motion.span>
            <motion.span className='perk-text' initial={{ opacity: 0.9 }} whileHover={{ opacity: 1, x: 2 }} transition={{ duration: 0.2 }}>
              {perk.text}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
