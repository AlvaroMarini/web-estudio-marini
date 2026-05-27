import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CasosFrecuentes } from './components/CasosFrecuentes'
import { Servicios } from './components/Servicios'
import { FaqYJurisprudencia } from './components/FaqYJurisprudencia'
// import { EvaluaTuCaso } from './components/EvaluaTuCaso'
import { Footer } from './components/Footer'
import { BotonWhatsApp } from './components/BotonWhatsApp'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans relative">
      <Navbar />
      <Hero />
      <CasosFrecuentes />
      <Servicios />
      <FaqYJurisprudencia />
      {/* <EvaluaTuCaso /> */}
      <Footer />
      
      <BotonWhatsApp />
    </div>
  )
}

export default App