import {tech} from "../data/content";

export default function DataMonolith(){
  const orbitTech=[tech[0],tech[1],tech[3],tech[4],tech[5],tech[2]];
  return <div className="monolithAnchor" aria-hidden="true">
    <div className="monolithParallax">
      <div className="monolithScene">
        <div className="monoAura"/>
        <div className="monoOrbit mo1"/><div className="monoOrbit mo2"/><div className="monoOrbit mo3"/>
        <div className="monolithFloat">
          <div className="monolith">
            <div className="slab slab1"/><div className="slab slab2"/><div className="slab slab3"/>
            <div className="slab slab4"/><div className="slab slab5"/>
            <div className="energyCore"><b>YL</b><small>DATA CORE</small></div>
            <div className="dataWindow dw1"><i/><i/><i/><i/><i/></div>
            <div className="dataWindow dw2"><i/><i/><i/><i/></div>
            <div className="monoCode">01<br/>DATA<br/>AUTO<br/>SYS</div>
            <div className="energyCut ec1"/><div className="energyCut ec2"/><div className="energyCut ec3"/>
          </div>
        </div>
        <div className="monoBase"><i/><i/><i/></div>
        <div className="monoScan"/>
        {orbitTech.map((t,i)=><div className={`orbitTech ot${i} ${t[2]}`} key={t[1]}>
          <b>{t[0]}</b><span>{t[1]}</span>
        </div>)}
        <svg className="connections" viewBox="0 0 500 610" preserveAspectRatio="none">
          <path d="M80 145 Q170 210 230 280"/><path d="M410 120 Q340 190 275 275"/>
          <path d="M55 400 Q155 355 230 320"/><path d="M440 405 Q350 360 280 320"/>
        </svg>
      </div>
    </div>
  </div>
}