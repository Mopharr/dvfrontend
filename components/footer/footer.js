import { css } from "@emotion/css";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import "./footer.css";

function Footer() {
  return (
    <>
      <section className={css(`background: #f3f1ed;`)}>
        <div className="foot">
          <div className="logo">
            <span>Drummer's</span>
            <p>Ville</p>
          </div>
          <div className="social">
            <a href="https://www.instagram.com/drummersville/">
              <AiFillInstagram className="footIcon" />
            </a>
            <a href="https://web.facebook.com/groups/455698524859120">
              <AiFillFacebook className="footIcon" />
            </a>
            <a href="https://twitter.com/drummersville">
              <AiFillTwitterSquare className="footIcon" />
            </a>
            <a href="https://www.youtube.com/channel/UCd4LJ7VnR0i5aTeCw2u06zw">
              <AiFillYoutube className="footIcon" />
            </a>
          </div>
          <div className="copy">
            <p>
              © {new Date().getFullYear()} DrummerVille || All right reserve
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
