const TECH = ['React', 'TypeScript', 'Next.js', 'Node.js', 'Supabase', 'Tailwind', 'React Native', 'Expo', 'Framer', 'Figma', 'AWS', 'Vercel']

function TechMarquee() {
  const items = [...TECH, ...TECH]

  return (
    <div className='tech-strip'>
      <div className='marquee-wrap'>
        <div className='marquee-track'>
          {items.map((tech, index) => (
            <span key={`${tech}-${index}`} className='marquee-item'>
              <span className='marquee-dot'>⬡</span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechMarquee
