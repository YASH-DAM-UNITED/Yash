export default function ProjectVisual({type,index}){return <div className={`projectVisual ${type}`}><div className="pvGrid"/><span className="pvNumber">0{index+1}</span>
{type==="flow"&&<><i className="node n1"/><i className="node n2"/><i className="node n3"/><i className="connector"/></>}
{type==="chart"&&<div className="bars"><i/><i/><i/><i/><i/></div>}
{type==="grid"&&<div className="cells">{Array.from({length:18},(_,i)=><i key={i}/>)}</div>}
{type==="schedule"&&<div className="scheduleLines">{Array.from({length:6},(_,i)=><i key={i}/>)}</div>}
{type==="scan"&&<><div className="document">{Array.from({length:6},(_,i)=><i key={i}/>)}</div><div className="scanner"/></>}
</div>}