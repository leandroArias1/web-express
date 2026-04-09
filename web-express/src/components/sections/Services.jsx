import Section from '../ui/Section'
import { motion } from 'framer-motion'
import { Zap, Palette, Code, Smartphone } from 'lucide-react'

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const revealUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
  }
}

const services = [
  {
    icon: Zap,
    title: 'Desarrollo Rápido',
    description: 'Sitios web listos en 24-48 horas. Transformamos tu idea en realidad en tiempo récord.'
  },
  {
    icon: Palette,
    title: 'Diseño Profesional',
    description: 'Interfaces modernas y atractivas que convierten visitantes en clientes.'
  },
  {
    icon: Code,
    title: 'Código Optimizado',
    description: 'Tecnología de última generación para sitios rápidos, seguros y escalables.'
  },
  {
    icon: Smartphone,
    title: '100% Responsive',
    description: 'Tu sitio se ve perfecto en cualquier dispositivo: móvil, tablet o desktop.'
  }
]

const Services = () => {
  return (
    <Section id="servicios">
      <div className="services">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="services__title"
        >
          Creamos tu <span className="text-glow">presencia digital</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="services__subtitle"
        >
          Desarrollamos sitios web profesionales que impulsan tu negocio.
          Desde landing pages hasta e-commerce completos.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="services__grid"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={revealUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.35 }}
                className="service-card"
              >
                <motion.div
                  className="service-card__icon"
                  whileHover={{ rotate: -7, scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 220, damping: 14 }}
                >
                  <Icon size={28} strokeWidth={2} />
                </motion.div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
                <div className="service-card__beam" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}

export default Services
