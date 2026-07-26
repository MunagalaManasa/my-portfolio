import "./About.css";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaRocket, FaLightbulb } from "react-icons/fa";


function About(){

    const highlights=[

        {
            icon:<FaCode/>,
            title:"Full Stack Development",
            text:"Building modern web applications using React, Java, Spring Boot, REST APIs and databases."
        },


        {
            icon:<FaLaptopCode/>,
            title:"Software Engineering",
            text:"Focused on writing clean code, scalable architecture and real-world software solutions."
        },


        {
            icon:<FaRocket/>,
            title:"Problem Solving",
            text:"Strong interest in Data Structures, Algorithms and developing efficient solutions."
        },


        {
            icon:<FaLightbulb/>,
            title:"Continuous Learning",
            text:"Exploring Artificial Intelligence, Cloud Computing and emerging technologies."
        }

    ];



    return(

        <section className="about" id="about">


            <div className="container">


                <h2 className="section-title">

                    About 
                    <span className="gradient-text">
                        {" "}Me
                    </span>

                </h2>




                <div className="about-content">



                    <motion.div

                    className="about-text"

                    initial={{
                        opacity:0,
                        x:-50
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.7
                    }}

                    viewport={{
                        once:true
                    }}

                    >


                        <h3>
                            Aspiring Software Developer
                        </h3>



                        <p>

                        I am a Computer Science Engineering student passionate
                        about software development and modern technologies.
                        I specialize in building full-stack applications using
                        React.js, Java, Spring Boot, Python, and MySQL.

                        </p>



                        <p>

                        I have hands-on experience developing responsive web
                        applications, REST APIs, database-driven systems,
                        authentication systems, and real-world projects through
                        internships and continuous learning.

                        </p>



                        <p>

                        My goal is to become a skilled software engineer by
                        solving complex problems, creating scalable solutions,
                        and exploring technologies like Artificial Intelligence,
                        Cloud Computing, and Data Analytics.

                        </p>



                    </motion.div>





                    <motion.div

                    className="about-cards"

                    initial={{
                        opacity:0,
                        x:50
                    }}

                    whileInView={{
                        opacity:1,
                        x:0
                    }}

                    transition={{
                        duration:0.7
                    }}

                    viewport={{
                        once:true
                    }}

                    >


                    {
                        highlights.map((item,index)=>(

                            <div 
                            className="about-card"
                            key={index}
                            >

                                <div className="about-icon">

                                    {item.icon}

                                </div>


                                <div>

                                    <h4>
                                        {item.title}
                                    </h4>


                                    <p>
                                        {item.text}
                                    </p>

                                </div>


                            </div>

                        ))
                    }


                    </motion.div>


                </div>


            </div>


        </section>

    );

}


export default About;