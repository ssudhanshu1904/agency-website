import React, { HTMLAttributes, useEffect, useRef, useState } from 'react'

// Small utility for conditional class names without external deps.
const cn = (...classes: (string | undefined | null | false)[]) => classes.filter(Boolean).join(' ')
const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(value, max))

export interface GalleryItem {
  common: string
  binomial: string
  photo: {
    url: string
    placeholder?: string
    text: string
    pos?: string
    by: string
  }
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[]
  radius?: number
  autoRotateSpeed?: number
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius, autoRotateSpeed = 0.026, ...props }, ref) => {
    const [rotation, setRotation] = useState(0)
    const [isScrolling, setIsScrolling] = useState(false)
    const [containerWidth, setContainerWidth] = useState(0)
    const rootRef = useRef<HTMLDivElement | null>(null)
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const animationFrameRef = useRef<number | null>(null)
    const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({})

    const markImageLoaded = (key: string) => {
      setLoadedImages((prev) => {
        if (prev[key]) {
          return prev
        }
        return { ...prev, [key]: true }
      })
    }

    useEffect(() => {
      const node = rootRef.current
      if (!node) {
        return
      }

      const resizeObserver = new ResizeObserver((entries) => {
        const nextWidth = entries[0]?.contentRect.width ?? 0
        setContainerWidth(nextWidth)
      })

      resizeObserver.observe(node)
      setContainerWidth(node.clientWidth)

      return () => {
        resizeObserver.disconnect()
      }
    }, [])

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolling(true)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        const scrollRotation = scrollProgress * 360
        setRotation(scrollRotation)

        scrollTimeoutRef.current = setTimeout(() => {
          setIsScrolling(false)
        }, 150)
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }
      }
    }, [])

    useEffect(() => {
      const autoRotate = () => {
        if (!isScrolling) {
          setRotation((prev) => prev + autoRotateSpeed)
        }
        animationFrameRef.current = requestAnimationFrame(autoRotate)
      }

      animationFrameRef.current = requestAnimationFrame(autoRotate)

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current)
        }
      }
    }, [isScrolling, autoRotateSpeed])

    if (!items.length) {
      return null
    }

    const itemCount = items.length
    const anglePerItem = 360 / itemCount

    const safeWidth = containerWidth > 0 ? containerWidth : 960
    const edgeGap = safeWidth < 640 ? 14 : 20
    const cardGap = safeWidth < 640 ? 16 : 20

    const orbitInset = safeWidth < 640 ? 52 : 64
    const maxAllowedRadius = Math.max(150, safeWidth / 2 - edgeGap - orbitInset)
    const baseWidth = clamp(safeWidth * 0.8, 290, 580)

    const sinStep = Math.sin(Math.PI / Math.max(itemCount, 3))
    const maxWidthByCount = Math.max(220, 2 * maxAllowedRadius * sinStep - cardGap)
    const adaptiveCardWidth = Math.min(baseWidth, maxWidthByCount)
    const adaptiveCardHeight = adaptiveCardWidth * 0.56

    const minRadiusForSeparation = itemCount > 2 ? (adaptiveCardWidth + cardGap) / (2 * sinStep) : maxAllowedRadius
    const adaptiveRadius = clamp(minRadiusForSeparation + 6, 140, maxAllowedRadius)
    const finalRadius = radius ?? adaptiveRadius

    const cardWidth = `${Math.round(adaptiveCardWidth)}px`
    const cardHeight = `${Math.round(adaptiveCardHeight)}px`
    const isMobileLayout = safeWidth < 760

    if (isMobileLayout) {
      return (
        <div
          ref={(node) => {
            rootRef.current = node
            if (typeof ref === 'function') {
              ref(node)
              return
            }
            if (ref) {
              ref.current = node
            }
          }}
          role='region'
          aria-label='Project gallery'
          className={cn('circular-gallery-mobile', className)}
          {...props}
        >
          <div className='circular-gallery-mobile-track'>
            {items.map((item) => (
              <div key={item.photo.url} className='circular-gallery-mobile-card'>
                <div className='circular-gallery-mobile-media'>
                  <img
                    src={item.photo.placeholder || item.photo.url}
                    alt=''
                    aria-hidden='true'
                    className='circular-gallery-mobile-img circular-gallery-blur-placeholder'
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className={`circular-gallery-mobile-img circular-gallery-main-image ${
                      loadedImages[item.photo.url] ? 'circular-gallery-main-image-loaded' : ''
                    }`}
                    style={{ objectPosition: item.photo.pos || 'center' }}
                    loading='lazy'
                    decoding='async'
                    sizes='(max-width: 760px) 84vw, 380px'
                    onLoad={() => markImageLoaded(item.photo.url)}
                    onError={() => markImageLoaded(item.photo.url)}
                  />
                  <div className='circular-gallery-mobile-overlay'>
                    <h2 className='text-base font-bold'>{item.common}</h2>
                    <em className='text-xs italic opacity-85'>{item.binomial}</em>
                    <p className='mt-2 text-[11px] opacity-70'>Photo by: {item.photo.by}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }

    return (
      <div
        ref={(node) => {
          rootRef.current = node
          if (typeof ref === 'function') {
            ref(node)
            return
          }
          if (ref) {
            ref.current = node
          }
        }}
        role='region'
        aria-label='Circular 3D Gallery'
        className={cn('relative flex h-full w-full items-center justify-center', className)}
        style={{ perspective: '2000px' }}
        {...props}
      >
        <div
          className='relative h-full w-full'
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem
            const totalRotation = rotation % 360
            const relativeAngle = (itemAngle + totalRotation + 360) % 360
            const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle)
            const opacity = Math.max(0.3, 1 - normalizedAngle / 180)

            return (
              <div
                key={item.photo.url}
                role='group'
                aria-label={item.common}
                className='absolute w-[min(74vw,400px)] h-[min(42vw,225px)]'
                style={{
                  transform: `translate(-50%, -50%) rotateY(${itemAngle}deg) translateZ(${finalRadius}px)`,
                  left: '50%',
                  top: '50%',
                  width: cardWidth,
                  height: cardHeight,
                  opacity,
                  transition: 'opacity 0.3s linear',
                }}
              >
                <div className='group relative h-full w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[rgba(11,14,26,0.72)] shadow-2xl backdrop-blur-lg'>
                  <img
                    src={item.photo.placeholder || item.photo.url}
                    alt=''
                    aria-hidden='true'
                    className='absolute inset-0 h-full w-full object-cover circular-gallery-blur-placeholder'
                    style={{ objectPosition: item.photo.pos || 'center' }}
                  />
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className={`absolute inset-0 h-full w-full object-cover circular-gallery-main-image ${
                      loadedImages[item.photo.url] ? 'circular-gallery-main-image-loaded' : ''
                    }`}
                    style={{ objectPosition: item.photo.pos || 'center' }}
                    loading='lazy'
                    decoding='async'
                    sizes='(max-width: 760px) 84vw, 560px'
                    onLoad={() => markImageLoaded(item.photo.url)}
                    onError={() => markImageLoaded(item.photo.url)}
                  />
                  <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 text-white'>
                    <h2 className='text-base font-bold sm:text-lg'>{item.common}</h2>
                    <em className='text-xs italic opacity-80 sm:text-sm'>{item.binomial}</em>
                    <p className='mt-2 text-[11px] opacity-70 sm:text-xs'>Photo by: {item.photo.by}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  },
)

CircularGallery.displayName = 'CircularGallery'

export { CircularGallery }
