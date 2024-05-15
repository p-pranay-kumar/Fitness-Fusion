import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #555;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!"); // Placeholder for form submission logic
  };

  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" required />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" required />

        <Label htmlFor="message">Message:</Label>
        <TextArea id="message" name="message" rows="5" required />

        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default Contact;
