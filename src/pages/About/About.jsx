import "./About.css";
import { useNavigate } from "react-router-dom";

import aboutImage from "../../assets/about-coconut.jpeg";

function About() {
  const navigate = useNavigate();

  return (
    <section className="about">

      {/* Decorative Background */}
      <div
        className="about-glow about-glow-one"
        aria-hidden="true"
      ></div>

      <div
        className="about-glow about-glow-two"
        aria-hidden="true"
      ></div>


      {/* =========================
          ABOUT CONTAINER
      ========================= */}

      <div className="about-container">

        {/* =========================
            IMAGE SIDE
        ========================= */}

        <div className="about-image-wrapper">

          <div
            className="about-image-ring"
            aria-hidden="true"
          ></div>

          <div className="about-image">
            <img
              src={aboutImage}
              alt="Fresh coconut and coconut oil"
            />
          </div>

          {/* Premium Badge */}
          <div className="about-badge">
            <span>100%</span>
            <small>NATURAL</small>
          </div>

        </div>


        {/* =========================
            CONTENT SIDE
        ========================= */}

        <div className="about-content">

          <p className="about-tagline">
            <span aria-hidden="true"></span>
            OUR STORY
          </p>


          <h1>
            Pure Coconut Oil,
            <br />
            <span>Naturally Made.</span>
          </h1>


          <p className="about-intro">
            We believe the best products begin with the goodness
            of nature. Our coconut oil is carefully made from
            fresh, selected coconuts to preserve its natural
            taste, aroma, and quality.
          </p>


          <p className="about-description">
            From traditional extraction to careful packaging,
            every step is handled with care. Our goal is simple —
            to bring pure, natural coconut oil to your everyday life.
          </p>


          {/* =========================
              FEATURES
          ========================= */}

          <div className="about-features">

            <div className="about-feature">

              <div
                className="feature-icon"
                aria-hidden="true"
              >
                ✓
              </div>

              <div>
                <strong>100% Natural</strong>
                <span>Pure ingredients</span>
              </div>

            </div>


            <div className="about-feature">

              <div
                className="feature-icon"
                aria-hidden="true"
              >
                ✓
              </div>

              <div>
                <strong>Quality First</strong>
                <span>Carefully selected</span>
              </div>

            </div>

          </div>


          {/* =========================
              PRODUCTS BUTTON
          ========================= */}

          <button
            type="button"
            className="about-btn"
            onClick={() => navigate("/products")}
          >
            Discover Our Products

            <span aria-hidden="true">
              →
            </span>
          </button>

        </div>

      </div>

    </section>
  );
}

export default About;