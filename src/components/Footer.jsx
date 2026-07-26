import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";


function Footer(){


return(


<footer className="footer">





<div className="footer-container">







<div className="footer-brand">



<h2>

Manasa<span>.</span>

</h2>




<p>

Software Developer passionate about building
full-stack applications, scalable backend systems,
modern web interfaces, and exploring AI & cloud
technologies.

</p>





</div>








<div className="footer-links">


<h3>

Quick Links

</h3>



<a href="#home">

Home

</a>


<a href="#about">

About

</a>


<a href="#skills">

Skills

</a>


<a href="#projects">

Projects

</a>


<a href="#contact">

Contact

</a>



</div>









<div className="footer-connect">



<h3>

Connect

</h3>




<p>

Let's collaborate and build something impactful.

</p>






<div className="footer-socials">





<a

href="https://github.com/MunagalaManasa"

target="_blank"

rel="noreferrer"

aria-label="GitHub"

>

<FaGithub/>

</a>







<a

href="https://www.linkedin.com/in/manasa-munagala-b6a2a8295/"

target="_blank"

rel="noreferrer"

aria-label="LinkedIn"

>

<FaLinkedin/>

</a>







<a

href="mailto:799manasa@gmail.com"

aria-label="Email"

>

<FaEnvelope/>

</a>






</div>






</div>







</div>









<div className="footer-bottom">



<p>

© {new Date().getFullYear()} Manasa Munagala.
Built with React.js & modern web technologies.

</p>







<a

href="#home"

className="back-top"

aria-label="Back to top"

>

<FaArrowUp/>

</a>







</div>








</footer>



);


}


export default Footer;