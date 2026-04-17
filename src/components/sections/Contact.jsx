import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send } from 'lucide-react'

const LOCATION_LABEL = 'Plot No.18, Iilm College Of Engineering & Technology 16, Knowledge Park II, Greater Noida, Uttar Pradesh 201306'
const MAP_EMBED_URL =
  'https://www.google.com/maps?q=Plot%20No.18%2C%20Iilm%20College%20Of%20Engineering%20%26%20Technology%2016%2C%20Knowledge%20Park%20II%2C%20Greater%20Noida%2C%20Uttar%20Pradesh%20201306&output=embed'

function Contact({ variant = 'full' }) {
  const isHome = variant === 'home'
  const isFull = variant === 'full'
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', message: '' })
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

  const renderForm = (className = 'contact-form', delay = 0.15) => (
    <motion.form
      onSubmit={onSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      <div className='contact-grid'>
        <div>
          <label className='field-label' htmlFor='contact-name'>
            Name
          </label>
          <input id='contact-name' className='field-input' name='name' placeholder='Jane Doe' value={form.name} onChange={onChange} />
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

      <div className='contact-grid'>
        <div>
          <label className='field-label' htmlFor='contact-phone'>
            Phone Number
          </label>
          <input
            id='contact-phone'
            className='field-input'
            name='phone'
            type='tel'
            placeholder='+91 **********'
            value={form.phone}
            onChange={onChange}
          />
        </div>

        <div>
          <label className='field-label' htmlFor='contact-company'>
            Company Name
          </label>
          <input
            id='contact-company'
            className='field-input'
            name='company'
            placeholder='xyzenterprise'
            value={form.company}
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
  )

  return (
    <section id='contact' className={`section contact-section ${isHome ? 'contact-section-home' : ''}`} ref={ref}>
      {isFull ? <div className='contact-layout'>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className='contact-info-panel'
        >
          <span className='eyebrow'>
            <Send size={12} /> Open channel
          </span>

          <h2 className='contact-info-title'>
            Contact Us for
            <br />
            <span className='hero-primary'>Tailored Solutions</span>
          </h2>

          <p className='contact-info-copy'>
            Reach out to us anytime - whether through mail, call, or in person, and we will respond to all your inquiries within
            24 hours on business days. We look forward to help you.
          </p>

          <div className='contact-info-block'>
            <p className='field-label'>Find Us at -</p>

            <div className='contact-office'>
              <h3 className='contact-office-title'>Office</h3>
              <p className='contact-office-address'>Plot No.18, Iilm College Of Engineering & Technology 16</p>
              <p className='contact-office-address'>Knowledge Park II, Greater Noida, Uttar Pradesh India - 201306</p>
              <a className='contact-office-phone' href='tel:+917007593566'>
                +91 7007 593566
              </a>
            </div>

            
          </div>

          <div className='contact-info-block'>
            <p className='field-label'>Mail Us -</p>
            <a className='contact-office-phone' href='mailto:stackstich@gmail.com'>
              stackstich@gmail.com
            </a>
          </div>
        </motion.div>
        {renderForm('contact-form')}
      </div> : null}

      {isHome ? (
        <div className='contact-home-layout'>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            className='contact-home-copy'
          >
            <motion.p
              className='contact-home-kicker'
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.04 }}
            >
              REACH OUT
            </motion.p>

            <motion.h2
              className='contact-home-title'
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Partnering for Business Success
              <span className='contact-home-title-accent'> Let Our Experts Discover the Right Solutions!</span>
            </motion.h2>

            <motion.p
              className='contact-home-text'
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.16 }}
            >
              Let&apos;s get started on your digital transformation journey. Submit your inquiry today and our experts will be in
              touch with you soon.
            </motion.p>

            <motion.div
              className='contact-home-points'
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.22 }}
            >
              <span className='contact-home-point'>24h business-day response</span>
              <span className='contact-home-point'>Strategy-first recommendations</span>
            </motion.div>
          </motion.div>

          {renderForm('contact-form contact-form-home', 0.1)}
        </div>
      ) : null}

      {isFull ? <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.25 }}
        className='contact-map-wrap'
      >
        <div className='contact-map-head'>
          <p className='field-label'>Our location</p>
          <p className='contact-map-location'>{LOCATION_LABEL}</p>
        </div>

        <div className='contact-map-frame'>
          <iframe
            title='Google map location'
            src={MAP_EMBED_URL}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        </div>
      </motion.div> : null}
    </section>
  )
}

export default Contact
