import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <>
      <footer className="text-center text-lg-start bg-dark text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with me on social networks:</span>
    </div>
    {/* Left */}

    {/* Right */}
    <div>
  <Link to="" className="me-4 link-secondary">
    <FontAwesomeIcon icon={faFacebookF} />
  </Link>
  <Link to="" className="me-4 link-secondary">
    <FontAwesomeIcon icon={faTwitter} />
  </Link>
  <Link to="" className="me-4 link-secondary">
    <FontAwesomeIcon icon={faGoogle} />
  </Link>
  <Link to="" className="me-4 link-secondary">
    <FontAwesomeIcon icon={faInstagram} />
  </Link>
  <Link to="https://www.linkedin.com/in/divyam-malik-8402a821a/" className="me-4 link-secondary">
    <FontAwesomeIcon icon={faLinkedin} />
  </Link>
  <Link to="https://github.com/divyam6969" className="me-4 link-secondary">
    <FontAwesomeIcon icon={faGithub} />
  </Link>
</div>
    {/* Right */}
  </section>
  {/* Section: Social media */}

  {/* Section: Links */}
  <section>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>DishDash
          </h6>
          <p>
          DishDash is a MERN Stack-based food ordering website created by Divyam.
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Tech Stack used to make this website
          </h6>
          <p>
            <div className="text-reset">MongoDB</div>
          </p>
          <p>
            <div className="text-reset">Express</div>
          </p>
          <p>
            <div className="text-reset">React</div>
          </p>
          <p>
            <div className="text-reset">NodeJS</div>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Other Framewords/Packages used
          </h6>
          <p>
            <div to="#!" className="text-reset">Bootstrap</div>
          </p>
          <p>
            <div to="#!" className="text-reset">MaterialUI</div>
          </p>
          <p>
            <div to="#!" className="text-reset">Bcryptjs for authentication</div>
          </p>
          <p>
            <div to="#!" className="text-reset">Json web token</div>
          </p>
        </div>
        {/* Grid column */}

        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i> Divyam Malik</p>
          <p>
            <a className="fas fa-home me-3 text-secondary" href="mailto:divyammalik2003@gmail.com">divyammalik2003@gmail.com</a>
            
          </p>
          <p><a className="fas fa-home me-3 text-secondary" href="https://www.github.com/divyam6969">Github</a></p>
          <p><a className="fas fa-home me-3 text-secondary" href="https://www.linkedin.com/in/divyam-malik-8402a821a/">Linkedin</a></p>
          <p><a className="fas fa-home me-3 text-secondary" href="https://www.linkedin.com/in/divyam-malik-8402a821a/">Portfolio Website</a></p>

        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links */}

  {/* Copyright */}
  <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.025)' }}>
    © Copyright: Divyam Malik
  </div>
  {/* Copyright */}
</footer>

    </>
    )
}
