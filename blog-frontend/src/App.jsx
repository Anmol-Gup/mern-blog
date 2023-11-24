import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Components/About.jsx'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Home from './Components/Home.jsx'
import Article from './Components/Article.jsx'
import Error from './Components/Error.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/article/:name' element={<Article />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
