import {useEffect,useRef} from "react";

export default function JourneyWire(){
  const wrap=useRef(null);
  const path=useRef(null);
  const glow=useRef(null);
  const pulse=useRef(null);

  useEffect(()=>{
    let raf=0, length=0;
    const update=()=>{
      raf=0;
      if(!path.current) return;
      const max=Math.max(1,document.documentElement.scrollHeight-innerHeight);
      const progress=Math.max(0,Math.min(1,scrollY/max));
      const visible=length*progress;
      path.current.style.strokeDashoffset=String(length-visible);
      if(glow.current) glow.current.style.strokeDashoffset=String(length-visible);
      if(pulse.current){
        const p=path.current.getPointAtLength(Math.max(0,Math.min(length,visible)));
        pulse.current.setAttribute("cx",p.x);
        pulse.current.setAttribute("cy",p.y);
        pulse.current.style.opacity=progress>.01?"1":"0";
      }
    };
    const measure=()=>{
      if(!path.current) return;
      length=path.current.getTotalLength();
      [path.current,glow.current].forEach(el=>{
        if(!el)return;
        el.style.strokeDasharray=String(length);
        el.style.strokeDashoffset=String(length);
      });
      update();
    };
    const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};
    measure();
    addEventListener("scroll",onScroll,{passive:true});
    addEventListener("resize",measure,{passive:true});
    return()=>{removeEventListener("scroll",onScroll);removeEventListener("resize",measure);if(raf)cancelAnimationFrame(raf)}
  },[]);

  return <div ref={wrap} className="journeyWire" aria-hidden="true">
    <svg viewBox="0 0 1000 7000" preserveAspectRatio="none">
      <defs>
        <filter id="wireGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="9" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <radialGradient id="pulseFill">
          <stop offset="0%" stopColor="#fff"/>
          <stop offset="35%" stopColor="#fff"/>
          <stop offset="65%" stopColor="#ff8ca7"/>
          <stop offset="100%" stopColor="#ff315f" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <path className="wireShadow" d="M340 80 C180 220 210 430 410 570 S770 800 590 980 C410 1160 190 1260 310 1450 C430 1640 790 1610 760 1840 C730 2070 340 2030 280 2280 C220 2530 660 2510 720 2760 C780 3010 390 3120 430 3370 C470 3620 820 3600 730 3880 C640 4160 250 4110 290 4420 C330 4730 740 4680 700 5010 C660 5340 290 5310 350 5620 C410 5930 790 5940 680 6230 C570 6520 400 6620 500 6950"/>
      <path ref={glow} className="wireGlowPath" d="M340 80 C180 220 210 430 410 570 S770 800 590 980 C410 1160 190 1260 310 1450 C430 1640 790 1610 760 1840 C730 2070 340 2030 280 2280 C220 2530 660 2510 720 2760 C780 3010 390 3120 430 3370 C470 3620 820 3600 730 3880 C640 4160 250 4110 290 4420 C330 4730 740 4680 700 5010 C660 5340 290 5310 350 5620 C410 5930 790 5940 680 6230 C570 6520 400 6620 500 6950"/>
      <path ref={path} className="wireMain" d="M340 80 C180 220 210 430 410 570 S770 800 590 980 C410 1160 190 1260 310 1450 C430 1640 790 1610 760 1840 C730 2070 340 2030 280 2280 C220 2530 660 2510 720 2760 C780 3010 390 3120 430 3370 C470 3620 820 3600 730 3880 C640 4160 250 4110 290 4420 C330 4730 740 4680 700 5010 C660 5340 290 5310 350 5620 C410 5930 790 5940 680 6230 C570 6520 400 6620 500 6950"/>
      <circle ref={pulse} className="wirePulseHalo" r="23" fill="url(#pulseFill)"/>
      <circle className="wireNode nAbout" cx="310" cy="1450" r="7"/>
      <circle className="wireNode nSkills" cx="720" cy="2760" r="7"/>
      <circle className="wireNode nProjects" cx="430" cy="3370" r="7"/>
      <circle className="wireNode nExperience" cx="290" cy="4420" r="7"/>
      <circle className="wireNode nTerminal" cx="700" cy="5010" r="7"/>
      <circle className="wireNode nContact" cx="500" cy="6950" r="9"/>
    </svg>
  </div>
}