import "./Benefits.css";

import naturalImage from "../../assets/natural-coconut.jpeg";
import pureImage from "../../assets/pure-coconut.jpeg";
import nourishingImage from "../../assets/nourishing-oil.jpeg";
import everydayImage from "../../assets/everyday-coconut.jpeg";

function Benefits() {
  const benefits = [
    {
      id: 1,
      title: "100% Natural",
      image: naturalImage,
      description:
        "Made from fresh coconuts with a focus on natural quality and purity.",
    },
    {
      id: 2,
      title: "Pure Coconut",
      image: pureImage,
      description:
        "Carefully selected coconuts help preserve the natural goodness of the oil.",
    },
    {
      id: 3,
      title: "Rich & Nourishing",
      image: nourishingImage,
      description:
        "A versatile oil that can be part of your everyday personal care routine.",
    },
    {
      id: 4,
      title: "Everyday Use",
      image: everydayImage,
      description:
        "Suitable for cooking, hair care, skin care and many everyday uses.",
    },
  ];

  return (
    <section
      className="benefits"
      aria-labelledby="benefits-title"
    >
      {/* Background Decoration */}

      <div
        className="benefits-glow benefits-glow-one"
        aria-hidden="true"
      />

      <div
        className="benefits-glow benefits-glow-two"
        aria-hidden="true"
      />

      <div className="benefits-container">

        {/* Header */}

        <header className="benefits-header">

          <p className="benefits-tagline">
            <span aria-hidden="true" />
            WHY CHOOSE OUR OIL?
            <span aria-hidden="true" />
          </p>

          <h1 id="benefits-title">
            Natural Goodness
            <br />
            <span>In Every Drop</span>
          </h1>

          <div
            className="benefits-divider"
            aria-hidden="true"
          >
            <span />
            <b>✦</b>
            <span />
          </div>

          <p className="benefits-subtitle">
            Discover the natural qualities of pure coconut oil.
          </p>

        </header>


        {/* Benefits Grid */}

        <div className="benefits-grid">

          {benefits.map((benefit) => (
            <article
              className="benefit-card"
              key={benefit.id}
            >

              {/* Image */}

              <div className="benefit-image">

                <img
                  src={benefit.image}
                  alt={`${benefit.title} coconut oil`}
                  loading="lazy"
                />

                <div
                  className="image-gold-line"
                  aria-hidden="true"
                />

                <div
                  className="benefit-badge"
                  aria-hidden="true"
                >
                  <span>✦</span>
                </div>

              </div>


              {/* Content */}

              <div className="benefit-content">

                <h2>{benefit.title}</h2>

                <div
                  className="card-line"
                  aria-hidden="true"
                />

                <p>{benefit.description}</p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Benefits;