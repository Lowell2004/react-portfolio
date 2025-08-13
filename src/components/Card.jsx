import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CardBS from "react-bootstrap/Card";
import RecipenestImg from "../assets/Recipenest.png";
import StudentCourseImg from "../assets/StudentCourseManagementSystem.jpg";
import TakboLipaImg from "../assets/TakboLipa.jpg";

function ProjectCard({ image, title, description }) {
  const rainbowClasses = [
    'project-card-red',
    'project-card-orange',
    'project-card-yellow',
    'project-card-green',
    'project-card-blue',
    'project-card-indigo',
    'project-card-violet',
  ];
  const [colorIndex, setColorIndex] = useState(-1);

  const handleCardClick = () => {
    setColorIndex((prev) => (prev + 1) % rainbowClasses.length);
  };

  return (
    <CardBS
      style={{ width: '18rem', cursor: 'pointer', minHeight: 420, maxHeight: 420, height: 420, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      className={colorIndex >= 0 ? rainbowClasses[colorIndex] : ''}
      onClick={handleCardClick}
    >
      <div style={{ width: '100%', height: 180, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa' }}>
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <CardBS.Body 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flexGrow: 1, 
          justifyContent: 'space-between', 
          minHeight: 180, 
          height: 180, 
          maxHeight: 180, 
          overflow: 'hidden', 
          padding: '1rem',
        }}
      >
        <CardBS.Title style={{ fontSize: '1.1rem', marginBottom: '0.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</CardBS.Title>
        <CardBS.Text style={{ flexGrow: 1, overflow: 'auto', fontSize: '0.95rem', marginBottom: '0.5rem' }}>{description}</CardBS.Text>
        <Button variant="primary" style={{ marginTop: 'auto', alignSelf: 'center', width: '80%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>View Details</Button>
      </CardBS.Body>
    </CardBS>
  );
}

export { ProjectCard, RecipenestImg, StudentCourseImg, TakboLipaImg };