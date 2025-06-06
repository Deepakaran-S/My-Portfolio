import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer.jsx'
import Herosection from './Components/Herosection.jsx'
import Project from "./Components/Project.jsx"
import About from './Components/About.jsx'
import App from './App.jsx'
import Techstack from './Components/Techstack.jsx'
import Services from './Components/Services.jsx'
import Contact from './Components/Contact.jsx'

const Body = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Herosection/>
      <Project/>
      <About/>
      <Techstack/>
      <Services/>
      <Contact/>
      <Footer/>
               
    </div>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Body/>
  </StrictMode>,
)
