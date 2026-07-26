import "./Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";


function Projects() {


const projects = [


{
title:"Smart Inventory and Order Management System",

category:"Full Stack Application",

description:
"A full-stack inventory management platform designed to manage products, users, orders, and reports. Implemented secure authentication, REST APIs, database operations, and a responsive dashboard using modern backend and frontend technologies.",

technologies:[
"React.js",
"Java",
"Spring Boot",
"MySQL",
"REST APIs",
"JWT",
"Hibernate"
],


github:
"https://github.com/MunagalaManasa/smart-inventory-order-management",

demo:"#"


},




{
title:"ShopEase - E-Commerce Web Application",

category:"Frontend Project",

description:
"A responsive e-commerce web application with product listing, filtering, shopping cart functionality, and modern UI design. Focused on creating a smooth user experience with responsive layouts and interactive frontend features.",

technologies:[
"HTML5",
"CSS3",
"JavaScript",
"Responsive Design",
"UI/UX"
],


github:
"https://github.com/MunagalaManasa/ApexPlanet-Task-5-E-Commerce-Web-App",

demo:"#"


},




{
title:"ApexPlanet Web Development Projects",

category:"Internship Projects",

description:
"Developed multiple frontend applications including portfolio websites, interactive JavaScript projects, To-Do applications with local storage, and complete frontend implementations during internship training.",

technologies:[
"HTML",
"CSS",
"JavaScript",
"DOM",
"Frontend Development"
],


github:
"https://github.com/MunagalaManasa",

demo:"#"


},




{
title:"Codveda Web Development Tasks",

category:"Internship Projects",

description:
"Completed web development tasks focused on responsive interfaces, reusable components, frontend development practices, and building modern web applications using industry-relevant technologies.",

technologies:[
"React.js",
"JavaScript",
"HTML5",
"CSS3",
"Web Development"
],


github:
"https://github.com/MunagalaManasa",

demo:"#"


}



];






return(


<section 
className="projects" 
id="projects"
>



<div className="container">





<h2 className="section-title">


Featured{" "}

<span className="gradient-text">

Projects

</span>


</h2>






<p className="projects-description">

A showcase of full-stack applications, frontend projects,
and internship implementations demonstrating my skills in
software development, backend engineering, databases,
and modern web technologies.

</p>






<div className="projects-grid">



{

projects.map((project,index)=>(


<motion.div


className="project-card"


key={project.title}



initial={{

opacity:0,

y:50

}}



whileInView={{

opacity:1,

y:0

}}



transition={{

duration:.6,

delay:index*.15

}}



viewport={{

once:true,

amount:.2

}}



>



<span className="project-category">

{project.category}

</span>






<h3>

{project.title}

</h3>






<p>

{project.description}

</p>







<div className="tech-stack">


{

project.technologies.map((tech,i)=>(


<motion.span

key={tech}


initial={{

opacity:0,

scale:.8

}}



whileInView={{

opacity:1,

scale:1

}}



transition={{

delay:i*.05

}}


viewport={{

once:true

}}

>

{tech}

</motion.span>


))


}



</div>







<div className="project-links">





<a

href={project.github}

target="_blank"

rel="noreferrer"

aria-label="GitHub Repository"

>


<FaGithub/>

GitHub


</a>







<a

href={project.demo}

target="_blank"

rel="noreferrer"

aria-label="Live Demo"

>


<FaExternalLinkAlt/>

Live Demo


</a>






</div>







</motion.div>


))


}



</div>






</div>


</section>


);


}


export default Projects;