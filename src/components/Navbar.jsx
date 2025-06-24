import React from "react";
import { navlinks } from "../../constants";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  useGSAP(() => {
    // when does the animation happen
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
      },
    });

    // what will happen
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <nav>
      <div className="">
        <a href="#home" className="flex items-center gap-2 ">
          <img src={"/images/logo.png"} alt="logo" />
          <p>Velvet Pour</p>
        </a>
        <ul>
          {navlinks.map((item) => (
            <li key={item.id}>
              <a href={`${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
