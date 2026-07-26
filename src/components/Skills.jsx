import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaPython,
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaCode,
  FaCloud,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaLinux,
  FaChartBar
} from "react-icons/fa";


function Skills(){


const skillCategories=[


{
title:"Programming Languages",

skills:[

["Java",<FaJava/>],
["Python",<FaPython/>],
["C Programming",<FaCode/>],
["JavaScript",<FaJs/>]

]

},



{
title:"Frontend Development",

skills:[

["React.js",<FaReact/>],
["HTML5",<FaHtml5/>],
["CSS3",<FaCss3Alt/>],
["Tailwind CSS","🎨"],
["TypeScript Basics","TS"]

]

},




{
title:"Backend Development",

skills:[

["Spring Boot",<FaServer/>],
["REST APIs","🔗"],
["JWT Authentication","🔐"],
["Hibernate / JPA",<FaDatabase/>],
["Swagger API Testing",<FaLaptopCode/>]

]

},




{
title:"Database & Cloud",

skills:[

["MySQL",<FaDatabase/>],
["MongoDB",<FaDatabase/>],
["SQL","🗄️"],
["Microsoft Azure Fundamentals",<FaCloud/>]

]

},




{
title:"AI & Data Analytics",

skills:[

["Artificial Intelligence","🤖"],
["Generative AI","✨"],
["Prompt Engineering","💡"],
["Power BI",<FaChartBar/>],
["HCI & UX Design","🎨"]

]

},




{
title:"Tools & Platforms",

skills:[

["Git",<FaGitAlt/>],
["GitHub",<FaGithub/>],
["Postman","📮"],
["VS Code",<FaLaptopCode/>],
["Docker Basics",<FaDocker/>],
["Linux Basics",<FaLinux/>]

]

}


];





return(


<section className="skills" id="skills">


<div className="container">


<h2 className="section-title">

Technical

<span className="gradient-text">
{" "}Skills
</span>

</h2>




<p className="skills-description">

Experienced in full-stack development, backend engineering,
database management, cloud fundamentals, artificial intelligence,
data analytics, and modern software development practices.

</p>





<div className="category-container">


{

skillCategories.map((category,index)=>(


<motion.div

className="skill-category"

key={category.title}


initial={{
opacity:0,
y:40
}}


whileInView={{
opacity:1,
y:0
}}


transition={{
duration:0.6,
delay:index*0.12
}}


viewport={{
once:true,
amount:0.2
}}

>


<h3>
{category.title}
</h3>




<div className="skills-grid">


{

category.skills.map((skill,i)=>(


<motion.div

className="skill-card"

key={i}


initial={{
opacity:0,
scale:0.8
}}


whileInView={{
opacity:1,
scale:1
}}


transition={{
duration:0.3,
delay:i*0.05
}}


viewport={{
once:true
}}

>



<div className="skill-icon">

{skill[1]}

</div>




<p>

{skill[0]}

</p>




</motion.div>


))

}



</div>



</motion.div>


))


}



</div>


</div>


</section>


);


}


export default Skills;