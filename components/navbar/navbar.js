import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg navbar-light"
        style={{ background: "#3E2D1B!important" }}
      >
        <div class="mainNav">
          <a class="navLogo" href="/">
            Drummersville
          </a>
          <button
            class="navbar-toggler py-2"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="navLinks active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="navLinks" href="/podcast">
                  Podcast
                </a>
              </li>
              <li class="nav-item">
                <a class="navLinks" href="/blog">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a class="navLinks" href="#">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="navLinks"
                  href="/signup"
                >
                  signup
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
