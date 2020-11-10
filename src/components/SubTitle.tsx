import React, { useRef, useEffect } from "react";

export const SubTitle = () => {
  const laptopRef = useRef<HTMLHeadingElement | null>(null);
  const rocketRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      rocketRef.current?.classList.add("clickme");
      laptopRef.current?.classList.add("clickme");
    }, 5000);
  }, []);

  const clickHandler = (id: string) => {
    switch (id) {
      case "rocket":
        rocketRef.current?.classList.remove("shake");
        rocketRef.current?.classList.remove("clickme");
        setTimeout(() => {
          rocketRef.current?.classList.add("launch");
        }, 250);
        setTimeout(() => {
          rocketRef.current?.classList.add("hide");
        }, 500);
        break;

      case "laptop":
        laptopRef.current?.classList.remove("shake");
        laptopRef.current?.classList.remove("clickme");
        setTimeout(() => {
          laptopRef.current?.classList.add("fire");
        }, 250);
        break;

      default:
        break;
    }
  };

  return (
    <div className="header-subtitle">
      <h2
        id="laptop"
        className="shake"
        ref={laptopRef}
        role="img"
        aria-label="laptop emoji"
        onClick={() => clickHandler("laptop")}
      >
        💻
      </h2>
      <h2>Let's Code Something Cool Together!</h2>
      <h2
        id="rocket"
        className="shake"
        ref={rocketRef}
        role="img"
        aria-label="rocket emoji"
        onClick={() => clickHandler("rocket")}
      >
        🚀
      </h2>
    </div>
  );
};
