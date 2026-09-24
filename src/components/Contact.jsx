import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
export default function Contact(){
 return <section id="contact" className="contact shell">
   <div className="section-kicker">05 / LET'S CONNECT</div>
   <h2>HAVE A PROBLEM<br/>WORTH <span>BUILDING?</span></h2>
   <p>I'm interested in data programming, automation, data management and software opportunities where practical engineering can create measurable impact.</p>
   <a className="mail" href="mailto:yash2002anitha@gmail.com">yash2002anitha@gmail.com <ArrowUpRight/></a>
   <div className="socials">
    <a href="https://github.com/YASH-DAM-UNITED" target="_blank" rel="noreferrer"><Github/> GitHub</a>
    <a href="https://www.linkedin.com/in/yashwanth-yash-847a14185/" target="_blank" rel="noreferrer"><Linkedin/> LinkedIn</a>
    <a href="mailto:yash2002anitha@gmail.com"><Mail/> Email</a>
   </div>
 </section>
}