import React from 'react'
import { CircularGallery, GalleryItem } from './circular-gallery'

const galleryData: GalleryItem[] = [
  {
    common: 'Landing Redesign',
    binomial: 'Brand + Conversion',
    photo: {
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&auto=format&fit=crop&q=80',
      text: 'workspace with laptop and code',
      pos: '52% 50%',
      by: 'Christopher Gower',
    },
  },
  {
    common: 'SaaS Dashboard',
    binomial: 'Analytics + UX',
    photo: {
      url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80',
      text: 'dashboard charts on monitor',
      pos: '54% 44%',
      by: 'Luke Chesser',
    },
  },
  {
    common: 'Mobile App UI',
    binomial: 'iOS + Android',
    photo: {
      url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=900&auto=format&fit=crop&q=80',
      text: 'smartphone app mockup',
      pos: '52% 40%',
      by: 'Mika Baumeister',
    },
  },
  {
    common: 'Commerce Platform',
    binomial: 'Headless + Payments',
    photo: {
      url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80',
      text: 'business analytics board',
      pos: '52% 44%',
      by: 'Carlos Muza',
    },
  },
  {
    common: 'Cloud Ops Console',
    binomial: 'Infra + Monitoring',
    photo: {
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&auto=format&fit=crop&q=80',
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
