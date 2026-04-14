import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import useTypewriter from '../../hooks/useTypewriter'

const TYPEWRITER_PHRASES = [
  'Web Platforms',
  'Mobile Products',
  'Design Systems',
  'Digital Experiences',
]

const STATS = [
  { value: '140+', label: 'Projects shipped' },
  { value: '98%', label: 'Client retention' },
  { value: '< 72h', label: 'First delivery' },
  { value: '4.9★', label: 'Average rating' },
]

function Hero() {
  const typed = useTypewriter(TYPEWRITER_PHRASES)

  return (
    <section id='home' className='hero-section'>
      <div className='cyber-grid hero-grid-layer' />
      <div className='hero-orb hero-orb-right' />
      <div className='hero-orb hero-orb-left' />
      <div className='scan-lines hero-scan-layer' />

      <div className='section hero-content'>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <span className='eyebrow'>
            <Sparkles size={12} /> Build beyond templates
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='hero-title'
        >
          We engineer
          <br />
          <span className='glitch-wrap hero-primary' data-text={typed}>
            {typed}
            <span className='cursor' />
          </span>
          <br />
          <span className='hero-title-muted'>with a cybernetic edge.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className='hero-subtitle'
        >
          From strategy and interface systems to high-performance development - we ship
          premium digital products that feel sharp, cinematic, and conversion-ready.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.34 }}
          className='hero-actions'
        >
          <button className='btn-primary'>
            Book Discovery Call <ArrowRight size={14} />
          </button>
          <button className='btn-ghost'>See Case Studies</button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='hero-stats'
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className='stat-card'
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + index * 0.07 }}
            >
              <div className='stat-value'>{stat.value}</div>
              <div className='stat-label'>{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
