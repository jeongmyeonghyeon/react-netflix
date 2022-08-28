import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      // console.log(window.scrollY);
      if (window.scrollY > 8) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://w.namu.la/s/984a3a524c3a76ef69967a3538f0b655d9e4a9b948314bd8d57f34a1502753104f1613f356c08d4352cdfad86bbea9cd56b2133ea5c9c7a57f1c065b1048cb5b1a1ea53a1b05e8877e74bde9b20eb20d3751f1fed9e16eb43c2194a7060fa6e7"
        alt="nav-netflix-logo"
        onClick={() => navigate("/")}
      />
      <div className="nav__secondary">
        <input
          className="nav__secondary-input"
          type="text"
          placeholder="제목"
          value={searchValue}
          onChange={handleSearchValueChange}
        />
        <img
          className="nav__avatar"
          src="https://occ-0-988-395.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229"
          alt="nav-avatar"
        />
      </div>
    </nav>
  );
}

export default Nav;
