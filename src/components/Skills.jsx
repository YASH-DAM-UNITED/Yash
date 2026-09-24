import SectionHead from "./SectionHead";
import TechBadge from "./TechBadge";
import {tech} from "../data/content";

export default function Skills(){
  return <section id="skills" className="section skills">
    <div className="giantWord">TECHNOLOGY</div>
    <div className="shell reveal">
      <SectionHead n="02" label="TECH STACK"/>
      <div className="skillsIntro">
        <div className="miniLabel">MY TOOLKIT</div>
        <h2>Technology With <em>Purpose.</em></h2>
        <p>I use programming, AI, automation, data tools and cloud technologies together to build practical systems — from raw data and spreadsheets to complete web applications and automated workflows.</p>
      </div>
      <div className="techGalaxy">
        <div className="galaxyCore"><b>YL</b><small>TECH STACK</small></div>
        <div className="galaxyRing gr1"/><div className="galaxyRing gr2"/>
        <div className="techGrid">
          {tech.map((item,i)=><TechBadge key={item[1]} item={item} className={`techItem ti${i}`}/>)}
        </div>
      </div>
    </div>
  </section>
}