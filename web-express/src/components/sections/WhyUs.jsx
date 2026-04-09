import Section from '../ui/Section'
import { motion } from 'framer-motion'
import { Clock, Award, Users, Shield } from 'lucide-react'

const cardsVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleReveal = {
  hidden: { opacity: 0, y: 24, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
}

const features = [
  {
    icon: Clock,
    title: 'Entrega Express',
    stat: '24-48hs',
    description: 'Tu sitio listo en tiempo récord'
  },
  {
    icon: Award,
    title: 'Calidad Garantizada',
    stat: '100%',
    description: 'Satisfacción de nuestros clientes'
  },
  {
    icon: Users,
    title: 'Proyectos Exitosos',
    stat: '+50',
    description: 'Webs lanzadas con éxito'
  },
  {
    icon: Shield,
    title: 'Soporte Continuo',
    stat: '24/7',
    description: 'Siempre disponibles para vos'
  }
]

const WhyUs = () => {
  return (
    <Section id="por-que-elegirnos">
      <div className="why-us">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="why-us__title"
        >
          ¿Por qué elegir <span className="text-glow">WebExpress</span>?
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="why-us__subtitle"
        >
          Nos diferenciamos por nuestra velocidad, calidad y compromiso con cada proyecto
        </motion.p>

        <motion.div
          className="why-us__grid"
          variants={cardsVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={scaleReveal}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="feature-card"
              >
                <div className="feature-card__icon">
                  <Icon size={36} strokeWidth={2} />
                  <span className="feature-card__ring" />
                </div>
                <div className="feature-card__stat">{feature.stat}</div>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__description">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="why-us__cta"
        >
          <h3>¿Listo para impulsar tu negocio?</h3>
          <p>Unite a los negocios que ya confiaron en nosotros</p>
        </motion.div>
      </div>
    </Section>
  )
}

export default WhyUs
