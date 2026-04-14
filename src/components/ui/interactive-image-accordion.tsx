import React, { useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

interface AccordionItemData {
  id: number
  title: string
  imageUrl: string
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Voice Assistant',
    imageUrl:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'AI Image Generation',
    imageUrl:
      'https://images.unsplash.com/photo-1677442135136-760c813028c0?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'AI Chatbot + Local RAG',
    imageUrl:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1974&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'AI Agent',
    imageUrl:
      'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2090&auto=format&fit=crop',
  },
  {
    id: 5,
    title: 'Visual Understanding',
    imageUrl:
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop',
  },
]

type ItemProps = {
  item: AccordionItemData
  isActive: boolean
  onMouseEnter: () => void
}

const AccordionItem = ({ item, isActive, onMouseEnter }: ItemProps) => {
  return (
    <button
      type='button'
      className={`interactive-accordion-item ${isActive ? 'interactive-accordion-item-active' : ''}`}
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      aria-label={item.title}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className='interactive-accordion-image'
        onError={(event) => {
          const target = event.currentTarget
          target.onerror = null
          target.src = 'https://placehold.co/400x450/0b0e1a/00f5c8?text=Image+Error'
        }}
      />
      <div className='interactive-accordion-overlay' />

      <span
        className={`interactive-accordion-caption ${
          isActive ? 'interactive-accordion-caption-active' : 'interactive-accordion-caption-inactive'
        }`}
      >
        {item.title}
      </span>
    </button>
  )
}

export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleItemHover = (index: number) => {
    setActiveIndex(index)
  }

  const handleTrackMouseLeave = () => {
    setActiveIndex(0)
  }

  return (
    <div className='interactive-accordion-shell'>
      <section className='interactive-accordion-section'>
        <div className='interactive-accordion-layout'>
          <div className='interactive-accordion-copy'>
            <span className='eyebrow'>
              <Sparkles size={12} /> Core capabilities
            </span>

            <h2 className='interactive-accordion-title'>
              Accelerate <span className='hero-primary'>Gen-AI Tasks</span> on Any Device
            </h2>

            <p className='interactive-accordion-subtitle'>
              Build high-performance AI apps on-device without the hassle of model compression or edge deployment.
            </p>

            <div className='interactive-accordion-cta-wrap'>
              <a href='#contact' className='btn-primary'>
                Contact Us <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div className='interactive-accordion-panel'>
            <div className='interactive-accordion-track' onMouseLeave={handleTrackMouseLeave}>
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => handleItemHover(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
