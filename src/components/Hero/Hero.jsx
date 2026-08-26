import "./Hero.css";
import { useNavigate } from "react-router-dom";

import coconutVideo from "../../assets/coconut.mp4";
import coconutImage from "../../assets/coconut-hero.jpeg";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      {/* =========================
          BACKGROUND VIDEO
      ========================= */}

      <video
        className="hero-video"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        poster={coconutImage}
        aria-hidden="true"
      >
        <source
          src={coconutVideo}
          type="video/mp4"
        />
      </video>


      {/* =========================
          PREMIUM OVERLAY
      ========================= */}

      <div
        className="hero-overlay"
        aria-hidden="true"
      ></div>


      {/* =========================
          DECORATIVE GLOW
      ========================= */}

      <div
        className="hero-glow"
        aria-hidden="true"
      ></div>


      {/* =========================
          HERO CONTENT
      ========================= */}

      <div className="hero-content">

        {/* Badge */}

        <div className="hero-badge">
          <span></span>
          100% Pure & Natural
        </div>


        {/* Tagline */}

        <p className="hero-tagline">
          FROM NATURE TO YOUR HOME
        </p>


        {/* Main Heading */}

        <h1>
          Pure Nature.
          <br />
          <span>Pure Coconut Oil.</span>
        </h1>


        {/* Description */}

        <p className="hero-description">
          Traditionally crafted from carefully selected
          coconuts to bring you pure goodness, natural
          freshness and authentic coconut oil.
        </p>


        {/* =========================
            ACTION BUTTONS
        ========================= */}

        <div className="hero-actions">

          <button
            type="button"
            className="hero-btn"
            onClick={() => navigate("/products")}
            aria-label="Explore our coconut oil products"
          >
            Explore Our Oil

            <span aria-hidden="true">
              →
            </span>
          </button>


          <button
            type="button"
            className="hero-secondary-btn"
            onClick={() => navigate("/about")}
            aria-label="Discover our story"
          >
            Discover Our Story
          </button>

        </div>


        {/* =========================
            TRUST FEATURES
        ========================= */}

        <div className="hero-features">

          <div className="hero-feature">
            <strong>100%</strong>
            <span>Natural</span>
          </div>


          <div
            className="feature-line"
            aria-hidden="true"
          ></div>


          <div className="hero-feature">
            <strong>Pure</strong>
            <span>Coconut</span>
          </div>


          <div
            className="feature-line"
            aria-hidden="true"
          ></div>


          <div className="hero-feature">
            <strong>Fresh</strong>
            <span>Quality</span>
          </div>

        </div>

      </div>


      {/* =========================
          HERO PRODUCT IMAGE
      ========================= */}

      <div className="hero-image">

        <div
          className="image-ring"
          aria-hidden="true"
        ></div>


        <img
          src={coconutImage}
          alt="Fresh coconut and natural coconut oil"
        />


        <div className="image-label">

          <span>PURE</span>

          <strong>COCONUT</strong>

          <small>OIL</small>

        </div>

      </div>


      {/* =========================
          SCROLL INDICATOR
      ========================= */}

      <div
        className="hero-scroll"
        aria-hidden="true"
      >
        <span>
          SCROLL TO EXPLORE
        </span>

        <div></div>
      </div>

    </section>
  );
}

export default Hero;