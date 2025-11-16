import Header from './components/Header'
import Hero from './components/Hero'
import Sites from './components/Sites'
import Sistemas from './components/Sistemas'
import Automacoes from './components/Automacoes'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="home"><Hero /></section>
        <section id="sites"><Sites /></section>
        <section id="sistemas"><Sistemas /></section>
        <section id="automacoes"><Automacoes /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
