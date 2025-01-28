import { FC } from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import "./footerApp.scss";
const FooterApp: FC = () => {
  return (
    <footer className="custom-footer d-flex">
      <Container fluid>
        <div className="footer-content justify-content-center">
          <p>
            &copy; 2025 {""}
            <a
              href="https://www.linkedin.com/in/dmontesgonzalez"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-white"
            >
              <FaLinkedin className="linkedin-icon" /> David Montes González.
            </a>{" "}
            Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterApp;
