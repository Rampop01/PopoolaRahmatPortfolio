import "./App.css";
import About from "./component/About";
import AboutMeCard from "./component/AboutMeCard";
import ContactForm from "./component/Contact";
import Education from "./component/Education";
import Home from "./component/Home";
import HomeContent from "./component/HomeContent";
import LeftSidebar from "./component/LeftSidebar";
import { Route, Routes } from "react-router-dom";
import MySkills from "./component/MySkills";
import Project from "./component/Project";
import Services from "./component/Services";
import Testimonial from "./component/Testimonial";

function App() {
  return (
    <div className="bg-black overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/education" element={<Education />} />
        <Route path="/homecontent" element={<HomeContent />} />
        <Route path="/skill" element={<MySkills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/service" element={<Services />} />
        <Route path="/testimonial" element={<Testimonial />} />
      </Routes>
    </div>
  );
}

export default App;
