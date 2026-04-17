import React from 'react'
import { CircularGallery, GalleryItem } from './circular-gallery'

const galleryData: GalleryItem[] = [
  {
    common: 'Landing Redesign',
    binomial: 'Brand + Conversion',
    photo: {
      url: '/images/optimized/portfolio-dev.webp',
      placeholder: '/images/placeholders/portfolio-dev.webp',
      text: 'workspace with laptop and code',
      pos: '52% 50%',
      by: 'Christopher Gower',
    },
  },
  {
    common: 'SaaS Dashboard',
    binomial: 'Analytics + UX',
    photo: {
      url: '/images/optimized/portfolio-dashboard.webp',
      placeholder: '/images/placeholders/portfolio-dashboard.webp',
      text: 'dashboard charts on monitor',
      pos: '54% 44%',
      by: 'Luke Chesser',
    },
  },
  {
    common: 'Mobile App UI',
    binomial: 'iOS + Android',
    photo: {
      url: '/images/optimized/portfolio-mobile.webp',
      placeholder: '/images/placeholders/portfolio-mobile.webp',
      text: 'smartphone app mockup',
      pos: '52% 40%',
      by: 'Mika Baumeister',
    },
  },
  {
    common: 'Commerce Platform',
    binomial: 'Headless + Payments',
    photo: {
      url: '/images/optimized/portfolio-dashboard.webp',
      placeholder: '/images/placeholders/portfolio-dashboard.webp',
      text: 'business analytics board',
      pos: '52% 44%',
      by: 'Carlos Muza',
    },
  },
  {
    common: 'Cloud Ops Console',
    binomial: 'Infra + Monitoring',
    photo: {
      url: '/images/optimized/accordion-chatbot-rag.webp',
      placeholder: '/images/placeholders/accordion-chatbot-rag.webp',
      text: 'computer hardware close-up',
      pos: '50% 52%',
      by: 'Umberto',
    },
  },
]

const CircularGalleryDemo = () => {
  return (
    <div className='w-full bg-background text-foreground' style={{ height: '320vh' }}>
      <div className='sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden'>
        <div className='absolute top-16 z-10 text-center'>
          <h1 className='text-4xl font-bold'>Portfolio Gallery</h1>
          <p className='text-muted'>Scroll to rotate the gallery</p>
        </div>
        <div className='h-full w-full'>
          <CircularGallery items={galleryData} radius={420} />
        </div>
      </div>
    </div>
  )
}

export default CircularGalleryDemo
