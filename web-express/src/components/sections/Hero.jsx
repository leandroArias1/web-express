import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Button from '../ui/Button'

const Hero = () => {
  return (
    <Section variant="gradient" className="hero">
      <div className="hero__content">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hero__title"
        >
          Tu página web profesional <br />
          <span>en 48 horas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero__subtitle"
        >
          Diseñamos y desarrollamos soluciones digitales rápidas, claras y sin vueltas.
          Desde páginas web hasta sistemas de gestión internos.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="hero__actions"
        >
          <Button
            href="https://wa.link/1x6woe"
            target="_blank"
          >
            Consultar por WhatsApp
          </Button>

          <Button variant="outline" href="#planes">
            Ver planes
          </Button>
        </motion.div>
      </div>

      {/* spotlight / glow decorativo */}
      <div className="hero__spotlight" />
    </Section>
  )
}

export default Hero
