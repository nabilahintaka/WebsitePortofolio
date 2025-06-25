import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";

function ProjectCards(props) {

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const purpleStyle = {
    backgroundColor: "#c770f0",
    color: "white",
    border: "none",
  };

  return (
    <>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          {/* Conditionally render the "View" button */}
          {props.hasModal && (
            <Button
              variant="primary"
              onClick={handleShow}
              style={{ ...purpleStyle, marginRight: "10px" }}
            >
              View
            </Button>
          )}
          {/* Conditionally render the GitHub button */}
          {props.hasGithub && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton style={purpleStyle}>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#c770f0", padding: 0 }}>
        <img src={props.imgPath} alt={props.title} style={{ width: '100%', height: 'auto' }} />
      </Modal.Body>
    </Modal>
  </>
  );
}
export default ProjectCards;
