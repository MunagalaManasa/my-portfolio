import "./Hero.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaCode } from "react-icons/fa";
import profile from "../assets/images/profile.jpg";


function Hero(){

return(

<section className="hero" id="home">


<div className="hero-container">


{/* LEFT CONTENT */}

<motion.div

className="hero-content"

initial={{
opacity:0,
x:-50
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:0.8
}}

>


<div className="developer-badge">

<FaCode/>

Software Developer

</div>



<p className="intro">

Hello, I'm

</p>




<h1>

Manasa Munagala

</h1>




<h2>

Full Stack Developer 
<span>
&nbsp;|&nbsp;
</span>
Java Developer
<span>
&nbsp;|&nbsp;
</span>
Python Developer

</h2>




<p className="hero-description">


Aspiring <strong>Software Developer</strong> with hands-on
experience in <strong>React.js, Java, Python, Spring Boot,
MySQL</strong> and modern web technologies.


<br/><br/>


Passionate about building scalable full-stack applications,
secure REST APIs, AI-powered solutions, cloud technologies,
and user-focused digital experiences.


</p>




<div className="hero-buttons">


<a href="#projects"
className="btn btn-primary">

View Projects

</a>



<a href="/resume.pdf"
download
className="btn btn-outline">

Download Resume

</a>



</div>





<div className="social-icons">


<a href="https://github.com/MunagalaManasa"
target="_blank">

<FaGithub/>

</a>



<a href="https://www.linkedin.com/in/manasa-munagala-b6a2a8295/"
target="_blank">

<FaLinkedin/>

</a>



<a href="mailto:799manasa@gmail.com">

<FaEnvelope/>

</a>


</div>



</motion.div>





{/* IMAGE */}


<motion.div

className="hero-image"

initial={{
opacity:0,
scale:.8
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:.8
}}

>


<div className="profile-wrapper">


<div className="profile-ring">


<img

src={profile}

alt="Manasa"

/>


</div>



<div className="floating-card">

Full Stack

<br/>

<span>
React • Java • AI
</span>

</div>


</div>



</motion.div>



</div>


</section>

)

}


export default Hero;