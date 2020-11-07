import React, { useState } from "react";
import { Link } from "react-scroll";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 180) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <>
      {visible ? (
        <Link
          id="back-to-top"
          to="top"
          smooth={true}
          href="#"
          title="Back to Top"
        >
          <i className="fas fa-caret-up"></i>
        </Link>
      ) : null}
    </>
  );
};
