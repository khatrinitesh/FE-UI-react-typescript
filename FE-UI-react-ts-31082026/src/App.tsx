import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

function App() {
  return <BrowserRouter><Routes><Route element={<MainLayout />}><Route index element={<HomePage />} /><Route path="contact" element={<ContactPage />} /><Route path="*" element={<Navigate to="/" replace />} /></Route></Routes></BrowserRouter>
}

export default App
