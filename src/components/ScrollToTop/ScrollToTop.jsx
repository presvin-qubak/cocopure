import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./ScrollToTop.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  const [showButton, setShowButton] = useState(false);

  /* =========================
     PAGE CHANGE → SCROLL TOP
  ========================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });

    // New page starts at top, so hide button
    setShowButton(false);
  }, [pathname]);


  /* =========================
     SHOW / HIDE SCROLL BUTTON
  ========================= */

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    // Check current position immediately
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  /* =========================
     BACK TO TOP
  ========================= */

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      {showButton && (
        <button
          type="button"
          className="scroll-top-button"
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
        >
          <span>↑</span>
        </button>
      )}
    </>
  );
}

export default ScrollToTop;