import { Artical, Brand, CTA, Feature, Navbar } from './Components/index'
import { Footer, Header, WhatGPT3, Possibility, Features, Blog } from './containers'
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default App
