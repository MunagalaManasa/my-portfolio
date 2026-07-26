import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar(){

    const [menuOpen,setMenuOpen] = useState(false);


    return(

        <nav className="navbar">

            <div className="nav-container">


                <a href="#home" className="logo">
                    Manasa<span>.</span>
                </a>



                <div className={`nav-links ${menuOpen ? "show" : ""}`}>

                    <a href="#home">
                        Home
                    </a>

                    <a href="#about">
                        About
                    </a>

                    <a href="#skills">
                        Skills
                    </a>

                    <a href="#experience">
                        Experience
                    </a>

                    <a href="#projects">
                        Projects
                    </a>

                    <a href="#certifications">
                        Certifications
                    </a>

                    <a href="#contact">
                        Contact
                    </a>

                </div>




                <div 
                className="menu-icon"
                onClick={()=>setMenuOpen(!menuOpen)}
                >

                    {
                        menuOpen 
                        ?
                        <FaTimes/>
                        :
                        <FaBars/>
                    }

                </div>


            </div>


        </nav>

    );

}


export default Navbar;