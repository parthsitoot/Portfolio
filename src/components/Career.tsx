import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Development Intern</h4>
                <h5>Prompt Software Consultants Pvt Ltd</h5>
              </div>
              <h3>Dec 2024 - Jan 2025</h3>
            </div>
            <p>
              Engineered scalable backend components using Spring Boot and
              optimized database queries to improve response time. Refactored
              critical backend components in a team environment, reducing data
              processing time by 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Java Development Intern</h4>
                <h5>Octanet Services Pvt Ltd</h5>
              </div>
              <h3>Jun 2024 - Jul 2024</h3>
            </div>
            <p>
              Collaborated in an Agile team to design and deploy RESTful APIs
              using Java and Spring Boot, streamlining communication between the
              frontend and backend.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Engineering</h4>
                <h5>University of Mumbai, Mumbai</h5>
              </div>
              <h3>Aug 2023 - Present</h3>
            </div>
            <p>
              Pursuing Computer Engineering with an 8.61 GPA. Relevant coursework
              includes Java, data structures, database management, analysis of
              algorithms, and operating systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Higher Secondary School</h4>
                <h5>Maharashtra State Board</h5>
              </div>
              <h3>Jul 2021 - Apr 2023</h3>
            </div>
            <p>
              Completed higher secondary education with 81%, building a strong
              foundation for software engineering and computer science studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
