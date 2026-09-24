import SectionHead from "./SectionHead";import TechBadge from "./TechBadge";import{tech}from"../data/content";
export default function Skills(){return <section id="skills" className="section skills"><div className="giantWord">TECHNOLOGY</div><div className="shell reveal"><SectionHead n="02" label="SKILLS UNIVERSE"/>
<div className="skillsLayout"><div><div className="miniLabel">MY TOOLKIT</div><h2>Technology With<br/><em>Purpose.</em></h2><p>I combine programming, automation, data management and cloud technologies to build practical systems rather than isolated demos.</p>
<div className="techLegend">{tech.map(x=><TechBadge key={x[1]} item={x}/>)}</div></div>
<div className="skillUniverse"><div className="uRing ur1"/><div className="uRing ur2"/><div className="uRing ur3"/><div className="uCore"><b>YL</b><small>SKILLS</small></div>{tech.map((x,i)=><div className={`planetTech pt${i} ${x[2]}`} key={x[1]}><b>{x[0]}</b><span>{x[1]}</span></div>)}</div></div>
</div></section>}