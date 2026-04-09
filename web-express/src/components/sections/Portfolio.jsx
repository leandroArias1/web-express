import Section from '../ui/Section'
import Button from '../ui/Button'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const gridVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

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

        <motion.div
          className="portfolio__grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {featuredDemos.map((demo) => (
            <motion.a
              key={demo.title}
              href={demo.url}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.015 }}
              transition={{ duration: 0.35 }}
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
                <div className="portfolio-card__shine" />
              </div>
              <div className="portfolio-card__content">
                <span className="portfolio-card__category">{demo.category}</span>
                <h3 className="portfolio-card__title">{demo.title}</h3>
                <p className="portfolio-card__more">Ver demo en detalle</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

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
