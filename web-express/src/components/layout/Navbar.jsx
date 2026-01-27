import Button from '../ui/Button'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          WEB<span>EXPRESS</span>
        </div>

        <nav className="navbar__nav">
          <a href="#planes">Planes</a>
          <a href="#para-quien">Para quién</a>
          <a href="#contacto">Contacto</a>
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
