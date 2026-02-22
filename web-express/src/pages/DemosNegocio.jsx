import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const demosNegocio = [
  {
    id: 1,
    title: 'Rossa Repuestos',
    description: 'Web completa para repuestos de camiones IVECO',
    image: '/demos/rossa.png',
    url: 'https://negocio-rossa-repuestos.vercel.app/',
    tags: ['Web completa', 'Repuestos', 'Catálogo']
  },
  {
    id: 2,
    title: 'Farine',
    description: 'Panadería y pastelería',
    image: '/demos/farine.png',
    url: 'https://negocio-2.vercel.app/',
    tags: ['Panadería', 'Pastelería', 'Servicios']
  }
]

const DemosNegocio = () => {
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
              Demos Plan <span className="gradient-text">Negocio</span>
            </h1>
            <p className="demos-header__subtitle">
              Webs completas de hasta 5 secciones, diseño personalizado y SEO básico.
              Ideales para negocios que buscan presencia profesional online.
            </p>
          </motion.div>
        </section>

        {/* Grid de Demos */}
        <section className="demos-grid">
          {demosNegocio.map((demo, index) => (
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
                <span className="demo-card__category demo-card__category--negocio">Negocio</span>
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
          <h2>¿Te gustó alguna demo Negocio?</h2>
          <p>Hablemos para crear algo similar para tu negocio</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="https://wa.link/g3253s">
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

export default DemosNegocio
