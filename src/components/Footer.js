import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {

  const openlink =(e,link)=>{
    e.preventDefault()
    console.log(link)
    window.open(link, '_blank');
  }
  return (
    <div className="footer">
      <div className="socialMedia">
  
        <FacebookIcon />
        <LinkedInIcon onClick={(e)=>openlink(e,'https://www.linkedin.com/in/john-kearton-jones-ab3414128/')} />
        <GitHubIcon />
      </div>
      <p> &copy; 2023 acs-web.co.uk</p>
    </div>
  );
}

export default Footer;
