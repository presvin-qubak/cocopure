import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // =========================
  // HANDLE INPUT
  // =========================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================
  // HANDLE SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    // WhatsApp number
    // Country code +91, without +
    const whatsappNumber = "919876543210";

    // WhatsApp message
    const whatsappMessage = `Hello CocoPure 👋

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}`;

    // Create WhatsApp URL
    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(whatsappMessage);

    // Open WhatsApp
    window.open(whatsappURL, "_blank", "noopener,noreferrer");

    // Clear form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="contact">

      <div className="contact-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="contact-header">

          <p>📞 Get In Touch</p>

          <h1>Contact Us</h1>

          <span>
            Have a question about our coconut oil?
            We'd love to hear from you.
          </span>

        </div>


        {/* =========================
            CONTACT CONTENT
        ========================= */}

        <div className="contact-content">

          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <div className="contact-info">

            {/* LOCATION */}

            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>
                <h3>Our Location</h3>

                <p>
                  Tamil Nadu, India
                </p>
              </div>

            </div>


            {/* PHONE */}

            <div className="contact-item">

              <div className="contact-icon">
                📞
              </div>

              <div>
                <h3>Phone</h3>

                <a
                  href="tel:+919876543210"
                  className="contact-link"
                >
                  +91 98765 43210
                </a>
              </div>

            </div>


            {/* EMAIL */}

            <div className="contact-item">

              <div className="contact-icon">
                ✉️
              </div>

              <div>
                <h3>Email</h3>

                <a
                  href="mailto:hello@cocopure.com"
                  className="contact-link"
                >
                  hello@cocopure.com
                </a>
              </div>

            </div>

          </div>


          {/* =========================
              CONTACT FORM
          ========================= */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {/* NAME */}

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="name"
              required
            />


            {/* EMAIL */}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              autoComplete="email"
              required
            />


            {/* SUBJECT */}

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />


            {/* MESSAGE */}

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>


            {/* SUBMIT */}

            <button
              type="submit"
              className="contact-submit"
            >
              💬 Send Message on WhatsApp
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;