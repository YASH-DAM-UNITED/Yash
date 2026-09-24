import { ArrowDownRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
export default function Hero(){
 return <section id="home" className="hero shell">
   <div className="orb orb1"/><div className="orb orb2"/>
   <div className="eyebrow"><span className="pulse"/> AVAILABLE FOR THE NEXT CHALLENGE</div>
   <h1>DATA <span>PROGRAMMER</span><br/>&amp; AUTOMATION<br/><em>BUILDER.</em></h1>
   <p className="hero-copy">I turn operational complexity into clean data systems, intelligent automation and fast web experiences — built for real-world use.</p>
   <div className="hero-actions">
     <a className="primary" href="#projects">Explore my work <ArrowDownRight size={18}/></a>
     <a className="secondary" href="mailto:yash2002anitha@gmail.com"><Mail size={18}/> Contact me</a>
   </div>
   <div className="hero-meta">
     <span><MapPin size={16}/> Jeddah, Saudi Arabia</span>
     <a href="https://github.com/YASH-DAM-UNITED" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
     <a href="https://www.linkedin.com/in/yashwanth-yash-847a14185/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
   </div>
   <div className="scrollnote">SCROLL TO DISCOVER <span>↓</span></div>
 </section>
}