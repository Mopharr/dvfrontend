import { css } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";

function PodcastCard({ data }) {
  
  const { image, title, subtitle, audio } = data;

  console.log(title)

  return (
    <figure style={{ position: "relative" }}>
      <Image className="img-fluid w-100" src={image} alt={title} />

      <button
        className={`btn ${css(`
          width: 50px; 
          border-radius: 50px;
          height: 50px; 
          background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
          margin-right: 10px;
          color: #ffffff;
          position: absolute;
          right:0;
          top: 480px;
          @media (max-width: 425px) {
            top: 525px
          }
          `)}`}
      >
        <FontAwesomeIcon icon={faPlay}  style = {{color: '#fff'}}/>
      </button>

      <blockquote
        className={`m-0 mt-3 text-uppercase ${css(`
              font-size: 26px;
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

export default PodcastCard;
