import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Plans from '../components/sections/Plans'
import Portfolio from '../components/sections/Portfolio'
import Process from '../components/sections/Process'
import WhyUs from '../components/sections/WhyUs'
import Extras from '../components/sections/Extras'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Plans />
      <Portfolio />
      <Process />
      <WhyUs />
      <Extras />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
