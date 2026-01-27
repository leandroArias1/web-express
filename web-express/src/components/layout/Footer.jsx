import Button from '../ui/Button'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>WEB<span>EXPRESS</span></h3>
          <p>
            Páginas web profesionales para negocios.
            Entrega en 24–48 horas.
          </p>
        </div>

        <div className="footer__actions">
          <Button
            href="https://wa.link/1x6woe"
            target="_blank"
          >
            Contactar por WhatsApp
          </Button>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} WebExpress. Todos los derechos reservados.
      </div>
    </footer>
  )
}

export default Footer
