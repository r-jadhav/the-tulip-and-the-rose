import { Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ContactPage from './pages/ContactPage/ContactPage'
import WeekendBrunch from './pages/WeekendBrunch/WeekendBrunch';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="weekend-brunch" element={<WeekendBrunch />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
