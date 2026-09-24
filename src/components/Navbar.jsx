import { Github } from "lucide-react";
export default function Navbar(){
  return <nav className="nav shell">
    <a className="brand" href="#home"><span>Y</span> YASHWANTH.L</a>
    <div className="navlinks">
      <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a>
    </div>
    <a className="icon-btn" href="https://github.com/YASH-DAM-UNITED" target="_blank" rel="noreferrer"><Github size={18}/></a>
  </nav>
}