const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
// boot
const boot=$("#boot"),bar=$("#bootBar"),enter=$("#enterBtn"),line=$("#bootLine");let p=0;
const bt=setInterval(()=>{p+=Math.floor(Math.random()*15)+5;if(p>=100){p=100;clearInterval(bt);line.textContent="SYSTEM READY.";boot.classList.add("ready")}bar.style.width=p+"%"},100);
enter.onclick=()=>{boot.classList.add("done");sessionStorage.setItem("ylboot","1")};
if(sessionStorage.getItem("ylboot"))boot.classList.add("done");
// cursor
const cur=$(".cursor");addEventListener("mousemove",e=>{cur.style.left=e.clientX+"px";cur.style.top=e.clientY+"px"});
$$("[data-cursor],a,button").forEach(el=>{el.addEventListener("mouseenter",()=>{cur.classList.add("big");cur.querySelector("span").textContent=el.dataset.cursor||"OPEN"});el.addEventListener("mouseleave",()=>cur.classList.remove("big"))});
// particles
const cv=$("#space"),ctx=cv.getContext("2d");let pts=[];function resize(){cv.width=innerWidth;cv.height=innerHeight;pts=Array.from({length:Math.min(120,innerWidth/10)},()=>({x:Math.random()*cv.width,y:Math.random()*cv.height,z:Math.random()*2+.2,v:Math.random()*.35+.08}))}resize();addEventListener("resize",resize);
(function draw(){ctx.clearRect(0,0,cv.width,cv.height);ctx.fillStyle=document.body.classList.contains("light")?"rgba(50,90,150,.25)":"rgba(110,155,255,.45)";pts.forEach(q=>{q.y-=q.v*q.z;if(q.y<0)q.y=cv.height;ctx.beginPath();ctx.arc(q.x,q.y,q.z,0,6.28);ctx.fill()});requestAnimationFrame(draw)})();
// engine simulation
const logs=[["BR_021","Branch data received"],["SKU_P385","Stock record validated"],["SHIFT","Schedule parsed"],["API","Request processed"],["OCR","Table rows extracted"],["SYNC","Operational data synced"],["REPORT","Analysis generated"]];
function event(){let [id,msg]=logs[Math.floor(Math.random()*logs.length)],d=document.createElement("div");d.className="event";d.innerHTML=`<i>${id}</i><span>${msg}</span><b>COMPLETE</b>`;$("#eventLog").prepend(d);while($("#eventLog").children.length>5)$("#eventLog").lastChild.remove()}event();setInterval(event,1700);
// theme cinematic wipe
$("#themeBtn").onclick=e=>{let w=$("#themeWipe");w.style.left=e.clientX+"px";w.style.top=e.clientY+"px";w.style.width=w.style.height="220vmax";setTimeout(()=>{document.body.classList.toggle("light");$("#themeBtn").textContent=document.body.classList.contains("light")?"☀":"☾";localStorage.setItem("yltheme",document.body.classList.contains("light")?"light":"dark");w.style.transition="none";w.style.width=w.style.height="0";setTimeout(()=>w.style.transition="",40)},350)};
if(localStorage.getItem("yltheme")==="light"){document.body.classList.add("light");$("#themeBtn").textContent="☀"}
// flow path scroll
addEventListener("scroll",()=>{let sec=$(".pipeline"),r=sec.getBoundingClientRect(),prog=Math.max(0,Math.min(1,-r.top/(sec.offsetHeight-innerHeight||1)));$("#flowPath").style.strokeDashoffset=1600*(1-prog);let y=scrollY;$$(".hero-orbit span").forEach((n,i)=>n.style.transform=`translateY(${y*(.02+i*.006)}px)`)},{passive:true});
// command palette
const pal=$("#palette"),pin=$("#palInput");function togglePal(v){pal.classList.toggle("open",v??!pal.classList.contains("open"));if(pal.classList.contains("open"))setTimeout(()=>pin.focus(),50)}$("#cmdBtn").onclick=()=>togglePal();addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();togglePal()}if(e.key==="Escape"){togglePal(false);$("#terminal").classList.remove("open")}});
$$(".commands button").forEach(b=>b.onclick=()=>{location.hash=b.dataset.go;togglePal(false)});
pin.oninput=()=>{let q=pin.value.toLowerCase();$$(".commands button").forEach(b=>b.style.display=b.textContent.toLowerCase().includes(q)?"flex":"none")};
// recruiter
$("#recruiterBtn").onclick=()=>{document.body.classList.toggle("recruiter");$("#recruiterBtn").textContent=document.body.classList.contains("recruiter")?"EXPERIENCE MODE":"RECRUITER MODE"};
// terminal
const term=$("#terminal"),tin=$("#termInput"),tout=$("#termOut");$("#terminalBtn").onclick=()=>{term.classList.add("open");setTimeout(()=>tin.focus(),50)};$("#termClose").onclick=()=>term.classList.remove("open");
const cmds={help:"Commands: whoami, skills, projects, experience, location, contact, clear",whoami:"YASHWANTH.L — Data Programmer / Automation Developer / Systems Builder",skills:"Python • JavaScript • React • Cloudflare Workers • REST APIs • Google Apps Script • Excel • Google Sheets • OCR • Computer Vision • Git",projects:"DAM Operations • Operations Data Engine • Delivery Note Vision • Schedule Intelligence",experience:"MCA → Help Desk → Business Development → Data Programmer",location:"Jeddah, Saudi Arabia",contact:"Use the Initialize Conversation button at the end of the experience."};
tin.addEventListener("keydown",e=>{if(e.key==="Enter"){let q=tin.value.trim().toLowerCase();tout.innerHTML+=`<p><b>$ ${q}</b></p>`;if(q==="clear")tout.innerHTML="";else tout.innerHTML+=`<p>${cmds[q]||"Unknown command. Type help."}</p>`;tin.value="";tout.scrollTop=tout.scrollHeight}});
// magnetic buttons
$$(".magnetic").forEach(b=>{b.addEventListener("mousemove",e=>{let r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.08}px,${(e.clientY-r.top-r.height/2)*.12}px)`});b.addEventListener("mouseleave",()=>b.style.transform="")});
// play experience
let playing=false,timer;$("#playBtn").onclick=()=>{if(playing){playing=false;clearInterval(timer);$("#playBtn").textContent="▶ PLAY EXPERIENCE";return}playing=true;$("#playBtn").textContent="Ⅱ PAUSE EXPERIENCE";let target=document.documentElement.scrollHeight-innerHeight,duration=60000,start=scrollY,t0=performance.now();function step(now){if(!playing)return;let p=Math.min(1,(now-t0)/duration);scrollTo(0,start+(target-start)*p);if(p<1)requestAnimationFrame(step);else{playing=false;$("#playBtn").textContent="▶ PLAY EXPERIENCE"}}requestAnimationFrame(step)};
// node motion
$("#constellation").addEventListener("mousemove",e=>{let r=e.currentTarget.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;$$(".node").forEach((n,i)=>n.style.margin=`${y*(i%3+1)*5}px 0 0 ${x*(i%3+1)*7}px`)});
