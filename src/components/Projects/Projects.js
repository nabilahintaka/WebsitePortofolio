import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import postgreSQL from "../../Assets/Projects/postgreSQL.png";
import Python from "../../Assets/Projects/Python.png";
import BigQuery from "../../Assets/Projects/BigQuery.png";
import WebScrap from "../../Assets/Projects/WebScrap.png";
import discord from "../../Assets/Projects/discord.png";
import bookshelf from "../../Assets/Projects/bookshelf.png";
import dnike from "../../Assets/Projects/dnike.png";
import games from "../../Assets/Projects/games.png";
import electricity from "../../Assets/Projects/electricity.png";
import cart from "../../Assets/Projects/cart.png";
import telkom from "../../Assets/Projects/telkom.png";
import metrotv from "../../Assets/Projects/metrotv.png";
import dreamhome from "../../Assets/Projects/dreamhome.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={electricity}
              isBlog={false}
              title="Electricity Energy Analysis Dashboard"
              description="Developing an automated data pipeline system (ETL) by combining Apache, Pandas, NeonDB, PostgreSQL and Tableau"
              ghLink="https://github.com/nabilahintaka/Electricity-Energy-Analyst"
              demoLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={games}
              isBlog={false}
              title="Video Game Sales Analysis Dashboard"
              description="Data analysis and visualization of video games sales based on genre, platform and publisher in various region, and creating a dashboard"
              ghLink="https://github.com/nabilahintaka/Video-Game-Sales-Analysis-Portofolio"
              demoLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Data Warehouse"
              description="This project is for create a data Warehouse design and sales business process for the company's analysis"
              ghLink="https://github.com/nabilahintaka/Data-Warehouse"
              demoLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="Monitoring Bot"
              description="A discord bot for monitoring. I build this bot for monitoring steam status and game which is FiveM monitoring log connection built with python"
              ghLink="https://github.com/slizea/DiscordBot"
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discord}
              isBlog={false}
              title="ToDo Bot"
              description="A simple CRUD discord bot for reminder, user can add, remove, view a todo list and built with Python"
              ghLink="https://github.com/nabilahintaka/ReminderBot"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebScrap}
              isBlog={false}
              title="Web Scraping"
              description="Data collection using Web Scraping to analyze product sales on e-commerce Tokopedia"
              ghLink="https://github.com/nabilahintaka/Web-Scraping-Portofolio"
              demoLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WebScrap}
              isBlog={false}
              title="Web Scraping"
              description="Data collection using Web Scraping to analyze skincare sales from female daily"
              ghLink="https://github.com/nabilahintaka/Web-Scraping-Portofolio2"
              demoLink=""
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={postgreSQL}
              isBlog={false}
              title="PostgreSQL - Movies Data"
              description="Movie data that has been normalized to 3NF and perform some data testing."
              ghLink="https://github.com/nabilahintaka/PostgreSQL-Portofolio"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BigQuery}
              isBlog={false}
              title="BigQuery - GoBike"
              description="San Francisco Ford GoBike Share data set from Google BigQuery"
              ghLink="https://github.com/nabilahintaka/BigQuery-Portofolio"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Python}
              isBlog={false}
              title="Python - Shopping Cart"
              description="a simple shopping cart program that allows users to add, remove, and view items in their shopping cart."
              ghLink="https://github.com/nabilahintaka/Python-Portofolio"
              demoLink=""              
            />
          </Col> 

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bookshelf}
              isBlog={false}
              title="Bookshelf Apps"
              description="Simple CRUD app for Bookshelf with JavaSript. Thiss apps can store, move and delete data using a web storage"
              ghLink="https://github.com/nabilahintaka/BookshelfApps"
              demoLink="https://bookshelf.mizea.my.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dnike}
              isBlog={false}
              title="DNike"
              description="DNike is a website store that sell a shoes, users can view products, buy and give testimonials. This is a project that i created for University assignment"
              ghLink="https://github.com/nabilahintaka/DNike"
              demoLink="https://dnike.mizea.my.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={metrotv}
              isBlog={false}
              title="Metro TV"
              description="Metro TV Attandance is for employee to submit their attandance or check attandance history."
              demoLink="https://nabilahintaka8.wixsite.com/my-site/metro-tv"
              hasModal={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={telkom}
              isBlog={false}
              title="Telkom Indonesia"
              description="Insight is Website Platform created for DSC Management or Insight teams included a several teams in Telkom Indonesia"
              demoLink="https://nabilahintaka8.wixsite.com/my-site/telkom-indonesia"
              hasModal={true}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dreamhome}
              isBlog={false}
              title="DreamHome"
              description="DreamHome is a concept Mobile Application Platform created for my Advanced In Business Application Development Final Project Exam."
              demoLink="https://nabilahintaka8.wixsite.com/my-site/copy-of-baby-take-care"
              hasModal={true}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
