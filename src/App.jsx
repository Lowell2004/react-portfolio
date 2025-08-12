import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactSection from "./components/Contact";
import ProjectCard from "./components/Card";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <div>
      <main>
        <NavigationBar />
        
        <div className="project-cards-row">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </main>

      <ContactSection />
    </div>
  );
}

export default App;
