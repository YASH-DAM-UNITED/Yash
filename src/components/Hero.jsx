import {Github,Linkedin,MapPin,ArrowRight} from "lucide-react";
import DataMonolith from "./DataMonolith";import BackgroundWorld from "./BackgroundWorld";import TechBadge from "./TechBadge";
import {tech} from "../data/content";
export default function Hero(){return <section id="home" className="hero">
<BackgroundWorld/><div className="heroNoise"/>
<div className="shell heroLayout">
<div className="visualSide"><DataMonolith/></div>
<div className="heroCopy"><div className="availability"><i/> AVAILABLE FOR OPPORTUNITIES</div>
<div className="eyebrow">DATA · CODE · AUTOMATION · SYSTEMS</div>
<h1>YASHWANTH<span>.L</span></h1>
<h2>Data Programmer <b>·</b> Data Management <b>·</b> Automation & Systems</h2>
<div className="location"><MapPin/>Jeddah, Saudi Arabia</div>
<p>I build data-driven solutions, automate business operations and create applications that turn complex data into simple, usable systems.</p>
<div className="heroActions"><a className="primary" href="#projects">Explore My Work <ArrowRight/></a><a href="https://github.com/YASH-DAM-UNITED" target="_blank"><Github/>GitHub</a><a href="https://www.linkedin.com/in/yashwanth-yash-847a14185/" target="_blank"><Linkedin/>LinkedIn</a></div>
</div>
<div className="rightTech"><TechBadge item={tech[5]}/><TechBadge item={tech[2]}/><TechBadge item={tech[4]}/></div>
<div className="heroStats"><div><b data-count="3">3+</b><small>YEARS EXPERIENCE</small></div><div><b>10+</b><small>PROJECTS</small></div><div><b>20+</b><small>AUTOMATIONS</small></div><div><b>100%</b><small>PASSION FOR BUILDING</small></div></div>
</div></section>}