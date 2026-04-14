import { motion } from 'framer-motion'
import { Globe, Shield, Users, Zap } from 'lucide-react'
import { cn } from '../../utils/cn'

interface TeamMember {
  name: string
  title: string
  description: string
  imageUrl: string
  githubUrl?: string
  twitterUrl?: string
  youtubeUrl?: string
  linkedinUrl?: string
}

const teamMembers: TeamMember[] = [
  {
    name: 'Amber Grace W.',
    title: 'Vice President of Sales',
    description:
      'Leads strategic growth initiatives across enterprise accounts, aligning business outcomes with product delivery and market expansion.',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    githubUrl: '#',
    twitterUrl: '#',
    youtubeUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Michael Chen',
    title: 'Senior Software Engineer',
    description:
      'Drives platform architecture and performance engineering, ensuring resilient systems, secure integrations, and rapid product iteration.',
    imageUrl:
      'https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=800&q=80',
    githubUrl: '#',
    twitterUrl: '#',
    youtubeUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jessica Roberts',
    title: 'Lead Product Designer',
    description:
      'Shapes end-to-end user experience with design systems and interaction patterns that balance visual impact, accessibility, and conversion.',
    imageUrl:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80',
    githubUrl: '#',
    twitterUrl: '#',
    youtubeUrl: '#',
    linkedinUrl: '#',
  },
]

export interface TestimonialCarouselProps {
  className?: string
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  return (
    <div className={cn('team-showcase', className)}>
      <header className='team-showcase-head'>
        <h2 className='team-showcase-title'>
          Meet Our <span className='hero-primary'>Team</span>
        </h2>
      </header>

      <div className='team-list'>
        {teamMembers.map((member, index) => {
          const isReversed = index % 2 === 1

          return (
            <motion.article
              key={member.name}
              className={cn('team-row', isReversed ? 'team-row-reverse' : '')}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.1 }}
            >
              <div className='team-media'>
                <img src={member.imageUrl} alt={member.name} className='team-media-img' />
              </div>

              <div className='team-info'>
                <h3 className='team-info-name'>{member.name}</h3>
                <p className='team-info-role'>{member.title}</p>
                <p className='team-info-description'>{member.description}</p>

                <div className='team-info-socials'>
                  {[{ icon: Globe, url: member.githubUrl, label: 'Website' }, { icon: Zap, url: member.twitterUrl, label: 'Updates' }, { icon: Shield, url: member.youtubeUrl, label: 'Channel' }, { icon: Users, url: member.linkedinUrl, label: 'LinkedIn' }].map(
                    ({ icon: IconComponent, url, label }) => (
                      <a
                        key={label}
                        href={url || '#'}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='team-info-social-btn'
                        aria-label={label}
                      >
                        <IconComponent size={14} />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </div>
  )
}
