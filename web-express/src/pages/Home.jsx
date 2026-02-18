import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import Plans from '../components/sections/Plans'
import Process from '../components/sections/Process'
import Requirements from '../components/sections/Requirements'
import FAQ from '../components/sections/FAQ'
import Contact from '../components/sections/Contact'
import Footer from '../components/layout/Footer'
import Extras from '../components/sections/Extras'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Plans />
      <Extras />
      <Process />
      <Requirements />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
