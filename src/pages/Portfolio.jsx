// Portfolio.jsx
import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Terminal, ChevronRight, X } from 'lucide-react'

/* ─── PORTFOLIO DATA ─────────────────────────────────────── */
const CATEGORIES = ['All', 'Web', 'Mobile', 'Design System', 'E-Commerce']

const PROJECTS = [
  {
    id: 1,
    title: 'NexaPay Dashboard',
    category: 'Web',
    description: 'Real-time financial analytics platform with AI-powered fraud detection and multi-currency support.',
    tech: ['React', 'TypeScript', 'Node.js', 'AWS'],
    image: null, // Replace with actual image URL
    color: '#00f5c8',
    stats: { users: '12K+', uptime: '99.9%', speed: '< 200ms' },
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
  },
  {
    id: 2,
    title: 'Vortex Mobile',
    category: 'Mobile',
    description: 'Cross-platform fitness app with real-time workout tracking, social challenges, and wearable integration.',
    tech: ['React Native', 'Expo', 'Supabase', 'Tailwind'],
    image: null,
    color: '#ff4d6d',
    stats: { downloads: '45K+', rating: '4.8★', retention: '72%' },
    liveUrl: '#',
    githubUrl: '#',
    year: '2024',
  },
  {
    id: 3,
    title: 'Atom Design System',
    category: 'Design System',
    description: 'Enterprise-grade component library with 200+ accessible components, theming engine, and Figma sync.',
    tech: ['React', 'Storybook', 'Figma', 'Tailwind'],
    image: null,
    color: '#ffb547',
    stats: { components: '200+', teams: '14', adoption: '96%' },
    liveUrl: '#',
    githubUrl: '#',
    year: '2024',
  },
  {
    id: 4,
    title: 'Flux Commerce',
    category: 'E-Commerce',
    description: 'High-performance headless e-commerce platform with sub-second page loads and AI product recommendations.',
    tech: ['Next.js', 'Vercel', 'Stripe', 'Supabase'],
    image: null,
    color: '#a78bfa',
    stats: { conversion: '+34%', products: '8K+', revenue: '$2.4M' },
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
  },
  {
    id: 5,
    title: 'Signal Analytics',
    category: 'Web',
    description: 'Marketing intelligence dashboard aggregating data from 20+ platforms into unified actionable insights.',
    tech: ['React', 'TypeScript', 'Node.js', 'AWS'],
    image: null,
    color: '#00f5c8',
    stats: { sources: '20+', reports: '150/day', latency: '< 50ms' },
    liveUrl: '#',
    githubUrl: '#',
    year: '2024',
  },
  {
    id: 6,
    title: 'Drift Social',
    category: 'Mobile',
    description: 'Privacy-first social platform with end-to-end encryption, ephemeral content, and decentralized identity.',
    tech: ['React Native', 'Expo', 'Node.js', 'AWS'],
    image: null,
    color: '#ff4d6d',
    stats: { users: '28K+', messages: '1.2M', e2e: '100%' },
    liveUrl: '#',
    githubUrl: '#',
    year: '2025',
  },
]

/* ─── ADDITIONAL CSS FOR PORTFOLIO ───────────────────────── */
export const portfolioCSS = `
  /* PORTFOLIO FILTER BUTTONS */
  .filter-btn {
    font-family: var(--font-mono);
    font-size: 10px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 8px 16px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.25s ease;
    position: relative;
    overflow: hidden;
  }
  .filter-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--primary-glow);
    opacity: 0;
    transition: opacity 0.25s;
  }
  .filter-btn:hover {
    border-color: var(--border-hover);
    color: var(--text);
  }
  .filter-btn:hover::before {
    opacity: 1;
  }
  .filter-btn.active {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-glow);
  }

  /* PROJECT CARD */
  .project-card {
    position: relative;
    background: var(--bg-card);
    border: 1px solid var(--border);
    overflow: hidden;
    cursor: pointer;
    transition: all 0.35s ease;
    backdrop-filter: blur(12px);
  }
  .project-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-4px);
  }
  .project-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--primary-glow), transparent);
    opacity: 0;
    transition: opacity 0.35s;
    z-index: 0;
  }
  .project-card:hover::before {
    opacity: 1;
  }
  .project-card .card-content {
    position: relative;
    z-index: 1;
  }

  /* PROJECT THUMBNAIL PLACEHOLDER */
  .project-thumb {
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .project-thumb .grid-pattern {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,245,200,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,245,200,0.06) 1px, transparent 1px);
    background-size: 24px 24px;
  }
  .project-thumb .thumb-icon {
    position: relative;
    z-index: 1;
    width: 56px;
    height: 56px;
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
  }
  .project-card:hover .thumb-icon {
    border-color: var(--primary);
    background: var(--primary-dim);
    transform: scale(1.05);
  }

  /* OVERLAY ACTIONS */
  .project-overlay {
    position: absolute;
    inset: 0;
    background: rgba(5,7,15,0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    opacity: 0;
    transition: opacity 0.3s;
    z-index: 2;
  }
  .project-card:hover .project-overlay {
    opacity: 1;
  }
  .overlay-btn {
    width: 40px;
    height: 40px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }
  .overlay-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-dim);
  }

  /* TECH PILL */
  .tech-pill {
    font-family: var(--font-mono);
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-dim);
    padding: 3px 8px;
    border: 1px solid var(--border);
    background: rgba(5,7,15,0.6);
    transition: all 0.25s;
  }
  .project-card:hover .tech-pill {
    border-color: rgba(0,245,200,0.25);
    color: var(--text-muted);
  }

  /* MODAL BACKDROP */
  .modal-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(5,7,15,0.9);
    backdrop-filter: blur(8px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
  }
  .modal-content {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    max-width: 720px;
    width: 100%;
    max-height: 85vh;
    overflow-y: auto;
    position: relative;
  }
  .modal-content::-webkit-scrollbar { width: 3px; }
  .modal-content::-webkit-scrollbar-thumb { background: var(--border-hover); }
  .modal-close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 36px;
    height: 36px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-muted);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    z-index: 10;
  }
  .modal-close:hover {
    border-color: var(--accent-rose);
    color: var(--accent-rose);
  }

  /* STAT MINI */
  .stat-mini {
    padding: 12px 16px;
    border: 1px solid var(--border);
    background: var(--primary-glow);
    text-align: center;
    transition: border-color 0.25s;
  }
  .stat-mini:hover {
    border-color: var(--border-hover);
  }

  /* RESPONSIVE GRID */
  @media (max-width: 768px) {
    .portfolio-grid {
      grid-template-columns: 1fr !important;
    }
    .modal-content {
      max-height: 90vh;
    }
  }
`

/* ─── PROJECT MODAL ──────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={16} />
        </button>

        {/* Modal Header / Thumbnail */}
        <div style={{
          height: 220,
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: `radial-gradient(circle at 30% 50%, ${project.color}11 0%, transparent 60%)`,
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage:
              'linear-gradient(rgba(0,245,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,200,0.04) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            width: 72, height: 72,
            border: `1px solid ${project.color}44`,
            background: `${project.color}11`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Terminal size={28} color={project.color} />
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px 32px 36px' }}>
          {/* Year + Category */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: project.color,
              padding: '3px 8px', border: `1px solid ${project.color}33`,
              background: `${project.color}11`,
            }}>{project.category}</span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--text-dim)',
              padding: '3px 8px', border: '1px solid var(--border)',
            }}>{project.year}</span>
          </div>

          <h3 style={{
            fontFamily: 'var(--font-sans)', fontSize: 24, fontWeight: 700,
            lineHeight: 1.2, marginBottom: 14,
          }}>{project.title}</h3>

          <p style={{
            fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7,
            marginBottom: 28,
          }}>{project.description}</p>

          {/* Stats Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: `repeat(${Object.keys(project.stats).length}, 1fr)`,
            gap: 10, marginBottom: 28,
          }}>
            {Object.entries(project.stats).map(([key, val]) => (
              <div key={key} className="stat-mini">
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 18, fontWeight: 600,
                  color: project.color,
                }}>{val}</div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--text-dim)', marginTop: 4,
                }}>{key}</div>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div style={{ marginBottom: 28 }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--text-dim)', display: 'block',
              marginBottom: 10,
            }}>Tech Stack</span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {project.tech.map(t => (
                <span key={t} style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em',
                  color: 'var(--text-muted)', padding: '5px 12px',
                  border: '1px solid var(--border)', background: 'var(--primary-glow)',
                }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
              className="btn-primary" style={{ textDecoration: 'none' }}>
              View Live <ExternalLink size={13} />
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
              className="btn-ghost" style={{ textDecoration: 'none' }}>
              Source Code <Github size={13} />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ─── PORTFOLIO SECTION ──────────────────────────────────── */
export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeFilter)

  return (
    <section className="section" style={{ borderTop: '1px solid var(--border)' }}>
      {/* HEADER */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -24 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <span className="eyebrow">
          <Terminal size={12} /> Selected works
        </span>
        <h2 style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'clamp(1.8rem,3.5vw,2.8rem)',
          fontWeight: 700,
          marginTop: 20,
          maxWidth: 600,
          lineHeight: 1.2,
        }}>
          Projects that{' '}
          <span style={{ color: 'var(--primary)' }}>define</span> our craft
        </h2>
        <p style={{
          color: 'var(--text-muted)', marginTop: 16,
          maxWidth: 520, lineHeight: 1.7,
        }}>
          A curated selection of products we've engineered — from MVPs to enterprise-scale platforms.
        </p>
      </motion.div>

      {/* FILTER BAR */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.15 }}
        style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 8 }}
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* PROJECT GRID */}
      <motion.div
        className="portfolio-grid"
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 16,
          marginTop: 32,
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              className="project-card"
              layout
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
              onClick={() => setSelectedProject(project)}
            >
              {/* THUMBNAIL */}
              <div className="project-thumb">
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(circle at 50% 50%, ${project.color}09 0%, transparent 60%)`,
                }} />
                <div className="grid-pattern" />
                <div className="thumb-icon">
                  <Terminal size={22} color={project.color} />
                </div>

                {/* HOVER OVERLAY */}
                <div className="project-overlay">
                  <button className="overlay-btn" title="View details"
                    onClick={e => { e.stopPropagation(); setSelectedProject(project); }}>
                    <Eye size={16} />
                  </button>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="overlay-btn" title="Live site"
                    onClick={e => e.stopPropagation()}>
                    <ExternalLink size={16} />
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="overlay-btn" title="Source code"
                    onClick={e => e.stopPropagation()}>
                    <Github size={16} />
                  </a>
                </div>
              </div>

              {/* CARD BODY */}
              <div className="card-content" style={{ padding: '20px 24px 24px' }}>
                {/* Category + Year */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: 12,
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: project.color,
                    padding: '3px 8px', border: `1px solid ${project.color}33`,
                    background: `${project.color}11`,
                  }}>{project.category}</span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: 10,
                    color: 'var(--text-dim)',
                  }}>{project.year}</span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 600,
                  lineHeight: 1.3, marginBottom: 8,
                }}>{project.title}</h3>

                {/* Description */}
                <p style={{
                  fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6,
                  marginBottom: 16,
                  display: '-webkit-box', WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical', overflow: 'hidden',
                }}>{project.description}</p>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-pill">+{project.tech.length - 3}</span>
                  )}
                </div>

                {/* View Link */}
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--primary)', cursor: 'pointer',
                }}>
                  View Project <ChevronRight size={12} />
                </div>
              </div>

              {/* Corner Accent */}
              <div style={{
                position: 'absolute', bottom: 0, right: 0,
                width: 0, height: 0,
                borderLeft: '24px solid transparent',
                borderBottom: `24px solid ${project.color}33`,
                transition: 'border-color 0.3s',
              }} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* VIEW ALL CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.6 }}
        style={{ marginTop: 48, textAlign: 'center' }}
      >
        <button className="btn-ghost">
          View All Projects <ChevronRight size={13} />
        </button>
      </motion.div>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}