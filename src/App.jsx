import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactSection from "./components/Contact";
import ProjectCard from "./components/Card";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <div>
      <main>
        <NavigationBar />
        <h1>John Lowell Prado</h1>
        <p>A Computer Science Student in De La Salle Lipa</p>
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
