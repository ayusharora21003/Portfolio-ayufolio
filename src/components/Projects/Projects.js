import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Chat Application"
              description=" • Developed a Real-Time Chat Website with MERN Stack, Socket.io, Redux Toolkit, Tailwind CSS.
              • Create and invite others to both public chat rooms and private groups.
              • Receive notifications for new messages, express with emojis, update profile details, and easily search for messages and rooms."
              ghLink="https://github.com/ayusharora21003/Chat-Application"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="E-commerce"
              description=" • Developed a responsive e-commerce website utilizing HTML, CSS, JavaScript, React.js, Node.js, Express.js, and MongoDB.
 • Buyers can effortlessly register, browse the marketplace, and interact with products across various categories.
 • Administrators have full control to manage marketplace items and customer accounts efficiently"
              ghLink="https://github.com/ayusharora21003/E-commerce-Website"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Travel Plannar"
              description="• A responsive travel planner website using HTML5, CSS3, Node.js, Express.js, and MongoDB.
              • Implemented user authentication with JWT (JSON Web Tokens) for secure login and logout functionality.
              • Designed and implemented a search functionality to enable users to find travel options efficiently.
              • Ensured the website is responsive, providing a seamless experience across various devices and screen sizes"
              ghLink="https://github.com/ayusharora21003/travel_planner"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ToDoList"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/ayusharora21003/ToDoList"
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
