import "./Experience.css";
import { motion } from "framer-motion";


function Experience() {


  const experiences = [

    {
      role: "Web Development Intern",
      company: "Codveda Technologies",
      duration: "July 2026 - August 2026",
      type: "Internship",

      description:
      "Developed responsive web applications using modern frontend technologies. Worked on reusable UI components, responsive layouts, JavaScript functionality, and improved frontend development practices through real-world tasks.",

      technologies:[
        "React.js",
        "JavaScript",
        "HTML5",
        "CSS3"
      ]
    },


    {
      role:"Web Development Intern",
      company:"ApexPlanet Software Pvt. Ltd.",
      duration:"Internship Program",
      type:"Internship",

      description:
      "Created multiple frontend projects including interactive websites, JavaScript-based applications, local storage solutions, and an e-commerce platform. Improved skills in UI development, responsive design, and client-side programming.",

      technologies:[
        "HTML5",
        "CSS3",
        "JavaScript",
        "Responsive Design"
      ]
    },


    {
      role:"Python Programming & Automation Intern",
      company:"BlackBuck",
      duration:"Internship Program",
      type:"Internship",

      description:
      "Strengthened Python programming and automation skills by developing scripts, improving logical problem-solving abilities, and understanding software development workflows and automation techniques.",

      technologies:[
        "Python",
        "Automation",
        "Scripting",
        "Problem Solving"
      ]
    }

  ];



  return (

    <section 
      className="experience" 
      id="experience"
    >

      <div className="container">


        <h2 className="section-title">

          Professional{" "}

          <span className="gradient-text">
            Experience
          </span>

        </h2>



        <p className="experience-description">

          Hands-on industry experience through internship programs,
          working on web development, automation, frontend engineering,
          and practical software development projects using modern
          technologies.

        </p>



        <div className="experience-container">


          {
            experiences.map((exp,index)=>(


              <motion.div

                className="experience-card"

                key={index}


                initial={{
                  opacity:0,
                  x:index % 2 === 0 ? -70 : 70
                }}


                whileInView={{
                  opacity:1,
                  x:0
                }}


                transition={{
                  duration:0.7,
                  delay:index * 0.15
                }}


                viewport={{
                  once:true,
                  amount:0.3
                }}

              >



                <span className="experience-type">
                  {exp.type}
                </span>




                <h3>
                  {exp.role}
                </h3>




                <h4>
                  {exp.company}
                </h4>




                <span className="experience-duration">
                  {exp.duration}
                </span>




                <p>
                  {exp.description}
                </p>




                <div className="experience-tech">


                  {
                    exp.technologies.map((tech,i)=>(

                      <motion.span

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
                          delay:i * 0.08
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



              </motion.div>


            ))
          }



        </div>


      </div>


    </section>

  );

}


export default Experience;
