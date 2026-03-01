import Button from '../ui/Button'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Si estás en home, usa anclas. Si no, vuelve a home con ancla
  const getLink = (section) => {
    return isHome ? `#${section}` : `/#${section}`
  }

  return (
    <header className="navbar">
      <div className="navbar__container">
        <a href="/" className="navbar__logo">
          WEB<span>EXPRESS</span>
        </a>

        <nav className="navbar__nav">
          <a href={getLink('servicios')}>Servicios</a>
          <a href={getLink('planes')}>Planes</a>
          <a href={getLink('portfolio')}>Portfolio</a>
          <a href={getLink('contacto')}>Contacto</a>
        </nav>

        <Button
          href="https://wa.link/1x6woe"
          target="_blank"
        >
          WhatsApp
        </Button>
      </div>
    </header>
  )
}

export default Navbar
