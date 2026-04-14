import { ChevronRight } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  
]

function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='nav-logo'>
        ⬡ CYBERLAB
      </Link>

      <div className='nav-links'>
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <Link to='/contact' className='btn-primary nav-cta'>
        Book Call <ChevronRight size={12} />
      </Link>
    </nav>
  )
}

export default Navbar
