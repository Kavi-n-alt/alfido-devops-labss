import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Use relative `/api` by default; nginx will proxy `/api` to the backend service `web:5000`.
const API_BASE = import.meta.env.VITE_API_URL || '/api'

export default function App() {
  const [health, setHealth] = useState(null)
  const [notes, setNotes] = useState([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchHealth()
    fetchNotes()
  }, [])

  async function fetchHealth() {
    try {
      const res = await axios.get(`${API_BASE}/health`)
      setHealth(res.data)
    } catch (err) {
      setHealth({ status: 'DOWN' })
    }
  }

  async function fetchNotes() {
    setLoading(true)
    try {
      const res = await axios.get(`${API_BASE}/notes`)
      setNotes(res.data.data || [])
    } catch (err) {
      setNotes([])
    } finally {
      setLoading(false)
    }
  }

  async function addNote() {
    if (!message) return
    try {
      const res = await axios.post(`${API_BASE}/notes`, { message })
      setNotes((s) => [res.data, ...s])
      setMessage('')
    } catch (err) {
      alert('Create failed')
    }
  }

  return (
    <div className="container">
      <header>
        <h1>Task1 Dashboard</h1>
        <div className="status">Service: <strong>{health?.service || 'unknown'}</strong> — <span className={health?.status === 'UP' ? 'up' : 'down'}>{health?.status || 'UNKNOWN'}</span></div>
      </header>

      <section className="controls">
        <button onClick={fetchHealth}>Refresh Health</button>
        <button onClick={fetchNotes}>Refresh Notes</button>
      </section>

      <section className="create">
        <input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="New note message" />
        <button onClick={addNote}>Add Note</button>
      </section>

      <section className="list">
        <h2>Notes</h2>
        {loading ? <div>Loading...</div> : (
          <table>
            <thead>
              <tr><th>ID</th><th>Message</th><th>Created</th></tr>
            </thead>
            <tbody>
              {notes.map(n => (
                <tr key={n.id}><td>{n.id}</td><td>{n.message}</td><td>{new Date(n.created_at*1000).toLocaleString()}</td></tr>
              ))}
              {notes.length===0 && <tr><td colSpan={3}>No notes</td></tr>}
            </tbody>
          </table>
        )}
      </section>

      <footer>Backend: {API_BASE}</footer>
    </div>
  )
}
