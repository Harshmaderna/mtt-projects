import React from 'react'
import Navbar from './components/Navbar'
import Info from './components/Info'
import DataExtractor from './components/DataExtractor'
import GoogleMapDataExtractor from './components/GoogleMapDataExtractor'
import Askedquestion from './components/Askedquestion'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Info />
      <DataExtractor />
      <GoogleMapDataExtractor />
      <Askedquestion />
      <Footer />
    </div>
  )
}

export default App
