import { experience } from "../data/portfolio";
export default function Experience(){
 return <section id="experience" className="section experience"><div className="shell">
  <div className="section-kicker">04 / EXPERIENCE</div><h2>FROM SUPPORT TO <span>SYSTEMS.</span></h2>
  <div className="timeline">{experience.map((e,i)=><article key={e.role}>
   <div className="line"><span>{i+1}</span></div><div className="period">{e.period}</div>
   <div><h3>{e.role}</h3><h4>{e.company}</h4><p>{e.text}</p></div>
  </article>)}</div>
 </div></section>
}