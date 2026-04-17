import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'

const TERMINAL_LINES = [
  { prefix: '$', text: 'cat stackstich_profile.log', color: 'var(--primary)' },
  { prefix: '→', text: 'Websites and apps tailored to your business model.', color: 'var(--text)' },
  { prefix: '→', text: 'Discovery, UI/UX, development, launch, and support in one flow.', color: 'var(--text)' },
  { prefix: '→', text: 'Lean senior team with direct founder communication.', color: 'var(--text)' },
  { prefix: '$', text: 'status --service stackstich-delivery', color: 'var(--primary)' },
  { prefix: '✓', text: 'Clear scope  |  predictable sprints  |  long-term product support', color: '#00f5c8' },
]

const ABOUT_METRICS = [
  { value: 'Web + App', label: 'Unified product execution' },
  { value: 'Weekly', label: 'Delivery checkpoints' },
  { value: 'Senior', label: 'Hands-on leadership team' },
  { value: '24h', label: 'Business-day response' },
]

const CAPABILITY_AREAS = [
  'Conversion-focused websites for lead generation and trust-building',
  'Custom web applications tailored to internal workflows and operations',
  'Cross-platform mobile apps with scalable backend integrations',
  'UI/UX systems that improve usability, speed, and retention',
]

const DELIVERY_MODEL = [
  {
    title: 'Business Discovery',
    copy: 'We map business goals, user flows, and constraints before writing a single line of code.',
  },
  {
    title: 'Product Blueprint',
    copy: 'You get a clear scope, architecture direction, timelines, and milestone plan.',
  },
  {
    title: 'Design + Engineering',
    copy: 'Our team ships in focused sprints with transparent updates, demos, and QA gates.',
  },
  {
    title: 'Launch + Growth',
    copy: 'Post-launch support includes monitoring, optimization, and feature expansion.',
  },
]

const metricsContainerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
}

const metricItemVariants = {
  hidden: { opacity: 0, y: 14, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 170, damping: 19, mass: 0.85 },
  },
}

function AboutPageSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!inView) {
      return
    }

    let index = 0
    const id = setInterval(() => {
      index += 1
      setVisibleLines(index)

      if (index >= TERMINAL_LINES.length) {
        clearInterval(id)
      }
    }, 320)

    return () => clearInterval(id)
  }, [inView])

  return (
    <section id='about' className='section about-section about-page-shell' ref={ref}>
      <div className='about-grid'>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.52, ease: 'easeOut' }}
        >
          <span className='eyebrow'>
            <Terminal size={12} /> About Stackstich
          </span>
          <h2 className='section-title'>
            Your product partner for <span className='hero-primary'>web and app delivery</span>
          </h2>
          <p className='section-subtitle'>
            We combine strategy, design, and engineering to ship reliable digital products quickly.
            From first build to scaling roadmap, we stay focused on results and clarity.
          </p>

          <div className='about-actions'>
            <button className='btn-primary'>
              See How We Work <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className='terminal about-page-terminal'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          whileHover={{ y: -4, scale: 1.005 }}
        >
          <div className='terminal-bar'>
            <div className='dot dot-red' />
            <div className='dot dot-amber' />
            <div className='dot dot-green' />
            <span className='terminal-title'>bash - stackstich</span>
          </div>

          <div className='terminal-body'>
            {TERMINAL_LINES.slice(0, visibleLines).map((line, index) => (
              <motion.div key={`${line.text}-${index}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className='terminal-line'>
                <span className='terminal-prefix'>{line.prefix}</span>
                <span className='terminal-text' style={{ color: line.color }}>
                  {line.text}
                </span>
              </motion.div>
            ))}

            {visibleLines >= TERMINAL_LINES.length ? (
              <span className='terminal-end'>
                $ <span className='cursor' />
              </span>
            ) : null}
          </div>
        </motion.div>
      </div>

      <motion.div
        className='about-page-metrics'
        variants={metricsContainerVariants}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        {ABOUT_METRICS.map((metric) => (
          <motion.div
            key={metric.label}
            className='about-page-metric-card'
            variants={metricItemVariants}
            whileHover={{ y: -4, scale: 1.01 }}
            whileTap={{ scale: 0.995 }}
          >
            <p className='about-page-metric-value'>{metric.value}</p>
            <p className='about-page-metric-label'>{metric.label}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className='about-page-detail-grid'
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.32 }}
      >
        <motion.article className='about-page-panel' whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
          <p className='field-label'>Core Capabilities</p>
          <h3 className='about-page-panel-title'>What we build for modern teams</h3>
          <div className='about-page-bullet-list'>
            {CAPABILITY_AREAS.map((item) => (
              <p key={item} className='about-page-bullet-item'>
                {item}
              </p>
            ))}
          </div>
        </motion.article>

        <motion.article className='about-page-panel' whileHover={{ y: -5 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
          <p className='field-label'>Operating Model</p>
          <h3 className='about-page-panel-title'>A process built for predictable outcomes</h3>
          <div className='about-page-steps'>
            {DELIVERY_MODEL.map((step, index) => (
              <motion.div
                key={step.title}
                className='about-page-step'
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.36 + index * 0.06 }}
              >
                <span className='about-page-step-index'>{index + 1}</span>
                <div>
                  <p className='about-page-step-title'>{step.title}</p>
                  <p className='about-page-step-copy'>{step.copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.article>
      </motion.div>

      <motion.div
        className='about-page-cta'
        initial={{ opacity: 0, y: 18 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h3 className='about-page-cta-title'>Ready to turn strategy into shipped product?</h3>
        <p className='about-page-cta-copy'>
          Share your goals and we will propose a focused roadmap covering scope, delivery milestones, and growth priorities.
        </p>
        <div className='about-page-cta-actions'>
          <Link to='/contact' className='btn-primary'>
            Start a Conversation <ArrowRight size={14} />
          </Link>
          <Link to='/services' className='btn-ghost'>
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutPageSection
