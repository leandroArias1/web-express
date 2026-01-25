import Section from '../ui/Section'
import { motion } from 'framer-motion'

const Target = () => {
  return (
    <Section variant="soft" id="para-quien">
      <div className="target">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="target__title"
        >
          ¿Para quién es este servicio?
        </motion.h2>

        <div className="target__grid">
          <motion.div
            whileHover={{ y: -6 }}
            className="target__card"
          >
            <h3>✅ Ideal para</h3>
            <ul>
              <li>Negocios sin página web</li>
              <li>Webs viejas o desactualizadas</li>
              <li>Profesionales y servicios</li>
              <li>Locales que quieren más consultas</li>
            </ul>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            className="target__card target__card--no"
          >
            <h3>❌ No es para</h3>
            <ul>
              <li>E-commerce complejos</li>
              <li>Apps o sistemas a medida</li>
              <li>Proyectos con meses de desarrollo</li>
              <li>Clientes que quieren “algo barato”</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

export default Target
