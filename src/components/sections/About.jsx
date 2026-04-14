import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'

const TERMINAL_LINES = [
  { prefix: '$', text: 'cat agency_profile.log', color: 'var(--primary)' },
  { prefix: '→', text: 'Product strategy backed by technical feasibility.', color: 'var(--text)' },
  { prefix: '→', text: 'Full-cycle delivery from discovery to post-launch support.', color: 'var(--text)' },
  { prefix: '→', text: 'Small senior team - direct communication, full accountability.', color: 'var(--text)' },
  { prefix: '$', text: 'uptime --service cyberlab', color: 'var(--primary)' },
  { prefix: '✓', text: '99.97% delivery rate  |  avg 68h first build  |  0 ghost clients', color: '#00f5c8' },
]

function About() {
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
    <section id='about' className='section about-section' ref={ref}>
      <div className='about-grid'>
        <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
          <span className='eyebrow'>
            <Terminal size={12} /> Inside the lab
          </span>
          <h2 className='section-title'>
            A terminal-first culture for <span className='hero-primary'>precision execution</span>
          </h2>
          <p className='section-subtitle'>
            We blend high-end design thinking with engineering discipline so every release feels
            deliberate and future-ready. No handoffs to juniors, no bloated timelines.
          </p>

          <div className='about-actions'>
            <button className='btn-primary'>
              Meet the Team <ArrowRight size={14} />
            </button>
          </div>
        </motion.div>

        <motion.div className='terminal' initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}>
          <div className='terminal-bar'>
            <div className='dot dot-red' />
            <div className='dot dot-amber' />
            <div className='dot dot-green' />
            <span className='terminal-title'>bash - cyberlab</span>
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
    </section>
  )
}

export default About
