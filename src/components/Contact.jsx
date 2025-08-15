import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

const ContactSection = () => {
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    e.target.reset();
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <h1>Contact Me!</h1>
      <Form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="contact-name">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            name="name" 
            placeholder="Your name" 
            required 
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="contact-email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            placeholder="you@example.com" 
            required 
          />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="contact-message">
          <Form.Label>Message</Form.Label>
          <Form.Control 
            as="textarea" 
            name="message" 
            placeholder="Write your message here..." 
            rows={5} 
            style={{ resize: 'vertical' }} 
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Message Sent</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your message has been sent! Thank you for reaching out.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactSection;