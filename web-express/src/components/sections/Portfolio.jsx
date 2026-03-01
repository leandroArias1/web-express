import Section from '../ui/Section'
import Button from '../ui/Button'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const featuredDemos = [
  {
    title: 'FitGym',
    category: 'Express',
    image: '/demos/fitgym.png',
    url: '/demos/express'
  },
  {
    title: 'Rossa Repuestos',
    category: 'Negocio',
    image: '/demos/rossa.png',
    url: '/demos/negocio'
  },
  {
    title: 'Volt E-commerce',
    category: 'Pro',
    image: '/demos/volt.png',
    url: '/demos/pro'
  }
]

const Portfolio = () => {
  return (
    <Section variant="soft" id="portfolio">
      <div className="portfolio">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio__title"
        >
          Nuestros <span className="text-glow">trabajos</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="portfolio__subtitle"
        >
          Conocé algunos de los proyectos que desarrollamos
        </motion.p>

        <div className="portfolio__grid">
          {featuredDemos.map((demo, index) => (
            <motion.a
              key={demo.title}
              href={demo.url}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="portfolio-card"
            >
              <div className="portfolio-card__image">
                <img 
                  src={demo.image} 
                  alt={demo.title}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/0b0f0e/7CFF00?text=${demo.title}`
                  }}
                />
                <div className="portfolio-card__overlay">
                  <ExternalLink size={32} strokeWidth={2} />
                </div>
              </div>
              <div className="portfolio-card__content">
                <span className="portfolio-card__category">{demo.category}</span>
                <h3 className="portfolio-card__title">{demo.title}</h3>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="portfolio__cta"
        >
          <Button href="/demos">Ver todas las demos</Button>
        </motion.div>
      </div>
    </Section>
  )
}

export default Portfolio
