import Section from '../ui/Section'
import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Contacto',
    text: 'Nos escribís por WhatsApp o completás el formulario.',
  },
  {
    number: '02',
    title: 'Definimos',
    text: 'Revisamos tu negocio y definimos el plan ideal.',
  },
  {
    number: '03',
    title: 'Diseño',
    text: 'Diseñamos y desarrollamos tu web.',
  },
  {
    number: '04',
    title: 'Entrega',
    text: 'Publicamos tu web en 24–48 horas.',
  },
]

const Process = () => {
  return (
    <Section variant="soft">
      <div className="process">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="process__title"
        >
          Cómo trabajamos
        </motion.h2>

        <div className="process__grid">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              whileHover={{ y: -6 }}
              className="process__step"
            >
              <span className="process__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Process
