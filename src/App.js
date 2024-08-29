import React from 'react';
import './App.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
function App() {
  return (
    <div className="App">
      <header className="bg-primary text-white text-center p-4">
        <h1>Shweta Chavan</h1>
        <p>Full Stack Developer</p>
      </header>
      <section id="about" className="container mt-4">
        <h2>About Me</h2>
        <p>
          I am Shweta Chavan, a Full Stack Developer with a robust background in both front-end and back-end technologies. My journey into programming began with a keen interest in technology and was further fueled by my academic background in Computer Science. After exploring various fields and finding my passion in programming, I pursued formal training through online courses and practical projects. My expertise spans ReactJS for building dynamic user interfaces, and I am also adept in technologies like Python, Django, Node.js, and PostgreSQL. I thrive on solving complex problems and continuously improving my skills. My current focus is on expanding my knowledge in React Native to develop cross-platform mobile applications, leveraging my experience in ReactJS to create seamless and interactive user experiences.
        </p>
      </section>
      
      <section id="skills" className="container mt-4">
  <h2 className="teal-text">Skills</h2>
  <div className="icon-list row">
    <div className="icon-item col-md-3 text-center">
      <i className="fab fa-react fa-3x react-icon"></i>
      <p className="icon-text">React.JS</p>
    </div>
    <div className="icon-item col-md-3 text-center">
      <i className="fab fa-html5 fa-3x html-icon"></i>
      <p className="icon-text">HTML5</p>
    </div>
    <div className="icon-item col-md-3 text-center">
      <i className="fab fa-js-square fa-3x js-icon"></i>
      <p className="icon-text">JavaScript</p>
    </div>
    <div className="icon-item col-md-3 text-center">
      <i className="fab fa-css3-alt fa-3x css-icon"></i>
      <p className="icon-text">CSS3</p>
    </div>
    <div className="icon-item col-md-3 text-center">
      <i className="fab fa-github fa-3x github-icon"></i>
      <p className="icon-text">GitHub</p>
    </div>
    <div className="icon-item col-md-3 text-center">
      <i className="fab fa-git fa-3x git-icon"></i>
      <p className="icon-text">Git</p>
    </div>
    <div className="icon-item col-md-3 text-center">
      <i className="fab fa-bootstrap fa-3x bootstrap-icon"></i>
      <p className="icon-text">Bootstrap</p>
    </div>
    <div className="icon-item col-md-3 text-center">
      <i className="fab fa-node-js fa-3x node-icon"></i>
      <p className="icon-text">Node.JS</p>
    </div>
  </div>
</section>

<section className="section team-section" id="projects">
      {/* Section heading */}
      <h1 className="section-heading wow fadeIn" data-wow-delay="0.2s">Applications</h1>

      {/* First row */}
      <div className="row">
        {/* First column */}
        <div className="col-md-12 mb-r wow fadeIn" data-wow-delay="0.4s">
          {/* Card */}
          <div className="card-overlay" style={{ backgroundImage: `url('https://mdbootstrap.com/img/Photos/Exposure/Dark/img%20(1).jpg')` }}>
            {/* Content */}
            <div className="white-text text-center">
              <div className="card-block project-tile">
                <h3 className="project-title red-text">NetFlix-Clone Website</h3>
                <p>Develop a simple app model capable of performing search operations to display movies. The primary challenge was to create a model that is highly sensitive to secure data, which was addressed using API techniques.</p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/shwetachavan2303/Netflix-Clone_website " className="btn btn-lg btn-outline-white">
                  <i className="fa fa-github left"></i>Github
                </a>
                <a target="_blank" rel="noopener noreferrer" href=" https://wondrous-panda-f4c7c6.netlify.app/" className="btn btn-lg btn-outline-white">
                  <i className="fa fa-clone left"></i> View App
                </a>
              </div>
            </div>
          </div>
          {/* /.Card */}
        </div>
        {/* /First column */}

        {/* Second column */}
        <div className="col-md-6 mb-r wow fadeIn" data-wow-delay="0.4s">
          {/* Card */}
          <div className="card-overlay" style={{ backgroundImage: `url('https://mdbootstrap.com/img/Photos/Exposure/Dark/img%20(2).jpg')` }}>
            {/* Content */}
            <div className="white-text text-center">
              <div className="card-block project-tile">
                <h3 className="project-title teal-text">Ecommerce-clone</h3>
                <p>Developed an eCommerce website using React.js for the front-end and Node.js for the back-end.
                Implemented features for product listing, cart management, user authentication, and payment processing.</p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/shwetachavan2303/E-Commerce-Clone" className="btn btn-lg btn-outline-white">
                  <i className="fa fa-github left"></i>Github
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://cheerful-platypus-9f23ef.netlify.app/" className="btn btn-lg btn-outline-white">
                  <i className="fa fa-clone left"></i> View App
                </a>
              </div>
            </div>
          </div>
          {/* /.Card */}
        </div>
        {/* /Second column */}

        {/* Third column */}
        <div className="col-md-6 mb-r wow fadeIn" data-wow-delay="0.4s">
          {/* Card */}
          <div className="card-overlay" style={{ backgroundImage: `url('https://mdbootstrap.com/img/Photos/Exposure/Dark/img%20(3).jpg')` }}>
            {/* Content */}
            <div className="white-text text-center">
              <div className="card-block project-tile">
                <h3 className="project-title cyan-text">Social Media Website</h3>
                <p>Developed and maintained a Social Networking Platform using Python and Django, enabling user registration, profile customization, and content sharing, while creating essential files (HTML, requirements.txt, views.py, models.py, urls.py) and managing the project on GitHub.</p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/shwetachavan2303/Socialmedia" className="btn btn-lg btn-outline-white">
                  <i className="fa fa-github left"></i>Github
                </a>
                
              </div>
            </div>
          </div>
          {/* /.Card */}
        </div>
        {/* /Third column */}
      </div>
      {/* /First row */}
    </section>
      <section id="contact" className="container mt-4">
        <h2>Contact Me</h2>
        <div className="contact-info">
          <p>Email: <a href="mailto:chavanshweta2303@gmail.com">shweta@example.com</a></p>
          <p>LinkedIn: <a href="" target="_blank" rel="noopener noreferrer">linkedin.com/in/shweta</a></p>
        </div>
        <div className="contact-options">
  <button href="mailto:chavanshweta2303@gmail.com" className="btn btn-message bg-danger">Message Me</button>
</div>
      </section>
      <div className="home-hero__socials">
      <div className="home-hero__social">
        <a
          href="https://www.linkedin.com/in/shweta-chavan-265877202/"
          className="home-hero__social-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="home-hero__social-icon" />
        </a>
      </div>
      <div className="home-hero__social">
        <a
          href="https://github.com/shwetachavan2303"
          className="home-hero__social-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="home-hero__social-icon" />
        </a>
      </div>
      <div className="home-hero__social">
        <a
          href="https://twitter.com/chav230399"
          className="home-hero__social-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className="home-hero__social-icon" />
        </a>
      </div>

      {/* Additional Social Media Links */}
      <div className="home-hero__social">
        <a
          href="https://www.instagram.com/shweta"
          className="home-hero__social-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="home-hero__social-icon" />
        </a>
      </div>
      </div>
    </div>
  );
}

export default App;
