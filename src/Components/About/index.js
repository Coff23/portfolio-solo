import { Card } from "react-bootstrap";
import "./about.css";
import me from "../../assets/images/me.png";

export const About = () => {
  return (
    <>
      <Card style={{ width: '800px' }} className="about-card" >
        <Card.Body>
        <div className="image-container" >
          <Card.Title> <Card.Img src={me} className="about-image" ></Card.Img> About Me</Card.Title>
          </div>
          <Card.Text>
            Hello, I am Joshua Coffey full stack web developer and United States Army veteran where I repaired drones and their ground systems. I am a passionate and dedicated developer who enjoys making products that make other peoples day better and or easier. I would really enjoy to see a product I put out being used and be able to tell my daughter that I made that!
          </Card.Text>
          <Card.Link href="https://docs.google.com/document/d/1RnPM-7-83M5rbbHSbKLfjd_6_oFcTs_a46Zt7AbfdJs/edit?usp=sharing">Resume</Card.Link>

        </Card.Body>
      </Card>
    </>
  )
}