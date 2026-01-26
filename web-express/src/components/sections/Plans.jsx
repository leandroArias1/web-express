import Section from '../ui/Section'
import Button from '../ui/Button'
import { motion } from 'framer-motion'

const Plans = () => {
  return (
    <Section id="planes">
      <div className="plans">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="plans__title"
        >
          Planes simples, resultados reales
        </motion.h2>

        <div className="plans__grid">
          {/* EXPRESS */}
          <motion.div whileHover={{ y: -8 }} className="plan">
            <h3>Express</h3>
            <p className="plan__price">Desde $60.000 ARS</p>
            <ul>
              <li>Landing page (1 sección)</li>
              <li>Diseño moderno</li>
              <li>Botón WhatsApp</li>
              <li>Entrega en 24 hs</li>
            </ul>
            <Button href="https://wa.me/5492612113198">
              Elegir Express
            </Button>
          </motion.div>

          {/* NEGOCIO */}
          <motion.div
            whileHover={{ y: -12 }}
            className="plan plan--featured"
          >
            <span className="plan__badge">Más elegido</span>
            <h3>Negocio</h3>
            <p className="plan__price">Desde $120.000 ARS</p>
            <ul>
              <li>Web completa (hasta 5 secciones)</li>
              <li>Diseño personalizado</li>
              <li>SEO básico</li>
              <li>WhatsApp + formulario</li>
              <li>Entrega en 48 hs</li>
              <li>Posibilidad de sumar módulos a medida</li>
            </ul>
            <Button href="https://wa.me/5492612113198">
              Elegir Negocio
            </Button>
          </motion.div>

          {/* PRO */}
          <motion.div whileHover={{ y: -8 }} className="plan">
            <h3>Pro</h3>
            <p className="plan__price">Desde $180.000 ARS</p>
            <ul>
              <li>Todo el plan Negocio</li>
              <li>Posibilidad de sumar módulos a medida</li>
              <li>Animaciones avanzadas</li>
              <li>Copy optimizado</li>
            </ul>
            <Button href="https://wa.me/5492612113198">
              Elegir Pro
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Plans
