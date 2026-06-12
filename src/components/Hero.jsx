import React from 'react'
import { ShieldCheck, Zap, HeartPulse, ArrowRight, Play } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero({ onStart }) {
  const handleWatchDemo = (e) => {
    e.preventDefault()
    alert('Demo: This would open a video demonstrating how the skin scanner works. Coming soon!')
  }

  const handleStartScan = (e) => {
    e.preventDefault()
    onStart()
  }

  return (
    <section className="hero-section">
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-light)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: '2rem' }}>
            <ShieldCheck size={16} />
            <span>AI-Powered Dermatological Assistant</span>
          </div>
          <h1 style={{ fontSize: '4rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Advanced <span style={{ color: 'var(--primary)' }}>Skin Problem</span> Detection at Home.
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--muted)', marginBottom: '2.5rem', maxWidth: '540px' }}>
            Get instant insights into skin concerns using our state-of-the-art AI. Fast, accurate, and completely private.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button 
              onClick={handleStartScan}
              className="btn btn-primary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
              type="button"
            >
              Start Skin Scan <ArrowRight size={20} />
            </button>
            <button 
              onClick={handleWatchDemo}
              className="btn btn-secondary" 
              style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
              type="button"
            >
              <Play size={20} /> Watch Demo
            </button>
          </div>
          
          <div style={{ display: 'flex', gap: '2rem', marginTop: '3rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={18} color="var(--primary)" />
              <span style={{ fontWeight: '500', color: 'var(--muted)' }}>98.2% Accuracy</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <HeartPulse size={18} color="var(--primary)" />
              <span style={{ fontWeight: '500', color: 'var(--muted)' }}>Trusted by Doctors</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{ position: 'relative' }}
        >
          <div style={{ 
            width: '100%', 
            aspectRatio: '1', 
            background: 'linear-gradient(45deg, var(--primary-light), white)', 
            borderRadius: '24% 76% 70% 30% / 30% 30% 70% 70%',
            position: 'absolute',
            zIndex: -1,
            filter: 'blur(40px)',
            opacity: 0.6
          }}></div>
          <div className="glass" style={{ borderRadius: '2rem', padding: '2rem', textAlign: 'center', position: 'relative' }}>
             <img 
               src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800" 
               alt="Dermatology Analysis" 
               style={{ width: '100%', borderRadius: '1.5rem', boxShadow: 'var(--shadow-lg)', display: 'block' }}
             />
             <div className="glass" style={{ position: 'absolute', bottom: '1rem', right: '1rem', padding: '1rem', borderRadius: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ background: '#22c55e', width: '12px', height: '12px', borderRadius: '50%' }}></div>
                <span style={{ fontWeight: '600' }}>AI System Online</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
