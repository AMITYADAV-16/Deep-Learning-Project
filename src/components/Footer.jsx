import React from 'react'

export default function Footer() {
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
              <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Scanner</a></li>
              <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Analysis</a></li>
              <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.25rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>About</a></li>
              <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Contact</a></li>
              <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '1.25rem' }}>Legal</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Terms</a></li>
              <li><a href="#" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Cookie Policy</a></li>
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
