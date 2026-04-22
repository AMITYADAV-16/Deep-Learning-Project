import React from 'react'
import { Activity } from 'lucide-react'

export default function Header() {
  return (
    <header className="glass" style={{ position: 'sticky', top: 0, zIndex: 100, borderBottom: '1px solid var(--border)' }}>
      <div className="container" style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{ background: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '12px', display: 'flex' }}>
            <Activity size={24} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', fontFamily: 'Outfit', color: 'var(--primary)' }}>DermAI</span>
        </div>
        
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--muted)', fontWeight: '500' }}>Analysis</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--muted)', fontWeight: '500' }}>History</a>
          <a href="#" style={{ textDecoration: 'none', color: 'var(--muted)', fontWeight: '500' }}>About</a>
          <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Emergency Care</button>
        </nav>
      </div>
    </header>
  )
}
