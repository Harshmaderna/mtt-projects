import React from 'react'
import Navbar from './components/Navbar'
import Info from './components/Info'
import GoogleMapDataExtractor from './components/GoogleMapDataExtractor'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Info />
      <GoogleMapDataExtractor />
      <Footer />
    </div>
  )
}

export default App
