import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className='site-footer'>
      <div className='site-footer-grid'>
        <div className='site-footer-brand'>
          <div className='site-footer-logo'>
            <img src='/logo.png' alt='Brand logo' className='site-footer-logo-img' />
          </div>
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
            <a href='mailto:stackstich@gmail.com' className='site-footer-link'>
              <Mail size={12} /> stackstich@gmail.com
            </a>
            <a href='tel:+917007593566' className='site-footer-link'>
              +91 7007593566
            </a>
            <p className='site-footer-text'>Avg. response time: under 24 hours</p>
          </div>

          <div className='site-footer-col'>
            <h4 className='site-footer-heading'>Follow Us</h4>
            <a href='https://www.instagram.com/stackstich_/' target='_blank' rel='noreferrer' className='site-footer-link'>
              <svg viewBox='0 0 24 24' width='12' height='12' aria-hidden='true' className='site-footer-social-icon'>
                <path
                  fill='currentColor'
                  d='M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.85 1.6a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z'
                />
              </svg>
              Instagram
            </a>
            <a href='https://facebook.com' target='_blank' rel='noreferrer' className='site-footer-link'>
              <svg viewBox='0 0 24 24' width='12' height='12' aria-hidden='true' className='site-footer-social-icon'>
                <path
                  fill='currentColor'
                  d='M13.5 22v-8h2.7l.5-3h-3.2V9.2c0-.9.3-1.6 1.6-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.4-4 4.2V11H8v3h2.5v8h3Z'
                />
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className='site-footer-bottom'>
        <span className='site-footer-text'>Copyright {new Date().getFullYear()} StackStich. All rights reserved.</span>
        <span className='site-footer-badge'>Engineered with precision.</span>
      </div>
    </footer>
  )
}

export default Footer
