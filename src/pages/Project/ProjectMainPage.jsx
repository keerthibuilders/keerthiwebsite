import React, { useState } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CompleteProjects from "./Components/CompleteProjects";
import OngoingProjects from "./Components/OngoingProjects";

const ProjectMainPage = () => {
  const [key, setKey] = useState("ongoing");

  return (
    <div style={styles.container}>
      <Container className="py-5">
        
        
        <Tabs
          id="project-tabs"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-4 custom-tabs"
        >
          <Tab eventKey="ongoing" title="Ongoing Projects">
            <OngoingProjects />
          </Tab>
          <Tab eventKey="completed" title="Completed Projects">
            <CompleteProjects />
          </Tab>
        </Tabs>
      </Container>

      <style>
        {`
          .custom-tabs .nav-tabs {
            border-bottom: 2px solid #e9ecef;
            justify-content: center;
          }
          
          .custom-tabs .nav-link {
            border: none;
            color: #6c757d;
            font-weight: 500;
            padding: 12px 30px;
            margin: 0 10px;
            background: transparent;
            border-bottom: 3px solid transparent;
            transition: all 0.3s ease;
          }
          
          .custom-tabs .nav-link:hover {
            color: #1A662F;
            border-color: transparent;
            background: transparent;
          }
          
          .custom-tabs .nav-link.active {
            color: #1A662F;
            background: transparent;
            border-color: transparent;
            border-bottom: 3px solid #1A662F;
            font-weight: 600;
          }
          
          .custom-tabs .nav-link.active:hover {
            border-bottom: 3px solid #1A662F;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    paddingTop: "100px",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa",
  },
  title: {
    color: "#1A662F",
    fontWeight: "600",
    fontSize: "2.5rem",
  },
  subtitle: {
    color: "#6c757d",
    fontSize: "1.1rem",
  },
};

export default ProjectMainPage;
