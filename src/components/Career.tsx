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
                <h4>Cyber Security Intern</h4>
                <h5>EyeSec Cybersecurity</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Performed vulnerability assessments and penetration testing on
              multiple web applications. Analyzed network traffic using tools
              like Burp Suite, Nmap and OWASP ZAP to identify security risks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Fundsroom Infotech</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed production dashboards and internal platforms using
              React.js, Node.js and PostgreSQL. Integrated APIs, optimized
              workflows and deployed scalable services using AWS EC2, S3 and
              CloudFront infrastructure.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Software Developer</h4>
                <h5>Fundsroom Infotech</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Building SaaS platforms including FundsWeb website builder,
              Eduroom education system and Funds Mailer analytics platform.
              Delivering scalable cloud applications with Node.js, AWS and
              modern full stack technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;