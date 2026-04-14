import Hero from '../components/sections/Hero'
import TechMarquee from '../components/sections/TechMarquee'
import Services from '../components/sections/Services'
import About from '../components/sections/About'
import Team from '../components/sections/Team'
import Contact from '../components/sections/Contact'

function Home() {
  return (
    <div className='noise page-shell'>
      <Hero />
      <TechMarquee />
      <Services />
      <div className='glow-line' />
      <About />
      <div className='glow-line' />
      <Team />
      <div className='glow-line' />
      <Contact />
    </div>
  )
}

export default Home
