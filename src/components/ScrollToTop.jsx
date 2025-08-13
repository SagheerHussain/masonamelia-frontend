import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 100px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-[9999] bg-tertiary_color text-white p-3 rounded-full shadow-lg hover:bg-tertiary_color/80 transition-all duration-300 ${
          isVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <MdKeyboardDoubleArrowUp size={28} />
      </button>
    </>
  );
};

export default ScrollToTopButton;
