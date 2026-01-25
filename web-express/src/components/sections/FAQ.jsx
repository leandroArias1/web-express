import Section from '../ui/Section'
import { motion } from 'framer-motion'

const faqs = [
  {
    q: '¿Realmente entregan en 24–48 horas?',
    a: 'Sí. Siempre que tengamos la información necesaria, cumplimos ese plazo.',
  },
  {
    q: '¿El precio incluye dominio y hosting?',
    a: 'No. Si lo necesitás, te asesoramos para contratarlo fácilmente.',
  },
  {
    q: '¿Puedo pedir cambios?',
    a: 'Incluimos ajustes básicos. Cambios grandes se cotizan aparte.',
  },
  {
    q: '¿La web es mía?',
    a: 'Sí. Una vez entregada y pagada, la web es 100% tuya.',
  },
]

const FAQ = () => {
  return (
    <Section variant="soft">
      <div className="faq">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="faq__title"
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="faq__list">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="faq__item"
            >
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default FAQ
