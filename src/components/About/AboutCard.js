import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Hope Olaniyi </span>
            from <span className="purple"> Lagos, Nigeria.</span>
            <br />I am a software developer, I build great mobile apps and web apps for companies, individuals and organization
            <br />
            I love React Native and I use it for mobile app development, I'm also proficient in other Javascript framework like React Js, Next Js for 
            Web App, Ionic and Expo for mobile app, bootstrap, tailwind css etc
            <br />
            I am a graduate of Osun State University, Studied Physics with Electronics
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing the guitar
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Anything worth doing is worth doing well"{" "}
          </p>
          <footer className="blockquote-footer">Hope</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
