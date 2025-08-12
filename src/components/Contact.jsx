import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const ContactSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="container py-5">
      <Row className="justify-content-center">   
        <Col xs={12} md={8}>
          <h1>Contact Me!</h1>
          <Form id="contactForm" onSubmit={handleSubmit}>
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
                required 
              />
            </Form.Group>
            
            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};

export default ContactSection;