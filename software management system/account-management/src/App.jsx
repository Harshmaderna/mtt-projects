import Info from './components/Info'
import Navbar from './components/Navbar'
import Reports from './components/Reports'
import StockManagement from './components/StockManagement'
import Database from './Database'
import Footer from './Footer'
import Form from './Form'

const App = () => {
  return (
    <div>
       <Navbar />
       <Info />
       <StockManagement />
       <Reports />
       <Database />
       <Form />
       <Footer />
    </div>
  )
}

export default App
