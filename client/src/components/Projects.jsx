import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Projects(){
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function load(){
      try{
        const res = await axios.get('http://localhost:5000/api/projects')
        setProjects(res.data)
      }catch(err){
        console.error(err)
      }finally{setLoading(false)}
    }
    load()
  },[])

  if(loading) return <p>Loading projects...</p>

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <h2 id="projects-heading">Projects</h2>
      {!projects.length ? (
        <p className="muted">No projects found. Add some in the server DB.</p>
      ) : (
        <div className="grid">
          {projects.map(p => (
            <article key={p._id} className="card" aria-labelledby={`proj-${p._id}`}>
              <h3 id={`proj-${p._id}`}>{p.title}</h3>
              <p>{p.description}</p>
              {p.tech?.length ? <p className="meta"><strong>Tech:</strong> {p.tech.join(', ')}</p> : null}
              <div className="links">
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Repo</a>}
                {p.live && <a href={p.live} target="_blank" rel="noreferrer">Live</a>}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
