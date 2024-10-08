import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'
import Rodape from './assets/components/Rodape'
import Header from './assets/components/Header'
import Escocia from './assets/components/Escocia'
import Grand_Canyon from './assets/components/Grand_Canyon'
import Muralhas_da_China from './assets/components/Muralhas_da_China'
import Aruba from './assets/components/Aruba'

function App() {


  return (
    <>
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Escocia' element={<Escocia />} />
          <Route path='Grand_Canyon' element={<Grand_Canyon />} />
          <Route path='Muralha_da_China' element={<Muralhas_da_China />} />
          <Route path='Aruba' element={<Aruba />} />
        </Routes >
        <Rodape />
      </Router>
    </>
  )
}

export default App
