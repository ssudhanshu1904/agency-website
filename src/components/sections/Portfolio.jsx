import { BriefcaseBusiness } from 'lucide-react'
import { CircularGallery } from '../ui/circular-gallery'

const portfolioItems = [
  {
    common: 'Fintech Dashboard',
    binomial: 'React, Recharts, Stripe',
    photo: {
      url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&auto=format&fit=crop&q=80',
      text: 'code editor on laptop screen',
      pos: '52% 50%',
      by: 'Fotis Fotopoulos',
    },
  },
  {
    common: 'E-commerce Experience',
    binomial: 'Next.js, Headless CMS',
    photo: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      text: 'analytics dashboard with charts',
      pos: '50% 45%',
      by: 'Carlos Muza',
    },
  },
  {
    common: 'SaaS Product Launch',
    binomial: 'Design System, Motion UI',
    photo: {
      url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&auto=format&fit=crop&q=80',
      text: 'team discussing product roadmap',
      by: 'Austin Distel',
    },
  },
  {
    common: 'Brand Website Revamp',
    binomial: 'Vite, Tailwind, GSAP',
    photo: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80',
      text: 'circuit board macro shot',
      by: 'Umberto',
    },
  },
  {
    common: 'AI Workflow Platform',
    binomial: 'Node, Python, LangOps',
    photo: {
      url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&auto=format&fit=crop&q=80',
      text: 'developers collaborating at desk',
      by: 'Saru Robert',
    },
  },
  {
    common: 'Mobile Banking UX',
    binomial: 'React Native, API-first',
    photo: {
      url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=900&auto=format&fit=crop&q=80',
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
