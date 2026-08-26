import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =========================
            BRAND
        ========================= */}

        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
            aria-label="CocoPure Home"
          >
            <span className="footer-logo-icon">
              🥥
            </span>

            <span className="footer-logo-text">
              Coco<span>Pure</span>
            </span>
          </Link>

          <p>
            Pure and natural coconut oil made with care,
            bringing nature's goodness to your everyday life.
          </p>

        </div>


        {/* =========================
            QUICK LINKS
        ========================= */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/benefits">
            Benefits
          </Link>

          <Link to="/products">
            Products
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </div>


        {/* =========================
            CONTACT
        ========================= */}

        <div className="footer-contact">

          <h3>Contact Us</h3>

          {/* Location */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Tamil+Nadu+India"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-link"
          >
            📍 Tamil Nadu, India
          </a>


          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="footer-contact-link"
          >
            📞 +91 98765 43210
          </a>


          {/* Email */}
          <a
            href="mailto:hello@cocopure.com"
            className="footer-contact-link"
          >
            ✉️ hello@cocopure.com
          </a>

        </div>

      </div>


      {/* =========================
          BOTTOM
      ========================= */}

      <div className="footer-bottom">

        <p>
          © 2026 CocoPure. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;