import "./navbar.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa"

function Navbar() {
    const [open, setOpen] = useState(false);

    const change = () => {
      setOpen((prev) => !prev);
    };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ background: "#3E2D1B!important" }}
      >
        <div className="mainNav">
          <a className="navLogo" href="/">
            Drummersville
          </a>
          <div id="navbarNav" className={open ? " navbarr" : "navbarr-a"}>
            <div className="cancel" onClick={change}>
              <FaTimes />
            </div>
            <ul className="navbarr-nav">
              <li className="navv-item ss">
                <a className="navvLinks active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="navv-item">
                <a className="navvLinks" href="/podcast">
                  Podcast
                </a>
              </li>
              <li className="navv-item">
                <a className="navvLinks" href="/blog">
                  Blog
                </a>
              </li>
              <li className="navv-item">
                <a className="navvLinks" href="#">
                  Contact
                </a>
              </li>
              <li className="navv-item">
                <a className="navvLinks" href="/signup">
                  signup
                </a>
              </li>
            </ul>
          </div>
          <div className="hambur" onClick={change}>
            <GiHamburgerMenu />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
