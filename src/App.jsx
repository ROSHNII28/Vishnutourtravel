import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import WhatsAppFloat from './components/WhatsAppFloat'
import About from './pages/About'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Home from './pages/Home'
import PackageDetail from './pages/PackageDetail'
import Packages from './pages/Packages'
import WhyUs from './pages/WhyUs'
import Testimonials from './pages/services'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetail />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
