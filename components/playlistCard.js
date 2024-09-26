import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

function playlistCard({ data }) {
  const { image, title, subtitle, audio } = data;

  console.log(title);

  return (
    <figure style={{ position: "relative" }}>
      <Image className="img-fluid w-100" src={title} alt={title} />

      <blockquote
        className={`m-0 mt-3 text-uppercase ${css(`
              font-size: 27px;
              font-family: Begum Sans;
              color: #84382B;
            `)}`}
      >
        {title}
        <audio control>
          <source src={audio} type="audio/mpeg" />
        </audio>
      </blockquote>

      <figcaption
        className={`${css(`
            font-family: Halyard Micro;
            font-style: normal;
            font-weight: normal;
            font-size: 19px;
            line-height: 32px;
            color: #3E2D1B;
        `)}`}
      >
        {subtitle}
      </figcaption>
    </figure>
  );
}

export default playlistCard;
