import React, { useRef, useEffect } from "react";
import { Link } from "react-scroll";
import { SectionContent } from "./ContentSection/ContentSection";

interface Props {
  links: SectionContent[];
}

export const NavBar: React.FC<Props> = ({ links }) => {
  const linkRefs = useRef<any[]>([]);

  // run the preload function one time whenever the component mounts
  useEffect(() => {
    preloadNavLinks();
  }, []);

  // creates an animation of the nav links on load/refresh of page
  const preloadNavLinks = (): void => {
    // starting index
    let index = 0;
    // will loop through the nav link refs and remove class name at set interval
    setInterval(() => {
      // if the index is equal to the length we are done with all the refs
      if (index === linkRefs.current.length) {
        // exit the loop
        return;
      } else {
        // remove the preload class name and set the next index
        linkRefs.current[index].classList.remove("preload");
        index++;
      }
    }, 200);
  };

  return (
    <nav className="site-nav">
      <ul className="nav-links">
        {links.map((link, index) => (
          <li
            key={index}
            ref={(el) => (linkRefs.current[index] = el)}
            className="preload"
          >
            <Link to={link.id} smooth={true} href={`#${link.id}`}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
