import { Globe, Shield, Users, Zap } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { LandingAccordionItem } from '../ui/interactive-image-accordion'

const perks = [
  { icon: Zap, text: 'Fast turnaround without compromise' },
  { icon: Globe, text: 'Remote-first, async friendly' },
  { icon: Shield, text: 'NDA signed before every project' },
  { icon: Users, text: 'Senior team, no juniors on your work' },
]

function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id='services' className='section'>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className='services-accordion-block'
      >
        <LandingAccordionItem />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.68 }}
        className='perks-grid'
      >
        {perks.map((perk) => (
          <div key={perk.text} className='perk-card'>
            <perk.icon size={14} color='var(--primary)' />
            <span className='perk-text'>{perk.text}</span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

export default Services
