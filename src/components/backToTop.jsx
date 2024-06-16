import { useState, useEffect } from "react";

const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else setShow(false);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount => runs before actual code => on "re-render"
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <a
      href="#"
      className={`${
        show ? "flex" : "hidden"
      } back-to-top fixed bottom-8 right-4 md:right-8 left-auto z-[90] h-10 w-10 items-center justify-center rounded-md bg-darkblue text-gold shadow-md transition duration-300 ease-in-out hover:bg-main`}
    >
      <span className="mt-[6px] h-3 w-3 rotate-45 border-t border-l border-gold"></span>
    </a>
  );
};
export default BackToTop;
