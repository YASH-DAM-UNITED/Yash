import {useEffect} from "react";

export default function EnergyHandoff(){
  useEffect(()=>{
    const targets=[...document.querySelectorAll("main section")];
    if(!("IntersectionObserver" in window)){
      targets.forEach(x=>x.classList.add("energyActive"));
      return;
    }
    const io=new IntersectionObserver(entries=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add("energyActive");
          io.unobserve(entry.target);
        }
      });
    },{threshold:.18,rootMargin:"0px 0px -8% 0px"});
    targets.forEach(x=>io.observe(x));
    return()=>io.disconnect();
  },[]);
  return null;
}