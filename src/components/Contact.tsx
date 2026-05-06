import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p className="contact-primary">
              <a href="mailto:parth.sitoot@gmail.com" data-cursor="disable">
                parth.sitoot@gmail.com
              </a>
            </p>
            <p className="contact-primary">
              <a href="tel:+919653224017" data-cursor="disable">
                +91 9653224017
              </a>
            </p>
            <p className="contact-muted">
              <a
                href="https://www.linkedin.com/in/parthsitoot/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                linkedin.com/in/parthsitoot
              </a>
            </p>
            <p className="contact-muted">Mumbai, India</p>
          </div>
          <div className="contact-box">
            <h4>Profiles</h4>
            <a
              href="https://github.com/parthsitoot"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/parthsitoot/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://leetcode.com/u/parthsitoot/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box contact-details">
            <div className="contact-detail-group">
              <h4>Education</h4>
              <p className="contact-muted">
                B.E. in Computer Engineering
                <br />
                University of Mumbai, 2023 - Present
              </p>
              <p className="contact-muted">
                Higher Secondary School
                <br />
                Maharashtra State Board, 2021 - 2023
              </p>
            </div>
            <div className="contact-detail-group">
              <h4>Core Skills</h4>
              <p className="contact-muted">
                Java, Spring Boot, Python, JavaScript, SQL, MongoDB,
                PostgreSQL, Django
              </p>
              <p className="contact-muted">
                Certifications: Spring Boot, Java Data Structures, Python
              </p>
            </div>
          </div>
          <div className="contact-box contact-signoff">
            <h2>
              Built by <span><br></br>Parth Sitoot</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
