import React, { useState, useRef, useEffect } from 'react'
import { MessageSquare, Send, X, Bot, User, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am your DermAI assistant. How can I help you today?' },
    { id: 2, type: 'bot', text: 'You can ask me about skin symptoms, skincare routines, or how to use the scanner.' }
  ])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { id: Date.now(), type: 'user', text: input }
    setMessages(prev => [...prev, userMsg])
    setInput('')

    // Simulate bot response
    setTimeout(() => {
      let response = "I understand you're concerned about that. Have you tried using our scanner tool? It can provide a more detailed analysis of the area."
      
      if (input.toLowerCase().includes('acne')) {
        response = "Acne is very common. It's usually caused by oil and dead skin cells clogging follicles. I recommend washing your face twice a day with a gentle cleanser."
      } else if (input.toLowerCase().includes('itchy') || input.toLowerCase().includes('red')) {
        response = "Itching and redness could be signs of many things, from dry skin to eczema. Try to avoid scratching and use a fragrance-free moisturizer."
      } else if (input.toLowerCase().includes('doctor') || input.toLowerCase().includes('appointment')) {
        response = "If you're worried, seeing a dermatologist is always the best path. I can help you find one in your area if you'd like!"
      }

      setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', text: response }])
    }, 1000)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          position: 'fixed', 
          bottom: '2rem', 
          right: '2rem', 
          width: '64px', 
          height: '64px', 
          borderRadius: '50%', 
          background: 'var(--primary)', 
          color: 'white', 
          border: 'none', 
          boxShadow: 'var(--shadow-lg)',
          cursor: 'pointer',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? <ChevronDown size={28} /> : <MessageSquare size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="glass"
            style={{ 
              position: 'fixed', 
              bottom: '6rem', 
              right: '2rem', 
              width: '400px', 
              height: '500px', 
              borderRadius: '1.5rem', 
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{ background: 'var(--primary)', color: 'white', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ background: 'rgba(255,255,255,0.2)', padding: '0.5rem', borderRadius: '10px' }}>
                <Bot size={20} />
              </div>
              <div>
                <h4 style={{ color: 'white', fontSize: '1rem' }}>DermAI Assistant</h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <div style={{ width: '6px', height: '6px', background: '#4ade80', borderRadius: '50%' }}></div>
                  <span style={{ fontSize: '0.75rem', opacity: 0.8 }}>Always Active</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              {messages.map(msg => (
                <div 
                  key={msg.id} 
                  style={{ 
                    alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.25rem'
                  }}
                >
                  <div style={{ 
                    padding: '0.75rem 1rem', 
                    borderRadius: msg.type === 'user' ? '1rem 1rem 0 1rem' : '1rem 1rem 1rem 0',
                    background: msg.type === 'user' ? 'var(--primary)' : 'white',
                    color: msg.type === 'user' ? 'white' : 'var(--foreground)',
                    boxShadow: 'var(--shadow-sm)',
                    fontSize: '0.9rem',
                    border: msg.type === 'bot' ? '1px solid var(--border)' : 'none'
                  }}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} style={{ padding: '1rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '0.5rem' }}>
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                style={{ 
                  flex: 1, 
                  border: '1px solid var(--border)', 
                  borderRadius: '0.75rem', 
                  padding: '0.75rem 1rem',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <button 
                type="submit"
                className="btn btn-primary" 
                style={{ padding: '0.75rem', width: '45px', height: '45px', borderRadius: '0.75rem' }}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
