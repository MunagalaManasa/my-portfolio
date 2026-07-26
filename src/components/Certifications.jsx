import "./Certifications.css";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";


function Certifications(){


const certifications=[


{
title:"Microsoft Power BI for Beginners",

issuer:"Microsoft",

category:"Data Analytics",

details:
"Completed Power BI training covering data visualization, dashboard creation, reporting, data analysis, and business intelligence concepts.",

skills:[
"Power BI",
"Data Visualization",
"Data Analytics",
"Business Intelligence"
]

},




{
title:"Artificial Intelligence: Concepts and Techniques",

issuer:"NPTEL",

category:"Artificial Intelligence",

details:
"Completed AI certification covering artificial intelligence fundamentals, intelligent systems, problem-solving approaches, and machine learning concepts.",

skills:[
"Artificial Intelligence",
"Machine Learning Basics",
"AI Concepts",
"Problem Solving"
]

},





{
title:"Human Computer Interaction",

issuer:"NPTEL",

category:"UI/UX Design",

details:
"Studied user-centered design principles, usability concepts, interaction design, prototyping methods, and improving digital user experiences.",

skills:[
"UI/UX Design",
"HCI",
"Usability Testing",
"User Experience"
]

},





{
title:"Cybersecurity Essentials",

issuer:"NASSCOM",

category:"Cybersecurity",

details:
"Completed cybersecurity fundamentals covering security principles, threats, vulnerabilities, and safe computing practices.",

skills:[
"Cybersecurity",
"Network Security",
"Security Fundamentals"
]

},





{
title:"Cloud Computing Fundamentals",

issuer:"NASSCOM",

category:"Cloud Technology",

details:
"Completed cloud computing fundamentals including cloud models, deployment strategies, services, and modern cloud concepts.",

skills:[
"Cloud Computing",
"Cloud Services",
"Cloud Fundamentals"
]

},





{
title:"ChatGPT AI Complete Course",

issuer:"Udemy",

category:"Generative AI",

details:
"Learned practical applications of ChatGPT, AI productivity tools, prompt engineering techniques, and generative AI workflows.",

skills:[
"Generative AI",
"ChatGPT",
"Prompt Engineering",
"AI Tools"
]

},





{
title:"Complete Agile Scrum Fundamentals",

issuer:"Udemy",

category:"Project Management",

details:
"Learned Agile methodology, Scrum framework, sprint planning, teamwork practices, and software project management concepts.",

skills:[
"Agile",
"Scrum",
"Team Collaboration",
"Project Management"
]

},





{
title:"Python Programming & Automation Internship",

issuer:"BlackBuck",

category:"Internship Achievement",

details:
"Completed internship focused on Python programming, automation scripts, programming logic, and software development practices.",

skills:[
"Python",
"Automation",
"Scripting"
]

},





{
title:"Web Development Internship",

issuer:"ApexPlanet Software Pvt. Ltd.",

category:"Web Development",

details:
"Completed internship involving responsive websites, JavaScript applications, frontend projects, and practical web development implementations.",

skills:[
"HTML",
"CSS",
"JavaScript",
"Frontend Development"
]

},





{
title:"Web Development Internship",

issuer:"Codveda Technologies",

category:"Web Development",

details:
"Working on modern web development tasks involving responsive design, reusable components, frontend implementation, and industry practices.",

skills:[
"React.js",
"JavaScript",
"Responsive Design",
"Web Development"
]

}



];





return(



<section 
className="certifications"
id="certifications"
>



<div className="container">





<h2 className="section-title">


Certifications &{" "}

<span className="gradient-text">

Achievements

</span>


</h2>







<p className="certification-description">

Professional certifications and internship achievements
showcasing continuous learning in software development,
artificial intelligence, cloud computing, cybersecurity,
analytics, and emerging technologies.

</p>







<div className="certification-grid">





{

certifications.map((certificate,index)=>(



<motion.div


className="certificate-card"


key={certificate.title}



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

delay:index*.1

}}



viewport={{

once:true,

amount:.2

}}



>





<div className="certificate-icon">

<FaCertificate/>

</div>






<span className="certificate-category">

{certificate.category}

</span>






<h3>

{certificate.title}

</h3>






<h4>

{certificate.issuer}

</h4>






<p>

{certificate.details}

</p>







<div className="certificate-skills">


{

certificate.skills.map((skill,i)=>(



<motion.span


key={skill}



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

{skill}


</motion.span>



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


export default Certifications;