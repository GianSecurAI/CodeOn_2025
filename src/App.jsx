import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CodeOfConduct from './pages/CodeOfConduct'
import FAQs from './pages/FAQs'
import Agenda from './pages/Agenda'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/codigo-de-conducta" element={<CodeOfConduct />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/agenda" element={<Agenda />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
