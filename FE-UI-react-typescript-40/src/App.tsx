
import { BrowserRouter, Route, Routes } from 'react-router'

import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'


function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          </Route>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
