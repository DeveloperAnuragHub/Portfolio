import React, { useState } from 'react'
import axios from 'axios'

export default function Contact(){
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [status, setStatus] = useState(null)

  function update(e){
    setForm(f => ({...f, [e.target.name]: e.target.value}))
  }

  async function submit(e){
    e.preventDefault()
    try{
      await axios.post('http://localhost:5000/api/contact', form)
      setStatus('Message sent')
      setForm({ name:'', email:'', message:'' })
    }catch(err){
      setStatus('Error sending message')
      console.error(err)
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>

      <form onSubmit={submit} className="contact" aria-describedby="contact-desc">

        <p id="contact-desc" className="muted">Have a project or question? Send a message.</p>

        <label htmlFor="name">Name</label>
        <input id="name" name="name" value={form.name} onChange={update} placeholder="Your name" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" value={form.email} onChange={update} placeholder="you@domain.com" type="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" value={form.message} onChange={update} placeholder="Tell me about your project" required />

        <div className="actions">
          <button type="submit">Send</button>
          {status && <span className="muted" style={{marginLeft:8}}>{status}</span>}
        </div>
      </form>

    </section>
  )

}
