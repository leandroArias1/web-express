import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const demosExpress = [
  {
    id: 1,
    title: 'FitGym',
    description: 'Landing page para gimnasio con diseño moderno y dinámico',
    image: '/demos/fitgym.png',
    url: 'https://fitgym-landing.vercel.app',
    tags: ['Landing', 'Fitness', 'Moderno']
  },
  {
    id: 2,
    title: 'Estudio Contable',
    description: 'Landing page minimalista para estudio de contadores',
    image: '/demos/estudio-contable.png',
    url: 'https://estudio-contable-ruby.vercel.app',
    tags: ['Landing', 'Contabilidad', 'Simple']
  },
  {
    id: 3,
    title: 'Barbería',
    description: 'Landing page elegante para barbería tradicional',
    image: '/demos/barberia.png',
    url: 'https://landing-simple-pi.vercel.app',
    tags: ['Landing', 'Servicios', 'Elegante']
  }
]

const DemosExpress = () => {
  return (
    <div className="demos-page">
      <Navbar />
      
      <main className="demos-container">
        {/* Header */}
        <section className="demos-header">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="demos-header__content"
          >
            <Button 
              variant="outline" 
              href="/#planes"
              className="demos-header__back"
            >
              <ArrowLeft size={20} />
              Volver a planes
            </Button>
            
            <h1 className="demos-header__title">
              Demos Plan <span className="gradient-text">Express</span>
            </h1>
            <p className="demos-header__subtitle">
              Landing pages de una sección, diseño moderno y entrega en 24 horas.
              Perfectas para empezar rápido y con presupuesto ajustado.
            </p>
          </motion.div>
        </section>

        {/* Grid de Demos */}
        <section className="demos-grid">
          {demosExpress.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="demo-card"
            >
              {/* Imagen */}
              <div className="demo-card__image">
                <img 
                  src={demo.image} 
                  alt={demo.title}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/1a1a1a/ffffff?text=${demo.title}`
                  }}
                />
                <span className="demo-card__category demo-card__category--express">Express</span>
              </div>

              {/* Contenido */}
              <div className="demo-card__content">
                <h3 className="demo-card__title">{demo.title}</h3>
                <p className="demo-card__description">{demo.description}</p>
                
                {/* Tags */}
                <div className="demo-card__tags">
                  {demo.tags.map(tag => (
                    <span key={tag} className="demo-card__tag">{tag}</span>
                  ))}
                </div>

                {/* Botón */}
                <Button 
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-card__button"
                >
                  Ver demo
                  <ExternalLink size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Final */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="demos-cta"
        >
          <h2>¿Te gustó alguna demo Express?</h2>
          <p>Hablemos para crear algo similar para tu negocio</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="https://wa.link/zddsqj">
              Contactar por WhatsApp
            </Button>
            <Button variant="outline" href="/#planes">
              Ver otros planes
            </Button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default DemosExpress
