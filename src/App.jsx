import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {

  return (

    <>

      {/* Navigation Bar */}
      <Navbar />


      {/* Main Portfolio Sections */}
      <main>

        {/* Hero Section */}
        <Hero />


        {/* About Section */}
        <About />


        {/* Skills Section */}
        <Skills />


        {/* Experience Section */}
        <Experience />


        {/* Projects Section */}
        <Projects />


        {/* Certifications Section */}
        <Certifications />


        {/* Contact Section */}
        <Contact />

      </main>


      {/* Footer */}
      <Footer />

    </>

  );

}


export default App;