import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 50) {
        console.log("50보다 크다");
        setShow(true);
      } else {
        console.log("50보다 작다");
        setShow(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://w.namu.la/s/984a3a524c3a76ef69967a3538f0b655d9e4a9b948314bd8d57f34a1502753104f1613f356c08d4352cdfad86bbea9cd56b2133ea5c9c7a57f1c065b1048cb5b1a1ea53a1b05e8877e74bde9b20eb20d3751f1fed9e16eb43c2194a7060fa6e7"
        alt="nav-netflix-logo"
        onClick={() => window.location.reload()}
      />
      <img
        className="nav__avatar"
        src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
        alt="nav-avatar"
      />
    </nav>
  );
}

export default Nav;
