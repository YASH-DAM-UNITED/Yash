import {useState} from "react";
export default function Nav(){const[open,setOpen]=useState(false);const links=["About","Skills","Projects","Experience","Terminal","Contact"];
return <><nav className="nav shell"><a className="brand" href="#home">YASHWANTH<span>.L</span></a>
<div className={`navLinks ${open?"open":""}`}>{links.map(x=><a onClick={()=>setOpen(false)} href={"#"+x.toLowerCase()} key={x}>{x}</a>)}</div>
<a className="navCta" href="#contact">Let's Connect <i>→</i></a><button className="menu" onClick={()=>setOpen(!open)}>☰</button></nav>
<div className="progressRail">{links.map((x,i)=><a href={"#"+x.toLowerCase()} key={x}><i>{String(i+1).padStart(2,"0")}</i><span>{x}</span></a>)}</div></>}