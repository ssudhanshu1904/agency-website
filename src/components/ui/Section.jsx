import Container from '../layout/Container'
import { cn } from '../../utils/cn'
import { motion } from 'framer-motion'

const motionPresets = {
  up: { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -28 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 28 }, animate: { opacity: 1, x: 0 } },
  none: { initial: false, animate: undefined },
}

function Section({ id, eyebrow, title, description, className, children, motionPreset = 'up' }) {
  const preset = motionPresets[motionPreset] ?? motionPresets.up

  return (
    <motion.section
      id={id}
      className={cn('py-20 sm:py-24', className)}
      initial={preset.initial}
      whileInView={preset.animate}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <Container>
        {(eyebrow || title || description) && (
          <motion.header className='mb-12 max-w-2xl' initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.4, delay: 0.05 }}>
            {eyebrow ? (
              <p className='mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary terminal-prompt'>{eyebrow}</p>
            ) : null}
            {title ? <h2 className='font-heading text-3xl font-semibold leading-tight text-foreground sm:text-4xl'>{title}</h2> : null}
            {description ? <p className='mt-4 text-base text-foreground/75'>{description}</p> : null}
          </motion.header>
        )}
        {children}
      </Container>
    </motion.section>
  )
}

export default Section
