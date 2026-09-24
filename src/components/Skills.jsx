import { skills } from "../data/portfolio";
export default function Skills(){
 return <section id="skills" className="section skills-section">
  <div className="shell"><div className="section-kicker">02 / CAPABILITIES</div><h2>TOOLS I USE TO <span>SHIP.</span></h2>
   <div className="skill-cloud">{skills.map((x,i)=><div className="skill" key={x}><small>{String(i+1).padStart(2,"0")}</small>{x}</div>)}</div>
  </div>
  <div className="ticker"><div>PYTHON · REACT · AUTOMATION · DATA MANAGEMENT · CLOUDFLARE · APPS SCRIPT · EXCEL · APIs · GITHUB · &nbsp; PYTHON · REACT · AUTOMATION · DATA MANAGEMENT · CLOUDFLARE · APPS SCRIPT · EXCEL · APIs · GITHUB ·</div></div>
 </section>
}