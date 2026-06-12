import React, { useState } from 'react'
import { Activity } from 'lucide-react'

export default function Header() {
  const [activeNav, setActiveNav] = useState('analysis')
  const handleEmergencyCare = (e) => {
    e.preventDefault()
    alert('Emergency Care: Please call your local emergency services or visit the nearest hospital immediately.')
  }

  const handleNavClick = (e, section) => {
    e.preventDefault()
    setActiveNav(section)
    console.log('Navigation to:', section)
  }

  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
          <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '12px', display: 'flex' }}>
            <Activity size={24} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit', color: 'var(--primary)' }}>DermAI</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a 
            href="#analysis" 
            onClick={(e) => handleNavClick(e, 'analysis')}
            style={{ 
              textDecoration: 'none', 
              color: activeNav === 'analysis' ? 'var(--primary)' : 'var(--muted)', 
              fontWeight: '500',
              transition: 'color 0.3s',
              cursor: 'pointer'
            }}
          >
            Analysis
          </a>
          <a 
            href="#history" 
            onClick={(e) => handleNavClick(e, 'history')}
            style={{ 
              textDecoration: 'none', 
              color: activeNav === 'history' ? 'var(--primary)' : 'var(--muted)', 
              fontWeight: '500',
              transition: 'color 0.3s',
              cursor: 'pointer'
            }}
          >
            History
          </a>
          <a 
            href="#about" 
            onClick={(e) => handleNavClick(e, 'about')}
            style={{ 
              textDecoration: 'none', 
              color: activeNav === 'about' ? 'var(--primary)' : 'var(--muted)', 
              fontWeight: '500',
              transition: 'color 0.3s',
              cursor: 'pointer'
            }}
          >
            About
          </a>
          <button 
            onClick={handleEmergencyCare}
            className="btn btn-primary" 
            style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}
          >
            Emergency Care
          </button>
        </nav>
      </div>
    </header>
  )
}
