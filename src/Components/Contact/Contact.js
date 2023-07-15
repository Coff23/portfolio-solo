import { Button, Form } from "react-bootstrap"
import "./contact.css";

export const Contact = () => {
  return (
    <>
      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Button variant="success">Send</Button>{' '}
        </Form.Group>
      </Form>
    </>
  )
}