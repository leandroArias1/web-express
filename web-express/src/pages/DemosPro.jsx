import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import { ArrowLeft, ExternalLink } from 'lucide-react'

const demosPro = [
  {
    id: 1,
    title: 'Total Service Car',
    description: 'Controlador de Stock para taller automotriz con diseño profesional',
    image: '/demos/total-service-car.png',
    url: 'https://sistema-stock-eta.vercel.app',
    tags: ['Profesional', 'Corporativo', 'SEO']
  },
  {
    id: 2,
    title: 'Volt',
    description: 'E-commerce completo para tienda de tecnología',
    image: '/demos/volt.png',
    url: 'https://e-commerce-woad-beta-46.vercel.app',
    tags: ['E-commerce', 'Tecnología', 'Tienda']
  }
]

const DemosPro = () => {
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
              Demos Plan <span className="gradient-text">Pro</span>
            </h1>
            <p className="demos-header__subtitle">
              Proyectos premium con animaciones avanzadas, copy optimizado y funcionalidades a medida.
              Para negocios que buscan destacarse con máxima calidad.
            </p>
          </motion.div>
        </section>

        {/* Grid de Demos */}
        <section className="demos-grid">
          {demosPro.map((demo, index) => (
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
                    e.target.src = `https://placehold.co/600x400/1a1a1a/ffffff?text=${demo.image}`
                  }}
                />
                <span className="demo-card__category demo-card__category--pro">Pro</span>
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
          <h2>¿Te gustó alguna demo Pro?</h2>
          <p>Hablemos para crear algo similar para tu negocio</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="https://wa.link/cjt13g">
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

export default DemosPro
