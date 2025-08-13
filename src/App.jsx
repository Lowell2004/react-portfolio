import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactSection from "./components/Contact";
import {
  ProjectCard,
  RecipenestImg,
  StudentCourseImg,
  TakboLipaImg,
} from "./components/Card";
import NavigationBar from "./components/Navbar";

function App() {
  return (
    <div>
      <main>
        <NavigationBar />
        <h1>John Lowell Prado</h1>
        <p>A Computer Science Student in De La Salle Lipa</p>

        <h1 className="about-me-title">About Me</h1>

        <p className="about-me-description">
          is a 21-year-old Computer Science student currently in his third year
          at De La Salle Lipa. Hailing from Calamba City, Laguna, he is
          passionate about technology and enjoys exploring the dynamic fields of
          programming and software development. Beyond academics, John finds joy
          in gaming, whether diving into competitive esports or immersive
          single-player adventures, and is an avid fan of K-Dramas, drawn to
          their rich storytelling and cultural appeal. A self-proclaimed food
          enthusiast, he believes good meals are essential to a balanced life,
          fueling both his studies and leisure time.
        </p>

        <p className="about-me-description">
          With a blend of analytical thinking and creative interests, John is
          shaping his future in tech while staying grounded in his hobbies. As
          he advances in his degree, he aims to merge his technical skills with
          his love for innovation, aspiring to contribute meaningfully to the
          tech industry while continuing to enjoy gaming, binge-watching dramas,
          and discovering new culinary favorites along the way.
        </p>

        <h1>My Projects</h1>
        <div className="project-cards-row">
          <ProjectCard
            image={RecipenestImg}
            title="Recipenest"
            description="A recipe management app for storing and sharing your favorite recipes."
          />
          <ProjectCard
            image={StudentCourseImg}
            title="Student Course Management System"
            description="A web app for managing student courses, grades, and schedules."
          />
          <ProjectCard
            image={TakboLipaImg}
            title="Takbo Lipa"
            description="A fun run event management platform for the Lipa community."
          />
        </div>
      </main>
      <ContactSection />
    </div>
  );
}

export default App;
