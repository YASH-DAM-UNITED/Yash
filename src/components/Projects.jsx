import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/portfolio";
export default function Projects(){
 return <section id="projects" className="section shell">
  <div className="section-head"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>PROJECTS WITH <span>IMPACT.</span></h2></div><p>Systems, automation and data workflows designed to solve practical operational problems.</p></div>
  <div className="project-grid">{projects.map((p,i)=><article className="project-card" key={p.title}>
    <div className="project-num">0{i+1}</div><div className="tag">{p.tag}</div><h3>{p.title}</h3><p>{p.text}</p>
    <div className="tech">{p.tech.map(t=><span key={t}>{t}</span>)}</div>
    <a href={p.link} target="_blank" rel="noreferrer">VIEW GITHUB <ArrowUpRight size={17}/></a>
  </article>)}</div>
 </section>
}