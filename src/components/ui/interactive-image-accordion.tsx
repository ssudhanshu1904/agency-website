import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'

interface AccordionItemData {
  id: number
  title: string
  imageUrl: string
  placeholderUrl: string
}

const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Voice Assistant',
    imageUrl: '/images/optimized/accordion-voice-assistant.webp',
    placeholderUrl: '/images/placeholders/accordion-voice-assistant.webp',
  },
  {
    id: 2,
    title: 'AI Image Generation',
    imageUrl: '/images/optimized/accordion-ai-image-generation.webp',
    placeholderUrl: '/images/placeholders/accordion-ai-image-generation.webp',
  },
  {
    id: 3,
    title: 'AI Chatbot + Local RAG',
    imageUrl: '/images/optimized/accordion-chatbot-rag.webp',
    placeholderUrl: '/images/placeholders/accordion-chatbot-rag.webp',
  },
  {
    id: 4,
    title: 'AI Agent',
    imageUrl: '/images/optimized/accordion-ai-agent.webp',
    placeholderUrl: '/images/placeholders/accordion-ai-agent.webp',
  },
  {
    id: 5,
    title: 'Visual Understanding',
    imageUrl: '/images/optimized/accordion-visual-understanding.webp',
    placeholderUrl: '/images/placeholders/accordion-visual-understanding.webp',
  },
]

type ItemProps = {
  item: AccordionItemData
  isActive: boolean
  onActivate: () => void
  blockClick: boolean
}

const AccordionItem = ({ item, isActive, onActivate, blockClick }: ItemProps) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <button
      type='button'
      className={`interactive-accordion-item ${isActive ? 'interactive-accordion-item-active' : ''}`}
      style={{ backgroundImage: `url(${item.placeholderUrl})` }}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={(event) => {
        if (blockClick) {
          event.preventDefault()
          return
        }
        onActivate()
      }}
      aria-label={item.title}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className={`interactive-accordion-image ${isLoaded ? 'interactive-accordion-image-loaded' : ''}`}
        loading={isActive ? 'eager' : 'lazy'}
        decoding='async'
        fetchPriority={isActive ? 'high' : 'low'}
        onLoad={() => setIsLoaded(true)}
        onError={(event) => {
          const target = event.currentTarget
          target.onerror = null
          target.src = 'https://placehold.co/400x450/0b0e1a/00f5c8?text=Image+Error'
          setIsLoaded(true)
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
  const [isTouchDragging, setIsTouchDragging] = useState(false)
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)
  const autoPauseUntilRef = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) {
      return
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      return
    }

    let animationId = 0
    let lastTs = 0
    let isMobileView = window.matchMedia('(max-width: 900px)').matches

    const updateViewportMode = () => {
      isMobileView = window.matchMedia('(max-width: 900px)').matches
    }

    const step = (ts: number) => {
      if (!lastTs) {
        lastTs = ts
      }

      const delta = ts - lastTs
      lastTs = ts

      if (isMobileView && Date.now() >= autoPauseUntilRef.current) {
        const maxScrollLeft = track.scrollWidth - track.clientWidth
        if (maxScrollLeft > 0) {
          const pxPerSecond = 28
          track.scrollLeft += (pxPerSecond * delta) / 1000

          if (track.scrollLeft >= maxScrollLeft - 1) {
            track.scrollLeft = 0
          }
        }
      }

      animationId = window.requestAnimationFrame(step)
    }

    window.addEventListener('resize', updateViewportMode)
    animationId = window.requestAnimationFrame(step)

    return () => {
      window.removeEventListener('resize', updateViewportMode)
      window.cancelAnimationFrame(animationId)
    }
  }, [])

  const handleItemHover = (index: number) => {
    setActiveIndex(index)
  }

  const handleTrackMouseLeave = () => {
    const canUseHover = typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (!canUseHover) {
      return
    }

    setActiveIndex(0)
  }

  const handleTrackTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0]
    touchStartRef.current = { x: touch.clientX, y: touch.clientY }
    autoPauseUntilRef.current = Date.now() + 2200
    setIsTouchDragging(false)
  }

  const handleTrackTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartRef.current) {
      return
    }

    const touch = event.touches[0]
    const dx = Math.abs(touch.clientX - touchStartRef.current.x)
    const dy = Math.abs(touch.clientY - touchStartRef.current.y)

    if (dx > 8 && dx > dy) {
      setIsTouchDragging(true)
      autoPauseUntilRef.current = Date.now() + 2200
    }
  }

  const handleTrackTouchEnd = () => {
    touchStartRef.current = null
    autoPauseUntilRef.current = Date.now() + 1200
    window.setTimeout(() => {
      setIsTouchDragging(false)
    }, 40)
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
            <div
              ref={trackRef}
              className='interactive-accordion-track'
              onMouseLeave={handleTrackMouseLeave}
              onTouchStart={handleTrackTouchStart}
              onTouchMove={handleTrackTouchMove}
              onTouchEnd={handleTrackTouchEnd}
              onTouchCancel={handleTrackTouchEnd}
            >
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onActivate={() => handleItemHover(index)}
                  blockClick={isTouchDragging}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
