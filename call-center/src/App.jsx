import Article from "./Article"
import Askedquestion from "./Askedquestion"
import Callcenter from "./components/Callcenter"
import Info from "./components/Info"
import Navbar from "./components/Navbar"
import Footer from "./Footer"
import Form from "./Form"

const App = () => {
  return (
    <div>
     <Navbar />
     <Info />
     <Callcenter />
     <Article />
     <Askedquestion />
     <Form />
     <Footer />
    </div>
  )
}

export default App
