import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {

  const openlink =(e,link)=>{
    e.preventDefault()
    console.log(link)
    window.open(link, '_blank');
  }

  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is John</h2>
        <h3>From the UK</h3>
        <div className="prompt">
          <ul className="skill-list">
          <li>Software developer</li>
          <li>English teacher</li>
          <li>Data analyst</li>
          </ul>
          <div className="homelinks">
          <LinkedInIcon onClick={(e)=>openlink(e,'https://www.linkedin.com/in/john-kearton-jones-ab3414128/')}/>
          <EmailIcon />
          <GithubIcon onClick={(e)=>openlink(e,'https://github.com/Johnbo100')}/>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, ThreeJS, HTML, CSS, NPM, MaterialUI, Yarn
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, MySQL, Firebase
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, PHP, C, C++</span>
          </li>
          <li className="item">
            <h2>Additional</h2>
            <span>VS Code, Git, GitHub, Joomla, Wordpress, Photoshop, Gimp, DaVince Resolve, Arduino, Raspberry Pi</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
