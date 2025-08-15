import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ContactSection from "./components/Contact";
import {
  ProjectCard,
  RecipenestImg,
  StudentCourseImg,
  TakboLipaImg,
} from "./components/Card";
import AppNavbar from "./components/Navbar";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import JohnLowellImg from "./assets/JohnLowell.jpg"; // <-- Import your image

const projectDetails = [
  {
    image: RecipenestImg,
    title: "Recipenest",
    description: "A recipe management app for storing and sharing your favorite recipes.",
    details: "Recipenest lets you organize, search, and share your favorite recipes. Features include ingredient management, step-by-step instructions, and community sharing.",
  },
  {
    image: StudentCourseImg,
    title: "Student Course Management System",
    description: "A web app for managing student courses, grades, and schedules.",
    details: "This system allows students and faculty to manage courses, track grades, and organize schedules efficiently. Includes notifications and analytics.",
  },
  {
    image: TakboLipaImg,
    title: "Takbo Lipa",
    description: "A fun run event management platform for the Lipa community.",
    details: "Takbo Lipa streamlines event registration, participant tracking, and result posting for community fun runs. Supports online payments and live updates.",
  },
];

function App() {
  const [modalIndex, setModalIndex] = useState(null);

  const handleShow = (idx) => setModalIndex(idx);
  const handleClose = () => setModalIndex(null);

  return (
    <div>
      <AppNavbar />
      <section id="hero" className="section hero-section">
        <div className="section-content">
          <h1 className="hero-title">John Lowell Prado</h1>
          <p>A Computer Science Student in De La Salle Lipa</p>
        </div>
      </section>
      <section id="about" className="section about-section">
        <div className="section-content about-flex">
          <div className="about-img-col">
            <img
              src={JohnLowellImg}
              alt="John Lowell"
              className="about-profile-img"
            />
          </div>
          <div className="about-text-col">
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
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-content">
          <h1>My Projects</h1>
          <div className="project-cards-row" style={{ display: "flex", gap: "2rem", justifyContent: "center", alignItems: "stretch", flexWrap: "wrap" }}>
            {projectDetails.map((proj, idx) => (
              <ProjectCard
                key={proj.title}
                image={proj.image}
                title={proj.title}
                description={proj.description}
                onViewDetails={() => handleShow(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-content">
          <ContactSection />
        </div>
      </section>

      <Modal show={modalIndex !== null} onHide={handleClose} centered>
        {modalIndex !== null && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{projectDetails[modalIndex].title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src={projectDetails[modalIndex].image}
                alt={projectDetails[modalIndex].title}
                style={{ width: "100%", borderRadius: "8px", marginBottom: "1rem" }}
              />
              <p>{projectDetails[modalIndex].details}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default App;
