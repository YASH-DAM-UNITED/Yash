const glow=document.querySelector('.cursor-glow');addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const counter=document.querySelector('[data-count]');let counted=false;const cio=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!counted){counted=true;let n=0;const t=setInterval(()=>{n++;counter.textContent=n+'+';if(n>=30)clearInterval(t)},35)}},{threshold:.5});cio.observe(counter);
const c=document.getElementById('particles'),x=c.getContext('2d');let pts=[];function size(){c.width=innerWidth;c.height=innerHeight;pts=Array.from({length:Math.min(80,Math.floor(innerWidth/18))},()=>({x:Math.random()*c.width,y:Math.random()*c.height,r:Math.random()*1.3+.2,v:Math.random()*.22+.05}))}size();addEventListener('resize',size);function draw(){x.clearRect(0,0,c.width,c.height);x.fillStyle='rgba(120,155,255,.65)';pts.forEach(p=>{p.y-=p.v;if(p.y<0)p.y=c.height;x.beginPath();x.arc(p.x,p.y,p.r,0,Math.PI*2);x.fill()});requestAnimationFrame(draw)}draw();
document.querySelectorAll('.cap,.project').forEach(card=>card.addEventListener('mousemove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',e.clientX-r.left+'px');card.style.setProperty('--my',e.clientY-r.top+'px')}));
const themeBtn=document.getElementById('themeToggle');
const savedTheme=localStorage.getItem('yl-theme');
if(savedTheme==='light')document.body.classList.add('light');
themeBtn.addEventListener('click',()=>{document.body.classList.toggle('light');localStorage.setItem('yl-theme',document.body.classList.contains('light')?'light':'dark')});

const track=document.getElementById('carouselTrack'),dots=document.getElementById('carouselDots');
const slides=[...track.querySelectorAll('.slide')];
slides.forEach((_,i)=>{const d=document.createElement('i');if(i===0)d.classList.add('active');dots.appendChild(d)});
const dotEls=[...dots.children];
function slideWidth(){return slides[0].getBoundingClientRect().width+16}
document.querySelector('.carousel-btn.next').onclick=()=>track.scrollBy({left:slideWidth(),behavior:'smooth'});
document.querySelector('.carousel-btn.prev').onclick=()=>track.scrollBy({left:-slideWidth(),behavior:'smooth'});
track.addEventListener('scroll',()=>{const i=Math.round(track.scrollLeft/slideWidth());dotEls.forEach((d,n)=>d.classList.toggle('active',n===i))},{passive:true});
dotEls.forEach((d,i)=>d.onclick=()=>track.scrollTo({left:i*slideWidth(),behavior:'smooth'}));

let lastY=scrollY;
addEventListener('scroll',()=>{const y=scrollY;document.querySelectorAll('.orb').forEach((o,i)=>o.style.transform=`translateY(${y*(i?-.05:.08)}px)`);lastY=y},{passive:true});
