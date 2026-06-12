import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import SkinScanner from './components/SkinScanner'
import ChatBot from './components/ChatBot'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showScanner, setShowScanner] = useState(false)

  const handleStartScan = () => {
    setShowScanner(true)
  }

  const handleBackFromScanner = () => {
    setShowScanner(false)
  }

  return (
    <div className="app-wrapper">
      <Header />
      <main>
        {!showScanner ? (
          <Hero onStart={handleStartScan} />
        ) : (
          <SkinScanner onBack={handleBackFromScanner} />
        )}
      </main>
      <ChatBot />
      <Footer />
    </div>
  )
}

export default App
