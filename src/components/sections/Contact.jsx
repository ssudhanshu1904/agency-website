import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send } from 'lucide-react'

function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    setStatus('submitting')

    setTimeout(() => {
      setStatus('success')
    }, 1800)
  }

  return (
    <section id='contact' className='section contact-section' ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className='contact-head'
      >
        <span className='eyebrow'>
          <Send size={12} /> Open channel
        </span>
        <h2 className='section-title'>
          Tell us what <span className='hero-primary'>you are building</span>
        </h2>
        <p className='section-subtitle'>
          Share your goals and timeline. We will return a strategic proposal with scope and delivery roadmap.
        </p>
      </motion.div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.15 }}
        className='contact-form'
      >
        <div className='contact-grid'>
          <div>
            <label className='field-label' htmlFor='contact-name'>
              Name
            </label>
            <input
              id='contact-name'
              className='field-input'
              name='name'
              placeholder='Jane Doe'
              value={form.name}
              onChange={onChange}
            />
          </div>

          <div>
            <label className='field-label' htmlFor='contact-email'>
              Email
            </label>
            <input
              id='contact-email'
              className='field-input'
              name='email'
              type='email'
              placeholder='jane@company.com'
              value={form.email}
              onChange={onChange}
            />
          </div>
        </div>

        <div>
          <label className='field-label' htmlFor='contact-message'>
            Project brief
          </label>
          <textarea
            id='contact-message'
            className='field-input'
            name='message'
            rows={5}
            placeholder='Describe your product goals, timeline, and ideal outcome.'
            value={form.message}
            onChange={onChange}
          />
        </div>

        <div className='contact-actions'>
          <button className='btn-primary' type='submit' disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Transmitting...' : 'Send Brief'}
            <Send size={14} style={{ opacity: status === 'submitting' ? 0.5 : 1 }} />
          </button>

          {status === 'success' ? (
            <motion.span initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} className='contact-success'>
              ✓ Transmission received - responding within 24h
            </motion.span>
          ) : null}
        </div>
      </motion.form>
    </section>
  )
}

export default Contact
