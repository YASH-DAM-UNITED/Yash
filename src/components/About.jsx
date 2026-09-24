import SectionHead from "./SectionHead";
import {Database,Workflow,PanelsTopLeft,Lightbulb} from "lucide-react";

export default function About(){
  return <section id="about" className="section about">
    <div className="giantWord">IDENTITY</div>
    <div className="shell reveal">
      <SectionHead n="01" label="ABOUT ME"/>
      <div className="aboutGrid">
        <div className="aboutCopy">
          <div className="miniLabel">WHO I AM</div>
          <p className="aboutIntro">
            I'm <strong>Yashwanth.L</strong>, a Data Programmer and Data Management professional based in Jeddah, Saudi Arabia. I work where data, programming and operations meet — building practical tools that simplify complex workflows, improve accuracy and make everyday work faster.
          </p>
          <p className="aboutIntro">
            My work spans data automation, web applications, Google Workspace automation, Excel processing, cloud systems, APIs, AI-assisted workflows and operational reporting. I enjoy taking a manual or complicated process, understanding how it really works, and turning it into a structured digital system people can actually use.
          </p>
          <h2 className="aboutStatement">Turning Data Into <em>Real Solutions.</em></h2>
          <div className="focusGrid">
            <div><Workflow/><b>Automate</b><small>Processes</small></div>
            <div><Database/><b>Manage</b><small>Data Efficiently</small></div>
            <div><PanelsTopLeft/><b>Build</b><small>Applications</small></div>
            <div><Lightbulb/><b>Solve</b><small>Real Problems</small></div>
          </div>
        </div>
        <div className="identityMachine">
          <div className="imRing ir1"/><div className="imRing ir2"/>
          <div className="imGlass">
            <span>YASHWANTH.L</span>
            <strong>DATA<br/>AUTOMATION<br/>SYSTEMS</strong>
            <small>MCA · JEDDAH · SAUDI ARABIA</small><i>YL</i>
          </div>
          <div className="dataLine dl1"/><div className="dataLine dl2"/>
        </div>
      </div>
    </div>
  </section>
}