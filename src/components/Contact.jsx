import "./Contact.css";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
  FaArrowRight
} from "react-icons/fa";


function Contact(){


  return(


    <section 
      className="contact" 
      id="contact"
    >


      <div className="container">


        <motion.div


          className="contact-content"


          initial={{
            opacity:0,
            y:50
          }}


          whileInView={{
            opacity:1,
            y:0
          }}


          transition={{
            duration:0.8
          }}


          viewport={{
            once:true
          }}


        >



          <span className="contact-status">

            ● Open to Software Development Opportunities

          </span>





          <h2 className="section-title">

            Let's{" "}

            <span className="gradient-text">

              Connect

            </span>

          </h2>







          <p className="contact-description">


            I am actively looking for opportunities as a 
            <strong> Software Developer, Full Stack Developer, Java Developer, 
            and Python Developer.</strong>

            <br/>

            Passionate about building scalable applications,
            solving real-world problems, and collaborating on
            innovative technology solutions.


          </p>








          <div className="contact-cards">





            <motion.a


              href="mailto:799manasa@gmail.com"


              className="contact-card"


              whileHover={{
                y:-8
              }}


              aria-label="Email"

            >


              <FaEnvelope/>


              <div>

                <h3>
                  Email
                </h3>


                <p>
                  799manasa@gmail.com
                </p>

              </div>


            </motion.a>









            <motion.a


              href="https://www.linkedin.com/in/manasa-munagala-b6a2a8295/"


              target="_blank"


              rel="noreferrer"


              className="contact-card"


              whileHover={{
                y:-8
              }}


              aria-label="LinkedIn"

            >


              <FaLinkedin/>


              <div>

                <h3>
                  LinkedIn
                </h3>


                <p>
                  Professional Network
                </p>

              </div>


            </motion.a>









            <motion.a


              href="https://github.com/MunagalaManasa"


              target="_blank"


              rel="noreferrer"


              className="contact-card"


              whileHover={{
                y:-8
              }}


              aria-label="GitHub"

            >


              <FaGithub/>


              <div>

                <h3>
                  GitHub
                </h3>


                <p>
                  Projects & Source Code
                </p>


              </div>


            </motion.a>





          </div>









          <div className="contact-actions">






            <a


              href="/resume.pdf"


              target="_blank"


              rel="noreferrer"


              className="resume-btn"


            >


              <FaFileDownload/>


              Download Resume


            </a>








            <a


              href="mailto:799manasa@gmail.com"


              className="contact-cta"


            >


              Contact Me


              <FaArrowRight/>


            </a>





          </div>






        </motion.div>



      </div>


    </section>


  );


}


export default Contact;