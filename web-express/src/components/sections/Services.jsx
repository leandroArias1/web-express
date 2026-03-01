import Section from '../ui/Section'
import { motion } from 'framer-motion'
import { Zap, Palette, Code, Smartphone } from 'lucide-react'

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

        <div className="services__grid">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="service-card"
              >
                <div className="service-card__icon">
                  <Icon size={28} strokeWidth={2} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__description">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}

export default Services
