import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import useTypewriter from '../../hooks/useTypewriter'

const TYPEWRITER_PHRASES = [
  'Business Website ',
  'Web Application ',
  'Mobile Application ',
  'Scalable MVP ',
]

const STATS = [
  { value: 'Web + App', label: 'One product partner' },
  { value: 'UI to API', label: 'End-to-end delivery' },
  { value: 'MVP -> Scale', label: 'Built for growth' },
  { value: 'Remote', label: 'Global collaboration' },
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
            <Sparkles size={12} /> Stackstich digital studio
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
          <span className='hero-title-muted'>for measurable business outcomes.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className='hero-subtitle'
        >
          We design and build conversion-focused websites, custom web apps, and mobile apps
          that help businesses launch faster and scale with confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.34 }}
          className='hero-actions'
        >
          <button className='btn-primary'>
            Start Your Project <ArrowRight size={14} />
          </button>
          <button className='btn-ghost'>Explore Services</button>
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
