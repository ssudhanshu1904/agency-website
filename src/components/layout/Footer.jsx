import { ArrowUpRight, CodeXml, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='site-footer-grid'>
        <div className='site-footer-brand'>
          <p className='site-footer-logo'>
            <CodeXml size={16} />
            NEXUSFORGE
          </p>
          <p className='site-footer-tagline'>
            Web and app engineering studio building premium digital products with precision, speed, and cyberpunk aesthetics.
          </p>
          <p className='site-footer-meta'>
            <MapPin size={13} /> Remote-first | Global delivery
          </p>
        </div>

        <div className='site-footer-columns'>
          <div className='site-footer-col'>
            <h4 className='site-footer-heading'>Navigate</h4>
            <Link to='/' className='site-footer-link'>
              Home <ArrowUpRight size={12} />
            </Link>
            <Link to='/services' className='site-footer-link'>
              Services <ArrowUpRight size={12} />
            </Link>
            <Link to='/about' className='site-footer-link'>
              About <ArrowUpRight size={12} />
            </Link>
            <Link to='/contact' className='site-footer-link'>
              Contact <ArrowUpRight size={12} />
            </Link>
          </div>

          <div className='site-footer-col'>
            <h4 className='site-footer-heading'>Contact</h4>
            <a href='mailto:hello@nexusforge.dev' className='site-footer-link'>
              <Mail size={12} /> hello@nexusforge.dev
            </a>
            <p className='site-footer-text'>Avg. response time: under 24 hours</p>
          </div>
        </div>
      </div>

      <div className='site-footer-bottom'>
        <span className='site-footer-text'>Copyright {new Date().getFullYear()} NexusForge. All rights reserved.</span>
        <span className='site-footer-badge'>Engineered with precision.</span>
      </div>
    </footer>
  )
}

export default Footer
