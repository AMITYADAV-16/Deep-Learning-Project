import React, { useState, useRef } from 'react'
import { Upload, Camera, X, CheckCircle2, AlertCircle, RefreshCcw, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const MOCK_CONDITIONS = [
  { name: 'Common Acne', probability: 89, severity: 'Low', recommendation: 'Regular cleansing and OTC topical treatments.' },
  { name: 'Eczema', probability: 74, severity: 'Medium', recommendation: 'Keep skin moisturized and avoid irritants. Consult a specialist for corticosteroid options.' },
  { name: 'Contact Dermatitis', probability: 65, severity: 'Low', recommendation: 'Identify and avoid the allergen. Use soothing creams.' },
  { name: 'Psoriasis', probability: 82, severity: 'Medium', recommendation: 'Consult a dermatologist for specialized treatment plans including UV therapy or biologics.' }
]

export default function SkinScanner({ onBack }) {
  const [image, setImage] = useState(null)
  const [status, setStatus] = useState('idle') // idle, analyzing, result
  const [analysisResult, setAnalysisResult] = useState(null)
  const fileInputRef = useRef(null)

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => setImage(e.target.result)
      reader.readAsDataURL(file)
    }
  }

  const startAnalysis = () => {
    setStatus('analyzing')
    // Simulate AI processing time
    setTimeout(() => {
      const result = MOCK_CONDITIONS[Math.floor(Math.random() * MOCK_CONDITIONS.length)]
      setAnalysisResult(result)
      setStatus('result')
    }, 3000)
  }

  const reset = () => {
    setImage(null)
    setStatus('idle')
    setAnalysisResult(null)
  }

  return (
    <div className="scanner-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass"
        style={{ borderRadius: '2rem', padding: '3rem', minHeight: '500px' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <button onClick={onBack} className="btn" style={{ background: 'transparent', padding: '0.5rem', color: 'var(--muted)' }}>
            <X size={24} />
          </button>
          <h2 style={{ fontSize: '1.75rem' }}>Skin Analysis System</h2>
          <div style={{ width: '24px' }}></div>
        </div>

        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.div 
              key="idle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center' }}
            >
              {!image ? (
                <div 
                  onClick={() => fileInputRef.current.click()}
                  style={{ 
                    border: '2px dashed var(--border)', 
                    borderRadius: '1.5rem', 
                    padding: '4rem 2rem', 
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--primary)'}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border)'}
                >
                  <div style={{ background: 'var(--primary-light)', color: 'var(--primary)', width: '64px', height: '64px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', marginBottom: '1.5rem', margin: '0 auto' }}>
                    <Upload size={32} />
                  </div>
                  <h3>Upload Skin Photo</h3>
                  <p style={{ color: 'var(--muted)', marginTop: '0.5rem' }}>Drag and drop or click to browse</p>
                  <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{ display: 'none' }} accept="image/*" />
                </div>
              ) : (
                <div>
                  <img src={image} alt="Preview" style={{ maxWidth: '100%', maxHeight: '400px', borderRadius: '1rem', marginBottom: '2rem', boxShadow: 'var(--shadow)' }} />
                  <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                    <button onClick={reset} className="btn" style={{ background: 'var(--border)' }}>Remove</button>
                    <button onClick={startAnalysis} className="btn btn-primary">Start Analysis</button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {status === 'analyzing' && (
            <motion.div 
              key="analyzing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ textAlign: 'center', padding: '4rem 0' }}
            >
              <div style={{ position: 'relative', width: '200px', height: '200px', margin: '0 auto 2rem' }}>
                <img src={image} alt="Analyzing" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%', filter: 'grayscale(50%)' }} />
                <motion.div 
                  style={{ 
                    position: 'absolute', 
                    top: 0, left: 0, right: 0, 
                    height: '2px', background: 'var(--primary)',
                    boxShadow: '0 0 15px var(--primary)'
                  }}
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <div style={{ position: 'absolute', inset: 0, border: '4px solid var(--primary)', borderRadius: '50%', borderTopColor: 'transparent' }} className="pulse"></div>
              </div>
              <h3 style={{ marginBottom: '0.5rem' }}>AI is analyzing pixels...</h3>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', color: 'var(--muted)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><CheckCircle2 size={14} color="var(--primary)" /> Scanning texture</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Loader2 size={14} className="pulse" /> Pattern matching</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Loader2 size={14} className="pulse" /> Risk assessment</span>
              </div>
            </motion.div>
          )}

          {status === 'result' && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{ textAlign: 'left' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div>
                  <img src={image} alt="Scan Result" style={{ width: '100%', borderRadius: '1rem' }} />
                </div>
                <div>
                  <div style={{ background: 'var(--primary-light)', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--primary)' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase' }}>Detected Condition</span>
                    <h3 style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{analysisResult.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <div style={{ flex: 1, height: '8px', background: 'white', borderRadius: '4px', overflow: 'hidden' }}>
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${analysisResult.probability}%` }}
                          style={{ height: '100%', background: 'var(--primary)' }}
                        />
                      </div>
                      <span style={{ fontWeight: '700', color: 'var(--primary)' }}>{analysisResult.probability}% Confidence</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="glass" style={{ padding: '1rem', borderRadius: '0.75rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Severity</span>
                      <p style={{ fontWeight: '600', color: analysisResult.severity === 'Medium' ? '#f59e0b' : '#22c55e' }}>{analysisResult.severity} Risk</p>
                    </div>
                    <div className="glass" style={{ padding: '1rem', borderRadius: '0.75rem' }}>
                      <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>Recommended Action</span>
                      <p style={{ fontWeight: '600' }}>Self Care</p>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.5rem' }}>
                    <h4 style={{ marginBottom: '0.5rem' }}>Next Steps:</h4>
                    <p style={{ color: 'var(--muted)' }}>{analysisResult.recommendation}</p>
                  </div>

                  <div style={{ marginTop: '2rem', padding: '1rem', background: '#fef2f2', borderRadius: '1rem', border: '1px solid #fee2e2', display: 'flex', gap: '0.75rem' }}>
                    <AlertCircle color="#ef4444" size={24} />
                    <p style={{ fontSize: '0.8rem', color: '#991b1b' }}>
                      This analysis is for informational purposes only. Please consult a professional dermatologist for a definitive diagnosis.
                    </p>
                  </div>

                  <button onClick={reset} className="btn" style={{ width: '100%', marginTop: '1.5rem', background: 'var(--border)' }}>
                    <RefreshCcw size={18} /> New Scan
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
