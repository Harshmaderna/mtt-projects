import React from 'react'
import Navbar from './components/Navbar'
import Info from './components/Info'
import TransportManagement from './components/TransportManagement'
import Management from './components/Management'
import Report from './components/Report'
import Form from './components/Form'
import Footer from './components/Footer'



const App = () => {
  return (
    <div>
    <Navbar />
    <Info />
    <TransportManagement />
    <Management /> 
    <Report />
    <Form />
    <Footer />
    </div>
  )
}

export default App
