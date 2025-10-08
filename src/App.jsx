import './App.css'
import Footer from './components/welcomeComp/footer/Footer'
import Welcome from './pages/welcome/Welcome'
import Platform from './pages/platform/Platform'
import Complexity from './pages/complexity/Complexity'

function App() {


  return (
    <div>
      <Welcome/>
      <Complexity/>
      <Platform/>
      <Footer/>
    </div>
  )
}

export default App
