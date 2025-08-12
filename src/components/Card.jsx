import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import CardBS from "react-bootstrap/Card";

function ProjectCard() {
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
      style={{ width: '18rem', cursor: 'pointer' }}
      className={colorIndex >= 0 ? rainbowClasses[colorIndex] : ''}
      onClick={handleCardClick}
    >
      <CardBS.Img variant="top" src="holder.js/100px180" />
      <CardBS.Body>
        <CardBS.Title>Card Title</CardBS.Title>
        <CardBS.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardBS.Text>
        <Button variant="primary">Go somewhere</Button>
      </CardBS.Body>
    </CardBS>
  );
}

export default ProjectCard;