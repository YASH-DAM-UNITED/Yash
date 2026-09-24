import React,{useRef} from 'react';
import {createRoot} from 'react-dom/client';
import {Canvas,useFrame} from '@react-three/fiber';
import {Float,Stars} from '@react-three/drei';
import * as THREE from 'three';
import './style.css';

function Core(){
 const group=useRef(), shell=useRef(), pts=useRef();
 const geo=React.useMemo(()=>new THREE.IcosahedronGeometry(1.65,5),[]);
 const pgeo=React.useMemo(()=>{
   const n=2400,a=new Float32Array(n*3);
   for(let i=0;i<n;i++){const r=1.75+Math.random()*1.8,th=Math.random()*Math.PI*2,ph=Math.acos(2*Math.random()-1);a[i*3]=r*Math.sin(ph)*Math.cos(th);a[i*3+1]=r*Math.cos(ph);a[i*3+2]=r*Math.sin(ph)*Math.sin(th)}
   const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.BufferAttribute(a,3));return g;
 },[]);
 useFrame((s,d)=>{const x=s.pointer.x,y=s.pointer.y; group.current.rotation.y=THREE.MathUtils.lerp(group.current.rotation.y,x*.5,.04);group.current.rotation.x=THREE.MathUtils.lerp(group.current.rotation.x,-y*.25,.04);shell.current.rotation.y+=d*.12;pts.current.rotation.y-=d*.035;pts.current.rotation.x+=d*.012;});
 return <group ref={group}>
   <Float speed={1.8} rotationIntensity={.18} floatIntensity={.35}>
    <mesh ref={shell} geometry={geo}><meshPhysicalMaterial color="#d9b9ad" roughness={.42} metalness={.08} transmission={.08} wireframe/></mesh>
    <mesh scale={.94} geometry={geo}><meshStandardMaterial color="#6f3028" roughness={.55} metalness={.2}/></mesh>
    <mesh scale={.34}><sphereGeometry args={[1,48,48]}/><meshBasicMaterial color="#ff6a2b" toneMapped={false}/></mesh>
    <pointLight intensity={45} distance={7} color="#ff5c28"/>
   </Float>
   <points ref={pts} geometry={pgeo}><pointsMaterial color="#63312c" size={.018} transparent opacity={.58} sizeAttenuation/></points>
 </group>
}
function Scene(){return <><ambientLight intensity={1.5}/><directionalLight position={[3,4,5]} intensity={3}/><Core/><Stars radius={35} depth={15} count={500} factor={1.2} saturation={0} fade speed={.25}/></>}
function App(){return <main>
 <nav><strong>PORTFOLIO / 26</strong><span>CREATIVE DEVELOPER</span><a href="#contact">CONTACT ↗</a></nav>
 <section className="hero"><div className="copy"><p className="eyebrow">DESIGN × CODE × MOTION</p><h1>I BUILD<br/><i>digital</i> experiences.</h1><p className="lead">Interactive interfaces, data-driven products and experimental 3D experiences built for the web.</p><div className="chips"><span>WEBGL</span><span>REACT</span><span>AUTOMATION</span><span>DATA</span></div></div><div className="stage"><Canvas camera={{position:[0,0,6.2],fov:42}} dpr={[1,1.7]}><Scene/></Canvas><div className="hint">MOVE YOUR CURSOR<br/>SCROLL TO EXPLORE ↓</div></div></section>
 <section className="manifest"><p>01 / PROFILE</p><h2>Complex systems.<br/>Simple experiences.</h2><div className="grid"><p>I combine engineering, interface design and automation to turn operational problems into fast, usable digital products.</p><p>From dashboards and workflow tools to experimental interfaces, every project is designed around clarity, speed and interaction.</p></div></section>
 <section className="work"><p>02 / SELECTED WORK</p>{['OPERATIONS PLATFORM','INTELLIGENT DATA SYSTEMS','AUTOMATION ENGINE','EXPERIMENTAL WEBGL'].map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3><span>VIEW PROJECT ↗</span></article>)}</section>
 <footer id="contact"><p>03 / CONTACT</p><h2>Have an impossible<br/>idea? <i>Build it.</i></h2><a href="mailto:hello@example.com">HELLO@EXAMPLE.COM ↗</a><small>© 2026 — BUILT WITH REACT + THREE.JS</small></footer>
 </main>}
createRoot(document.getElementById('root')).render(<App/>);
