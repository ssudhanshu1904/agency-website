import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useLocation, useNavigationType } from 'react-router-dom'

const routeProfiles = {
  '/': { enterX: 20, exitX: 14, enterBlur: 5, exitBlur: 4, duration: 0.34 },
  '/services': { enterX: 44, exitX: 32, enterBlur: 10, exitBlur: 8, duration: 0.46 },
  '/about': { enterX: 36, exitX: 26, enterBlur: 8, exitBlur: 7, duration: 0.42 },
  '/contact': { enterX: 28, exitX: 20, enterBlur: 6, exitBlur: 5, duration: 0.38 },
}

const routeOverlays = {
  '/': {
    gradient:
      'radial-gradient(circle at 12% 18%, rgba(139, 92, 246, 0.24), transparent 38%), radial-gradient(circle at 86% 14%, rgba(56, 189, 248, 0.2), transparent 34%)',
    maxOpacity: 0.3,
  },
  '/services': {
    gradient:
      'radial-gradient(circle at 16% 24%, rgba(56, 189, 248, 0.24), transparent 42%), radial-gradient(circle at 82% 18%, rgba(14, 165, 233, 0.2), transparent 34%)',
    maxOpacity: 0.34,
  },
  '/about': {
    gradient:
      'radial-gradient(circle at 18% 20%, rgba(139, 92, 246, 0.24), transparent 40%), radial-gradient(circle at 80% 14%, rgba(244, 114, 182, 0.16), transparent 36%)',
    maxOpacity: 0.32,
  },
  '/contact': {
    gradient:
      'radial-gradient(circle at 14% 18%, rgba(34, 197, 94, 0.2), transparent 38%), radial-gradient(circle at 84% 16%, rgba(139, 92, 246, 0.22), transparent 34%)',
    maxOpacity: 0.3,
  },
}

const fallbackProfile = { enterX: 30, exitX: 22, enterBlur: 7, exitBlur: 6, duration: 0.4 }
const fallbackOverlay = {
  gradient:
    'radial-gradient(circle at 14% 18%, rgba(139, 92, 246, 0.2), transparent 40%), radial-gradient(circle at 84% 16%, rgba(56, 189, 248, 0.16), transparent 36%)',
  maxOpacity: 0.28,
}

const getRouteProfile = (pathname) => routeProfiles[pathname] ?? fallbackProfile
const getRouteOverlay = (pathname) => routeOverlays[pathname] ?? fallbackOverlay

function PageTransition({ children }) {
  const location = useLocation()
  const navigationType = useNavigationType()
  const shouldReduceMotion = useReducedMotion()
  const direction = navigationType === 'POP' ? -1 : 1
  const profile = getRouteProfile(location.pathname)
  const overlay = getRouteOverlay(location.pathname)

  const duration = navigationType === 'POP' ? Math.max(0.3, profile.duration - 0.04) : profile.duration

  if (shouldReduceMotion) {
    return <>{children}</>
  }

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={location.pathname}
        className='relative overflow-hidden'
        initial={{ opacity: 0, x: profile.enterX * direction, filter: `blur(${profile.enterBlur}px)` }}
        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
        exit={{ opacity: 0, x: -profile.exitX * direction, filter: `blur(${profile.exitBlur}px)` }}
        transition={{ duration, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          aria-hidden='true'
          className='pointer-events-none absolute inset-0 z-0 mix-blend-screen'
          style={{ backgroundImage: overlay.gradient, backgroundRepeat: 'no-repeat' }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: [0, overlay.maxOpacity, 0], scale: [1.02, 1, 0.995] }}
          transition={{ duration: Math.max(0.6, duration + 0.35), ease: 'easeOut' }}
        />
        <div className='relative z-10'>{children}</div>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageTransition
