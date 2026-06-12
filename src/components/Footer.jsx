import React from 'react'

export default function Footer() {
  const handleNavClick = (e, section) => {
    e.preventDefault()
    console.log('Navigating to:', section)
    alert(`Navigation to ${section} - Feature coming soon!`)
  }

  return (
    <footer style={{ background: 'white', borderTop: '1px solid var(--border)', padding: '4rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          <div>
            <h3 style={{ color: 'var(--primary)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>DermAI</h3>
            <p style={{ color: 'var(--muted)', maxWidth: '300px' }}>
              Empowering people to take control of their skin health through accessible AI technology.
            </p>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.25rem' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#scanner" onClick={(e) => handleNavClick(e, 'Scanner')} style={{ color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>Scanner</a></li>
              <li><a href="#analysis" onClick={(e) => handleNavClick(e, 'Analysis')} style={{ color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>Analysis</a></li>
              <li><a href="#privacy" onClick={(e) => handleNavClick(e, 'Privacy')} style={{ color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.25rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'About')} style={{ color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>About</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'Contact')} style={{ color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>Contact</a></li>
              <li><a href="#careers" onClick={(e) => handleNavClick(e, 'Careers')} style={{ color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.25rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#terms" onClick={(e) => handleNavClick(e, 'Terms')} style={{ color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>Terms</a></li>
              <li><a href="#cookies" onClick={(e) => handleNavClick(e, 'Cookie Policy')} style={{ color: 'var(--muted)', textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--muted)'}>Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '2rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.875rem', color: 'var(--muted)' }}>
            © 2024 DermAI Inc. All rights reserved. 
            <br />
            <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>
              Medical Disclaimer: This application is for educational purposes only and does not provide medical advice.
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
