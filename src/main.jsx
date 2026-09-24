
import React,{useEffect,useMemo,useRef,useState,Suspense}from"react";
import{createRoot}from"react-dom/client";
import{Canvas,useFrame}from"@react-three/fiber";
import{EffectComposer,Bloom,Noise,Vignette}from"@react-three/postprocessing";
import{motion,useScroll,useTransform}from"framer-motion";
import{ArrowDown,Mail,Linkedin,Github,Database,ScanLine,Workflow,Code2}from"lucide-react";
import*as THREE from"three";import"./style.css";

const V=new THREE.Vector3(), C=new THREE.Color();
function rand(a,b){return a+Math.random()*(b-a)}

function HumanParticles({count=11500}){
 const pts=useRef(), mat=useRef();
 const [formed,setFormed]=useState(0);
 const {positions,targets,colors}=useMemo(()=>{
  let p=new Float32Array(count*3),t=new Float32Array(count*3),c=new Float32Array(count*3);
  for(let i=0;i<count;i++){
   let x,y,z,region=Math.random();
   if(region<.23){ // head
    let u=Math.random()*Math.PI*2,v=Math.acos(rand(-1,1));
    x=.56*Math.sin(v)*Math.cos(u); y=2.65+.70*Math.cos(v); z=.52*Math.sin(v)*Math.sin(u);
    // jaw / face narrowing
    if(y<2.45)x*=.78;
   }else if(region<.30){ // hair cloud
    let a=Math.random()*Math.PI*2,r=Math.sqrt(Math.random())*.63;
    x=Math.cos(a)*r;y=3.13+Math.random()*.42-r*.18;z=Math.sin(a)*r*.7-.08;
   }else if(region<.72){ // torso
    y=rand(.95,2.15);let k=(y-.95)/1.2;let w=.45+k*.34;
    x=rand(-w,w);z=rand(-.26,.26)*(1-Math.abs(x)/w*.35);
   }else if(region<.86){ // legs
    let side=Math.random()<.5?-1:1;y=rand(-.25,1.05);x=side*.27+rand(-.16,.16);z=rand(-.17,.17);
   }else{ // arms
    let side=Math.random()<.5?-1:1;y=rand(.9,2.05);let k=(2.05-y)/1.15;x=side*(.72+k*.20)+rand(-.12,.12);z=rand(-.14,.14);
   }
   t[i*3]=x;t[i*3+1]=y;t[i*3+2]=z;
   let R=rand(5,12),A=rand(0,Math.PI*2);p[i*3]=Math.cos(A)*R;p[i*3+1]=rand(-4,6);p[i*3+2]=Math.sin(A)*R-rand(1,9);
   let col=Math.random()<.13?new THREE.Color("#68e9ff"):new THREE.Color().setHSL(rand(.55,.62),rand(.05,.25),rand(.52,.84));
   c.set([col.r,col.g,col.b],i*3);
  }return{positions:p,targets:t,colors:c}
 },[count]);
 useEffect(()=>{let st=performance.now(),dur=4800;function tick(n){let q=Math.min(1,(n-st)/dur);setFormed(1-Math.pow(1-q,3));if(q<1)requestAnimationFrame(tick)}requestAnimationFrame(tick)},[]);
 useFrame(({clock,pointer})=>{
  if(!pts.current)return;let a=pts.current.geometry.attributes.position.array,t=clock.elapsedTime;
  for(let i=0;i<count;i++){
   let j=i*3, tx=targets[j],ty=targets[j+1],tz=targets[j+2];
   let swirl=(1-formed)*.025;
   a[j]+=(tx-a[j])*(.012+formed*.035)+Math.sin(t*.7+i*.13)*swirl;
   a[j+1]+=(ty-a[j+1])*(.012+formed*.035)+Math.cos(t*.8+i*.17)*swirl;
   a[j+2]+=(tz-a[j+2])*(.012+formed*.035);
   if(formed>.92){a[j]+=Math.sin(t*1.2+i)*.00018;a[j+1]+=Math.cos(t+i*.3)*.00016}
  }pts.current.geometry.attributes.position.needsUpdate=true;
  pts.current.rotation.y=pointer.x*.10;pts.current.rotation.x=-pointer.y*.025;
 });
 return <points ref={pts} position={[-2.25,-1.1,0]}>
  <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions,3]}/><bufferAttribute attach="attributes-color" args={[colors,3]}/></bufferGeometry>
  <pointsMaterial ref={mat} size={.025} vertexColors transparent opacity={.94} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false}/>
 </points>
}
function Filaments({count=1800}){
 const ref=useRef();const arr=useMemo(()=>{let a=new Float32Array(count*3);for(let i=0;i<count;i++){let ang=Math.random()*Math.PI*2,r=rand(1.1,6);a[i*3]=Math.cos(ang)*r-2.2;a[i*3+1]=rand(-1,4);a[i*3+2]=Math.sin(ang)*r-2}return a},[count]);
 useFrame(({clock})=>{if(ref.current)ref.current.rotation.y=clock.elapsedTime*.025});
 return <points ref={ref}><bufferGeometry><bufferAttribute attach="attributes-position" args={[arr,3]}/></bufferGeometry><pointsMaterial size={.012} color="#4bc7ff" transparent opacity={.24} blending={THREE.AdditiveBlending} depthWrite={false}/></points>
}
function World(){
 return <><color attach="background" args={["#020307"]}/><fog attach="fog" args={["#020307",6,22]}/><HumanParticles/><Filaments/>
 <EffectComposer><Bloom intensity={1.8} luminanceThreshold={.08} mipmapBlur/><Noise opacity={.025}/><Vignette offset={.12} darkness={.82}/></EffectComposer></>
}
const projects=[
["DAM OPERATIONS","React · Cloudflare Workers · APIs","Multi-branch operations platform connecting staff workflows, validation, inventory and Google Sheets-backed operational data."],
["DATA AUTOMATION ENGINE","Python · Excel · Google Sheets","Multi-file processing, stock intelligence, consumption analysis, schedule reporting and repeatable operations automation."],
["DELIVERY NOTE VISION","OCR · Computer Vision · WebGPU","Document-intelligence R&D for detecting delivery-note tables and extracting SKU, product, quantity and UOM."],
["SCHEDULE INTELLIGENCE","Python · Workforce Analytics","Straight and broken-shift parsing, shift classification, overtime logic and branch workforce reporting."]
];
function Header(){return <header><a href="#hero" className="logo">YASH<span>//</span>L</a><div>DATA PROGRAMMER · JEDDAH</div><nav><a href="#systems">SYSTEMS</a><a href="#stack">STACK</a><a href="#contact">CONTACT</a></nav></header>}
function Hero(){
 return <section id="hero" className="hero"><Canvas camera={{position:[0,1.2,7.5],fov:45}} dpr={[1,1.5]}><Suspense fallback={null}><World/></Suspense></Canvas>
 <div className="noise"/><motion.div className="heroCopy" initial={{opacity:0,x:80}} animate={{opacity:1,x:0}} transition={{delay:4.3,duration:1.3}}>
 <small>YASH//CORE · HUMAN / SYSTEM INTERFACE</small><h1>YASHWANTH<span>.L</span></h1><h2>DATA PROGRAMMER<br/><em>AUTOMATION DEVELOPER</em></h2>
 <p>I turn operational complexity into working systems.</p><a href="#systems" className="enter">TRAVEL THROUGH MY WORK <ArrowDown/></a></motion.div>
 <div className="status"><i/> PARTICLE IDENTITY // ASSEMBLED</div><div className="scroll">SCROLL TO ENTER THE SYSTEM ↓</div></section>
}
function Intro(){return <section className="intro"><div className="huge">PROBLEM <b>→</b> DATA <b>→</b> LOGIC <b>→</b><br/>AUTOMATION <b>→</b> SYSTEM <b>→</b> RESULT</div><p>I build practical systems where operations, data and software meet — turning repetitive work into structured workflows people can actually use.</p></section>}
function Systems(){return <section id="systems" className="systems"><div className="eyebrow">01 // SYSTEMS IN MOTION</div><h2>Not projects.<br/><em>Operational machines.</em></h2><div className="projectRail">{projects.map((p,i)=><motion.article key={p[0]} initial={{opacity:0,y:120,rotateX:16}} whileInView={{opacity:1,y:0,rotateX:0}} viewport={{once:true,amount:.25}} transition={{duration:.8}}>
 <div className="num">0{i+1}</div><div className="orb"><span>{i==0?"◈":i==1?"⌁":i==2?"◎":"⌬"}</span></div><small>{p[1]}</small><h3>{p[0]}</h3><p>{p[2]}</p><div className="particleLine"/></motion.article>)}</div></section>}
function Architecture(){let nodes=["GOOGLE SHEETS","DATA PIPELINE","VALIDATION","CLOUDFLARE WORKERS","REST APIs","REACT APP","30+ BRANCH WORKFLOWS"];return <section className="arch"><div className="eyebrow">02 // DAM OPERATIONS ARCHITECTURE</div><h2>Watch the data <em>move.</em></h2><div className="archWorld"><div className="coreOrb">DAM<span>OPERATIONS</span><i/><b/></div>{nodes.map((n,i)=><div className={"archNode a"+i} key={n}>{n}</div>)}<svg viewBox="0 0 1200 650"><path d="M90 325 C220 80 340 90 520 310 S800 540 1110 325"/><path d="M90 325 C240 570 350 560 520 340 S820 90 1110 325"/><path d="M90 325 C330 325 380 325 600 325 S900 325 1110 325"/></svg><div className="packet p1"/><div className="packet p2"/><div className="packet p3"/></div></section>}
function Vision(){return <section className="vision"><div className="doc"><div className="paper"><b>DELIVERY NOTE</b>{[1,2,3,4,5].map(i=><span key={i}>[P0{i}8] PRODUCT ITEM — {i*2}.00 PCS</span>)}<div className="beam"/></div></div><div className="visionText"><div className="eyebrow">03 // DOCUMENT INTELLIGENCE R&D</div><h2>Pixels become<br/><em>structured data.</em></h2><div className="extract"><b>SKU</b><b>PRODUCT</b><b>QTY</b><b>UOM</b></div><p>Experimental OCR and computer-vision workflows designed around real operational delivery-note structures.</p></div></section>}
const skills=["PYTHON","REACT","JAVASCRIPT","CLOUDFLARE","REST APIs","APPS SCRIPT","OCR","COMPUTER VISION","EXCEL","GOOGLE SHEETS","GITHUB","DATA SYSTEMS"];
function Stack(){return <section id="stack" className="stack"><div className="eyebrow">04 // TECHNOLOGY UNIVERSE</div><h2>Tools orbit the <em>problem.</em></h2><div className="universe"><div className="uCore">YASH<span>//CORE</span></div>{skills.map((s,i)=>{let a=i/skills.length*Math.PI*2,r=i%2?41:31;return <motion.div whileHover={{scale:1.4}} className="skill" style={{left:`${50+Math.cos(a)*r}%`,top:`${50+Math.sin(a)*r}%`}} key={s}>{s}</motion.div>})}</div></section>}
function Finale(){return <section id="contact" className="finale"><div className="faceEcho"><div className="eye e1"/><div className="eye e2"/><div className="glasses g1"/><div className="glasses g2"/></div><div className="eyebrow">05 // RECONSTRUCTION COMPLETE</div><h2>BUILD THE NEXT<br/><em>SYSTEM WITH ME.</em></h2><p>Yashwanth.L · Data Programmer · Automation Developer · Systems Builder</p><div className="links"><a href="mailto:YOUR_EMAIL_HERE"><Mail/>EMAIL</a><a href="YOUR_LINKEDIN_URL"><Linkedin/>LINKEDIN</a><a href="YOUR_GITHUB_URL"><Github/>GITHUB</a></div><footer>YASH//OS · JEDDAH · SAUDI ARABIA · 2026</footer></section>}
function App(){return <><Header/><Hero/><Intro/><Systems/><Architecture/><Vision/><Stack/><Finale/></>}
createRoot(document.getElementById("root")).render(<App/>);
