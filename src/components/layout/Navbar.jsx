import { useEffect, useState } from 'react'
import { ChevronRight, Menu, X } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const links = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  const closeMobileMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className='nav'>
      <Link to='/' className='nav-logo'>
        <img src='/logo.png' alt='StackStich Logo' className='nav-logo-img' />
      </Link>

      <button
        type='button'
        className='nav-menu-btn'
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-expanded={isMenuOpen}
        aria-label='Toggle navigation menu'
      >
        {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      <div className={`nav-panel ${isMenuOpen ? 'nav-panel-open' : ''}`}>
        <div className='nav-links'>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link to='/contact' className='btn-primary nav-cta' onClick={closeMobileMenu}>
          Book Call <ChevronRight size={12} />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
