import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Html, OrbitControls, RoundedBox, Sparkles, Text, Trail } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Github, Linkedin, Mail, Moon, Sun, Cpu, Database, ScanLine, Braces, Workflow, Boxes } from "lucide-react";
import * as THREE from "three";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { id:"01", title:"DAM Operations", tag:"MULTI-BRANCH PLATFORM", desc:"React + Cloudflare Workers + Google Sheets + APIs. Operational workflows, validation, inventory and staff-facing systems.", tech:["React","Workers","REST API","Sheets"], icon:"◈" },
  { id:"02", title:"Operations Data Engine", tag:"AUTOMATION", desc:"Python and spreadsheet automation for multi-file processing, stock intelligence, reporting and repeatable operational workflows.", tech:["Python","Excel","Automation"], icon:"⌁" },
  { id:"03", title:"Schedule Intelligence", tag:"WORKFORCE ANALYTICS", desc:"Shift parsing, broken-duty logic, overtime calculation, branch workforce analysis and structured reporting.", tech:["Python","Logic","Analytics"], icon:"⌬" },
  { id:"04", title:"Delivery Note Vision", tag:"OCR / CV R&D", desc:"Experimental document intelligence for table detection, SKU/product extraction, quantities and UOM from delivery-note images.", tech:["OCR","CV","WebGPU","JS"], icon:"◎" }
];

const SKILLS = ["React","Python","JavaScript","Cloudflare","REST APIs","Google Apps Script","Excel","Google Sheets","OCR","Computer Vision","GitHub","Data Systems"];

function Avatar({ phase=0 }) {
  const group = useRef();
  const arm = useRef();
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const walking = phase < 1;
    group.current.position.y = walking ? Math.abs(Math.sin(t*5))*0.035 : Math.sin(t*1.8)*0.012;
    if (arm.current) arm.current.rotation.z = phase >= 1 ? -1.0 + Math.sin(t*1.2)*0.04 : -0.2 + Math.sin(t*5)*0.35;
  });
  return <group ref={group}>
    {/* procedural placeholder avatar — replace with personal GLB after a reference photo is supplied */}
    <mesh position={[0,2.55,0]} castShadow><sphereGeometry args={[.43,32,32]}/><meshStandardMaterial color="#b98262" roughness={.65}/></mesh>
    <mesh position={[0,2.72,-.14]} castShadow><sphereGeometry args={[.44,32,16,0,Math.PI*2,0,Math.PI/2.1]}/><meshStandardMaterial color="#10131b"/></mesh>
    {/* glasses */}
    <mesh position={[-.18,2.6,.39]}><torusGeometry args={[.14,.018,10,28]}/><meshStandardMaterial color="#10151f" metalness={.8}/></mesh>
    <mesh position={[.18,2.6,.39]}><torusGeometry args={[.14,.018,10,28]}/><meshStandardMaterial color="#10151f" metalness={.8}/></mesh>
    <mesh position={[0,2.6,.39]}><boxGeometry args={[.12,.018,.018]}/><meshStandardMaterial color="#10151f"/></mesh>
    {/* body */}
    <mesh position={[0,1.65,0]} castShadow><capsuleGeometry args={[.48,.95,8,20]}/><meshStandardMaterial color="#111827" roughness={.45} metalness={.15}/></mesh>
    <mesh position={[0,1.25,.46]}><boxGeometry args={[.5,.08,.035]}/><meshStandardMaterial color="#53d8fb" emissive="#1b7fa0" emissiveIntensity={2}/></mesh>
    {/* legs */}
    <mesh position={[-.25,.55,0]} rotation={[0,0,.03]} castShadow><capsuleGeometry args={[.17,.85,6,16]}/><meshStandardMaterial color="#090d16"/></mesh>
    <mesh position={[.25,.55,0]} rotation={[0,0,-.03]} castShadow><capsuleGeometry args={[.17,.85,6,16]}/><meshStandardMaterial color="#090d16"/></mesh>
    {/* arms */}
    <mesh position={[-.58,1.65,0]} rotation={[0,0,.18]} castShadow><capsuleGeometry args={[.14,.75,6,16]}/><meshStandardMaterial color="#111827"/></mesh>
    <group ref={arm} position={[.58,1.75,0]} rotation={[0,0,-.2]}>
      <mesh position={[.15,-.35,0]} castShadow><capsuleGeometry args={[.14,.75,6,16]}/><meshStandardMaterial color="#111827"/></mesh>
      <mesh position={[.28,-.77,0]}><sphereGeometry args={[.16,20,20]}/><meshStandardMaterial color="#b98262"/></mesh>
    </group>
  </group>
}

function IntroWorld({phase}) {
  const avatar = useRef();
  const rig = useRef();
  useEffect(()=>{
    if (!avatar.current) return;
    gsap.fromTo(avatar.current.position,{z:-13,x:-.6},{z:0,x:-1.8,duration:5.2,ease:"power2.inOut",delay:.4});
    gsap.fromTo(avatar.current.scale,{x:.62,y:.62,z:.62},{x:1,y:1,z:1,duration:5.2,ease:"power2.inOut",delay:.4});
  },[]);
  useFrame((state)=>{
    if(rig.current){
      rig.current.rotation.y = THREE.MathUtils.lerp(rig.current.rotation.y, state.pointer.x*.08, .035);
      rig.current.rotation.x = THREE.MathUtils.lerp(rig.current.rotation.x, -state.pointer.y*.03, .035);
    }
  });
  return <group ref={rig}>
    <ambientLight intensity={.45}/>
    <directionalLight position={[4,7,6]} intensity={3} color="#d9f7ff" castShadow/>
    <pointLight position={[-5,3,2]} intensity={35} color="#4f46e5"/>
    <pointLight position={[5,2,-3]} intensity={25} color="#06b6d4"/>
    <Sparkles count={90} scale={[18,8,18]} size={1.5} speed={.25} opacity={.45}/>
    <gridHelper args={[40,40,"#17315f","#0c1832"]} position={[0,-.02,-5]}/>
    <mesh rotation={[-Math.PI/2,0,0]} position={[0,-.03,0]} receiveShadow>
      <planeGeometry args={[40,40]}/><meshStandardMaterial color="#030713" metalness={.7} roughness={.32}/>
    </mesh>
    <group ref={avatar}><Avatar phase={phase}/></group>
    <Float speed={1.4} rotationIntensity={.1} floatIntensity={.3}>
      <Text position={[2.6,3.1,-1.2]} fontSize={.25} color="#65e7ff" anchorX="left">YASH//OS • LIVE</Text>
    </Float>
    <EffectComposer><Bloom luminanceThreshold={.35} intensity={1.05} mipmapBlur/><Vignette eskil={false} offset={.18} darkness={.75}/></EffectComposer>
  </group>
}

function Hero(){
  const [phase,setPhase]=useState(0);
  const [panel,setPanel]=useState(0);
  useEffect(()=>{
    const a=setTimeout(()=>setPhase(1),5600);
    const b=setTimeout(()=>setPanel(1),6100);
    return()=>{clearTimeout(a);clearTimeout(b)}
  },[]);
  return <section className="hero" id="home">
    <div className="canvas-wrap">
      <Canvas shadows camera={{position:[0,2.2,8],fov:42}} dpr={[1,1.6]}>
        <Suspense fallback={null}><IntroWorld phase={phase}/></Suspense>
      </Canvas>
    </div>
    <div className="hud top-left"><span className="dot"/> YASHWANTH.L / PORTFOLIO</div>
    <div className="hud top-right">JEDDAH • SAUDI ARABIA</div>
    <AnimatePresence>
      {panel>0 && <motion.div className="intro-panel" initial={{opacity:0,x:100,rotateY:-14}} animate={{opacity:1,x:0,rotateY:0}} transition={{duration:1.1,ease:[.2,.8,.2,1]}}>
        <div className="eyebrow">DATA PROGRAMMER · AUTOMATION DEVELOPER</div>
        <h1>YASHWANTH<span>.L</span></h1>
        <h2>I turn operational complexity into <em>working systems.</em></h2>
        <p>Data systems, workflow automation, internal tools, analytics and experimental document intelligence.</p>
        <div className="mini-grid">
          <div><b>ROLE</b><span>Data Programmer</span></div>
          <div><b>BASE</b><span>Jeddah, KSA</span></div>
          <div><b>FOCUS</b><span>Systems + Automation</span></div>
          <div><b>ACADEMIC</b><span>MCA · A+ Presentation</span></div>
        </div>
        <a className="cta3d" href="#projects">ENTER MY SYSTEMS <ArrowDown size={16}/></a>
      </motion.div>}
    </AnimatePresence>
    <div className="scroll-cue">SCROLL TO TRAVEL <span>↓</span></div>
  </section>
}

function SectionTitle({kicker,title,sub}){return <div className="section-title"><span>{kicker}</span><h2>{title}</h2><p>{sub}</p></div>}

function About(){
  return <section className="section about" id="about">
    <SectionTitle kicker="01 / PROFILE" title="I build the layer between data and action." sub="My work starts where repetitive operational work becomes too slow, too manual or too difficult to scale."/>
    <div className="depth-grid">
      {[
        ["01","SYSTEM THINKING","Problem → Data → Logic → Automation → System → Result"],
        ["02","AUTOMATION","Turning repeated spreadsheet and operational tasks into reliable workflows."],
        ["03","DATA INTELLIGENCE","Transforming raw operational records into useful decisions and reporting."],
        ["04","EXPERIMENTATION","Exploring OCR, computer vision, browser AI and new ways to capture operational data."]
      ].map((x,i)=><motion.article key={x[0]} className="glass3d" initial={{opacity:0,y:80,rotateX:12}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true,amount:.3}} transition={{delay:i*.12}}>
        <small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p><i/>
      </motion.article>)}
    </div>
  </section>
}

function ProjectRing(){
  const [active,setActive]=useState(0);
  return <div className="ring-shell">
    <div className="ring-stage">
      {PROJECTS.map((p,i)=>{
        let delta=(i-active+PROJECTS.length)%PROJECTS.length;
        if(delta>PROJECTS.length/2) delta-=PROJECTS.length;
        return <motion.div key={p.id} className={"project3d "+(i===active?"active":"")} animate={{
          x:delta*330, z:-Math.abs(delta)*180, scale:i===active?1:.78, opacity:Math.abs(delta)>1?0:.48, rotateY:delta*-22
        }} transition={{type:"spring",stiffness:100,damping:18}}>
          <div className="project-no">{p.id}</div><div className="project-icon">{p.icon}</div>
          <span>{p.tag}</span><h3>{p.title}</h3><p>{p.desc}</p>
          <div className="tags">{p.tech.map(t=><b key={t}>{t}</b>)}</div>
        </motion.div>
      })}
    </div>
    <div className="ring-controls">
      <button onClick={()=>setActive((active-1+PROJECTS.length)%PROJECTS.length)}>←</button>
      <span>{String(active+1).padStart(2,"0")} / 04</span>
      <button onClick={()=>setActive((active+1)%PROJECTS.length)}>→</button>
    </div>
  </div>
}

function Projects(){
  return <section className="section projects" id="projects">
    <SectionTitle kicker="02 / SELECTED SYSTEMS" title="Projects in orbit." sub="Move through systems I've built or explored. Each one solves a different operational problem."/>
    <ProjectRing/>
  </section>
}

function Pipeline3D(){
  const nodes=["INPUT","VALIDATE","API","LOGIC","AUTOMATE","REPORT"];
  return <div className="pipeline-scene">
    <div className="core">YASH<span>//ENGINE</span><i/></div>
    {nodes.map((n,i)=><motion.div className={"node n"+i} key={n} animate={{y:[0,-8,0],rotateX:[0,5,0]}} transition={{duration:3+i*.2,repeat:Infinity,ease:"easeInOut"}}>{n}</motion.div>)}
    <svg viewBox="0 0 1000 500" preserveAspectRatio="none">
      <path d="M130 120 C350 80 380 250 500 250 S720 90 870 120"/>
      <path d="M130 390 C330 420 380 250 500 250 S720 410 870 390"/>
      <path d="M250 250 C360 250 390 250 500 250 S650 250 750 250"/>
    </svg>
  </div>
}
function Systems(){
 return <section className="section systems">
   <SectionTitle kicker="03 / SYSTEM ARCHITECTURE" title="Data should move." sub="People should make decisions. Systems should handle the repetitive movement, validation and transformation of information."/>
   <Pipeline3D/>
 </section>
}

function SkillUniverse(){
  return <section className="section skills" id="skills">
    <SectionTitle kicker="04 / TECHNOLOGY UNIVERSE" title="A stack built around solving problems." sub="Move your pointer across the constellation."/>
    <div className="skill-universe">
      <div className="skill-core"><Cpu/><b>YASH</b><span>STACK</span></div>
      {SKILLS.map((s,i)=>{
        const a=(i/SKILLS.length)*Math.PI*2;
        const r=i%2?38:29;
        return <motion.div className="skill-orb" key={s} style={{left:`${50+Math.cos(a)*r}%`,top:`${50+Math.sin(a)*r}%`}} whileHover={{scale:1.35,zIndex:5,rotateY:18}}>{s}</motion.div>
      })}
    </div>
  </section>
}

function Career(){
 const steps=[
  ["FOUNDATION","MCA","Technical foundation in computing and software."],
  ["OPERATIONS","Help Desk","Understanding users, problems and operational reality."],
  ["BUSINESS","Business Development","Learning how technology connects with business needs."],
  ["NOW","Data Programmer","Building data systems, automation and internal operational tools."],
  ["NEXT","Engineering","Growing toward data engineering, automation engineering and AI-enabled systems."]
 ];
 return <section className="section career">
   <SectionTitle kicker="05 / EVOLUTION" title="From support to systems." sub="Different roles added different layers to how I approach technology."/>
   <div className="timeline3d">{steps.map((s,i)=><motion.div className="time-card" key={s[0]} initial={{opacity:0,x:i%2?-100:100,rotateY:i%2?-15:15}} whileInView={{opacity:1,x:0,rotateY:0}} viewport={{once:true}}><small>{s[0]}</small><h3>{s[1]}</h3><p>{s[2]}</p></motion.div>)}</div>
 </section>
}

function Contact(){
 return <section className="contact" id="contact">
   <div className="contact-orb"/>
   <span>06 / CONTACT</span><h2>Build something<br/><em>useful.</em></h2>
   <p>Data Programmer · Automation Developer · Systems Builder</p>
   <div className="contact-links">
    <a href="mailto:YOUR_EMAIL_HERE"><Mail/> Email</a>
    <a href="YOUR_LINKEDIN_URL" target="_blank"><Linkedin/> LinkedIn</a>
    <a href="YOUR_GITHUB_URL" target="_blank"><Github/> GitHub</a>
   </div>
   <footer>YASHWANTH.L // JEDDAH, SAUDI ARABIA // 2026</footer>
 </section>
}

function Nav({light,setLight}){
 return <nav>
   <a href="#home" className="brand">Y<span>//</span>L</a>
   <div className="navlinks"><a href="#about">PROFILE</a><a href="#projects">SYSTEMS</a><a href="#skills">STACK</a><a href="#contact">CONTACT</a></div>
   <button className="theme" onClick={()=>setLight(!light)}>{light?<Moon/>:<Sun/>}</button>
 </nav>
}

function App(){
 const [light,setLight]=useState(false);
 useEffect(()=>{document.body.classList.toggle("light",light)},[light]);
 return <><Nav light={light} setLight={setLight}/><Hero/><About/><Projects/><Systems/><SkillUniverse/><Career/><Contact/></>
}
createRoot(document.getElementById("root")).render(<App/>);
