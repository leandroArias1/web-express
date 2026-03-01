import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'
import { ArrowLeft, ExternalLink } from 'lucide-react'

// Todas las demos combinadas
const todasLasDemos = [
  // EXPRESS
  {
    id: 1,
    title: 'FitGym',
    description: 'Landing page para gimnasio con diseño moderno y dinámico',
    image: '/demos/fitgym.png',
    url: 'https://fitgym-landing.vercel.app',
    category: 'Express',
    tags: ['Landing', 'Fitness', 'Moderno']
  },
  {
    id: 2,
    title: 'Estudio Contable',
    description: 'Landing page minimalista para estudio de contadores',
    image: '/demos/estudio-contable.png',
    url: 'https://estudio-contable-ruby.vercel.app',
    category: 'Express',
    tags: ['Landing', 'Contabilidad', 'Simple']
  },
  {
    id: 3,
    title: 'Barbería',
    description: 'Landing page elegante para barbería tradicional',
    image: '/demos/barberia.png',
    url: 'https://landing-simple-pi.vercel.app',
    category: 'Express',
    tags: ['Landing', 'Servicios', 'Elegante']
  },
  {
    id: 4,
    title: 'Aura',
    description: 'Diseño interiores y exteriores',
    image: '/demos/aura.png',
    url: 'https://express-2-seven.vercel.app',
    category: 'Express',
    tags: ['Landing', 'Servicios', 'Elegante']
  },
  {
    id: 5,
    title: 'Drake y Associates',
    description: 'Buffet de abogados',
    image: '/demos/drake.png',
    url: 'https://express-1-two.vercel.app/',
    category: 'Express',
    tags: ['Landing', 'Servicios', 'Elegante']
  },
  {
    id: 6,
    title: 'Barberia Eclipse',
    description: 'Barberia con sistema de turnos online',
    image: '/demos/eclipse.png',
    url: 'https://express-3-sepia.vercel.app/',
    category: 'Express',
    tags: ['Landing', 'Servicios', 'Elegante']
  },
  // NEGOCIO
  {
    id: 7,
    title: 'Rossa Repuestos',
    description: 'Web completa para repuestos de camiones IVECO',
    image: '/demos/rossa.png',
    url: 'https://negocio-rossa-repuestos.vercel.app/',
    category: 'Negocio',
    tags: ['Web completa', 'Repuestos', 'Catálogo']
  },
  {
    id: 8,
    title: 'Farine',
    description: 'Panadería y pastelería',
    image: '/demos/farine.png',
    url: 'https://negocio-2.vercel.app/',
    category: 'Negocio',
    tags: ['Panadería', 'Pastelería', 'Servicios']
  },
  // PRO
  {
    id: 9,
    title: 'Total Service Car',
    description: 'Controlador de Stock para taller automotriz con diseño profesional',
    image: '/demos/total-service-car.png',
    url: 'https://sistema-stock-eta.vercel.app',
    category: 'Pro',
    tags: ['Profesional', 'Corporativo', 'SEO']
  },
  {
    id: 10,
    title: 'Volt',
    description: 'E-commerce completo para tienda de tecnología',
    image: '/demos/volt.png',
    url: 'https://e-commerce-woad-beta-46.vercel.app',
    category: 'Pro',
    tags: ['E-commerce', 'Tecnología', 'Tienda']
  }
]

const TodasLasDemos = () => {
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
              href="/#portfolio"
              className="demos-header__back"
            >
              <ArrowLeft size={20} />
              Volver al portfolio
            </Button>
            
            <h1 className="demos-header__title">
              Todas nuestras <span className="gradient-text">Demos</span>
            </h1>
            <p className="demos-header__subtitle">
              Explorá todos los proyectos que hemos creado. 
              Desde landing pages hasta sistemas completos.
            </p>
          </motion.div>
        </section>

        {/* Grid de Demos */}
        <section className="demos-grid">
          {todasLasDemos.map((demo, index) => (
            <motion.div
              key={demo.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
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
                <span className={`demo-card__category demo-card__category--${demo.category.toLowerCase()}`}>
                  {demo.category}
                </span>
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
          <h2>¿Te gustó alguna demo?</h2>
          <p>Hablemos para crear algo similar para tu negocio</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="https://wa.link/1x6woe">
              Contactar por WhatsApp
            </Button>
            <Button variant="outline" href="/#planes">
              Ver planes
            </Button>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

export default TodasLasDemos
