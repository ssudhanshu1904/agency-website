import { BriefcaseBusiness } from 'lucide-react'
import { CircularGallery } from '../ui/circular-gallery'

const portfolioItems = [
  {
    common: 'Fintech Dashboard',
    binomial: 'React, Recharts, Stripe',
    photo: {
      url: '/images/optimized/portfolio-dev.webp',
      placeholder: '/images/placeholders/portfolio-dev.webp',
      text: 'code editor on laptop screen',
      pos: '52% 50%',
      by: 'Fotis Fotopoulos',
    },
  },
  {
    common: 'E-commerce Experience',
    binomial: 'Next.js, Headless CMS',
    photo: {
      url: '/images/optimized/portfolio-dashboard.webp',
      placeholder: '/images/placeholders/portfolio-dashboard.webp',
      text: 'analytics dashboard with charts',
      pos: '50% 45%',
      by: 'Carlos Muza',
    },
  },
  {
    common: 'SaaS Product Launch',
    binomial: 'Design System, Motion UI',
    photo: {
      url: '/images/optimized/portfolio-team.webp',
      placeholder: '/images/placeholders/portfolio-team.webp',
      text: 'team discussing product roadmap',
      by: 'Austin Distel',
    },
  },
  {
    common: 'Brand Website Revamp',
    binomial: 'Vite, Tailwind, GSAP',
    photo: {
      url: '/images/optimized/accordion-chatbot-rag.webp',
      placeholder: '/images/placeholders/accordion-chatbot-rag.webp',
      text: 'circuit board macro shot',
      by: 'Umberto',
    },
  },
  {
    common: 'AI Workflow Platform',
    binomial: 'Node, Python, LangOps',
    photo: {
      url: '/images/optimized/portfolio-laptop.webp',
      placeholder: '/images/placeholders/portfolio-laptop.webp',
      text: 'developers collaborating at desk',
      by: 'Saru Robert',
    },
  },
  {
    common: 'Mobile Banking UX',
    binomial: 'React Native, API-first',
    photo: {
      url: '/images/optimized/portfolio-mobile.webp',
      placeholder: '/images/placeholders/portfolio-mobile.webp',
      text: 'smartphone showing app interface',
      by: 'NordWood Themes',
    },
  },
]

function Portfolio() {
  return (
    <section id='portfolio' className='section portfolio-section'>
      <div className='portfolio-head'>
        <span className='eyebrow'>
          <BriefcaseBusiness size={12} /> Work archive
        </span>
        <h2 className='section-title'>Our Work</h2>
        <p className='section-subtitle'>
          From elegant brand websites to high-performing platforms, explore the digital experiences we’ve crafted for growing businesses.
        </p>
      </div>

      <div className='portfolio-gallery-frame'>
        <CircularGallery items={portfolioItems} autoRotateSpeed={0.059} />
      </div>
    </section>
  )
}

export default Portfolio
