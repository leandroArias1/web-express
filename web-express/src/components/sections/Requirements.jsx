import Section from '../ui/Section'
import { motion } from 'framer-motion'

const Requirements = () => {
  return (
    <Section>
      <div className="requirements">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="requirements__title"
        >
          ¿Qué necesitamos para empezar?
        </motion.h2>

        <div className="requirements__grid">
          <motion.div whileHover={{ y: -6 }} className="requirements__item">
            <span>✔</span>
            <p>Nombre del negocio</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="requirements__item">
            <span>✔</span>
            <p>Rubro y descripción</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="requirements__item">
            <span>✔</span>
            <p>Logo (si tiene)</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="requirements__item">
            <span>✔</span>
            <p>Textos o referencias</p>
          </motion.div>

          <motion.div whileHover={{ y: -6 }} className="requirements__item">
            <span>✔</span>
            <p>WhatsApp o datos de contacto</p>
          </motion.div>
        </div>

        <p className="requirements__note">
          Con esta información podemos entregar tu web en 24–48 horas.
        </p>
      </div>
    </Section>
  )
}

export default Requirements
