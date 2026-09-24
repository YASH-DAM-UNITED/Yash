import { Code2, Database, Workflow } from "lucide-react";
export default function About(){
 return <section id="about" className="section shell">
  <div className="section-kicker">01 / ABOUT</div>
  <div className="about-grid">
   <div><h2>I BUILD SYSTEMS THAT MAKE <span>DATA WORK.</span></h2></div>
   <div className="about-copy">
    <p>I'm <b>Yashwanth.L</b>, a Data Programmer focused on data management, automation and practical software systems. My work sits where operations, data and code meet.</p>
    <p>With an MCA background and experience across technical support, business operations and programming, I approach problems from both the user and engineering sides.</p>
   </div>
  </div>
  <div className="value-grid">
   <article><Code2/><h3>BUILD</h3><p>Web applications and tools designed around real operational requirements.</p></article>
   <article><Workflow/><h3>AUTOMATE</h3><p>Remove repetitive manual work with reliable workflows and business logic.</p></article>
   <article><Database/><h3>STRUCTURE</h3><p>Turn scattered operational information into usable, validated data systems.</p></article>
  </div>
 </section>
}