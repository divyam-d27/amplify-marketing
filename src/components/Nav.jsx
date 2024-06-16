import { Link } from "react-router-dom";

import "./navAnim.css";
import whatsapp from "/wa.svg";

const Nav = () => {
  // ============= navAnim ============
  const handleClick = () => {
    const overlay_navigation = document.querySelector(".overlay-navigation"),
      nav_item_1 = document.querySelector("#first"),
      nav_item_2 = document.querySelector("#second"),
      nav_item_3 = document.querySelector("#third"),
      nav_item_4 = document.querySelector("#fourth"),
      nav_item_5 = document.querySelector("#fifth"),
      top_bar = document.querySelector(".bar-top"),
      middle_bar = document.querySelector(".bar-middle"),
      bottom_bar = document.querySelector(".bar-bottom");

    // document.querySelector(".open-overlay").classList.toggle("chipak");

    overlay_navigation.classList.toggle("overlay-active");
    if (overlay_navigation.classList.contains("overlay-active")) {
      top_bar.classList.remove("animate-out-top-bar");
      top_bar.classList.add("animate-top-bar");
      middle_bar.classList.remove("animate-out-middle-bar");
      middle_bar.classList.add("animate-middle-bar");
      bottom_bar.classList.remove("animate-out-bottom-bar");
      bottom_bar.classList.add("animate-bottom-bar");
      overlay_navigation.classList.remove("overlay-slide-up");
      overlay_navigation.classList.add("overlay-slide-down");
      nav_item_1.classList.remove("slide-in-nav-item-reverse");
      nav_item_1.classList.add("slide-in-nav-item");
      nav_item_2.classList.remove("slide-in-nav-item-delay-1-reverse");
      nav_item_2.classList.add("slide-in-nav-item-delay-1");
      nav_item_3.classList.remove("slide-in-nav-item-delay-2-reverse");
      nav_item_3.classList.add("slide-in-nav-item-delay-2");
      nav_item_4.classList.remove("slide-in-nav-item-delay-3-reverse");
      nav_item_4.classList.add("slide-in-nav-item-delay-3");
      nav_item_5.classList.remove("slide-in-nav-item-delay-4-reverse");
      nav_item_5.classList.add("slide-in-nav-item-delay-4");
    } else {
      top_bar.classList.remove("animate-top-bar");
      top_bar.classList.add("animate-out-top-bar");
      middle_bar.classList.remove("animate-middle-bar");
      middle_bar.classList.add("animate-out-middle-bar");
      bottom_bar.classList.remove("animate-bottom-bar");
      bottom_bar.classList.add("animate-out-bottom-bar");
      overlay_navigation.classList.remove("overlay-slide-down");
      overlay_navigation.classList.add("overlay-slide-up");
      nav_item_1.classList.remove("slide-in-nav-item");
      nav_item_1.classList.add("slide-in-nav-item-reverse");
      nav_item_2.classList.remove("slide-in-nav-item-delay-1");
      nav_item_2.classList.add("slide-in-nav-item-delay-1-reverse");
      nav_item_3.classList.remove("slide-in-nav-item-delay-2");
      nav_item_3.classList.add("slide-in-nav-item-delay-2-reverse");
      nav_item_4.classList.remove("slide-in-nav-item-delay-3");
      nav_item_4.classList.add("slide-in-nav-item-delay-3-reverse");
      nav_item_5.classList.remove("slide-in-nav-item-delay-4");
      nav_item_5.classList.add("slide-in-nav-item-delay-4-reverse");
    }
  };

  return (
    <>
      {/* full page nav */}
      <div className="overlay-navigation">
        <nav role="navigation">
          <ul>
            <li id="first">
              <Link to="/" onClick={handleClick} data-content="The beginning">
                Home
              </Link>
            </li>
            <li id="second">
              <Link to="/services" onClick={handleClick} data-content="Explore">
                Services
              </Link>
            </li>
            <li id="third">
              <a href="#about" onClick={handleClick} data-content="Curious?">
                About
              </a>
            </li>
            <li id="fourth">
              <a
                href="#contact"
                onClick={handleClick}
                data-content="Don't hesitate"
              >
                Contact
              </a>
            </li>
            <li id="fifth">
              <a
                href="https://wa.me/918305772948"
                target="_blank"
                onClick={handleClick}
                className="flex justify-center items-center"
                data-content="Drop a message on WhatsApp"
              >
                Let's Talk
                <img className="w-3.5 h-3.5" src={whatsapp} />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <section className="nav">
        <div
          className="open-overlay z-[100] w-[30px] block cursor-pointer right-4 md:right-8 top-7 md:top-[3.2rem] fixed"
          onClick={handleClick}
        >
          <span className="block h-0.5 bg-darkblue  cursor-pointer mb-1 w-[15px] bar-top"></span>
          <span className="block h-0.5 bg-darkblue  cursor-pointer mb-1 w-[30px] bar-middle"></span>
          <span className="block h-0.5 bg-darkblue  cursor-pointer mb-1 w-[15px] float-right bar-bottom"></span>
        </div>
      </section>
    </>
  );
};
export default Nav;
