import { motion } from 'framer-motion'
import Section from '../ui/Section'
import Button from '../ui/Button'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
}

const Hero = () => {
  return (
    <Section variant="gradient" className="hero">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="hero__content"
      >
        <motion.p variants={itemVariants} className="hero__eyebrow">
          Diseño + Desarrollo + Automatización
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="hero__title"
        >
          Tu página web profesional <br />
          <span>en 48 horas</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="hero__subtitle"
        >
          Diseñamos y desarrollamos soluciones digitales rápidas, claras y sin vueltas.
          Desde páginas web hasta sistemas de gestión internos.
        </motion.p>

        <motion.div
          variants={itemVariants}
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

        <motion.div variants={itemVariants} className="hero__trust">
          <div className="hero__trust-item">
            <strong>+50</strong>
            <span>proyectos lanzados</span>
          </div>
          <div className="hero__trust-item">
            <strong>24/7</strong>
            <span>acompañamiento post-entrega</span>
          </div>
          <div className="hero__trust-item">
            <strong>5★</strong>
            <span>en calidad y atención</span>
          </div>
        </motion.div>
      </motion.div>

      {/* spotlight / glow decorativo */}
      <div className="hero__spotlight" />
      <div className="hero__spotlight hero__spotlight--secondary" />
      <motion.div
        aria-hidden="true"
        className="hero__floating hero__floating--one"
        animate={{ y: [0, -12, 0], x: [0, 5, 0], rotate: [0, 1.5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="hero__floating hero__floating--two"
        animate={{ y: [0, 10, 0], x: [0, -8, 0], rotate: [0, -1, 0] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </Section>
  )
}

export default Hero
