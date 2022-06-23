import { css } from "@emotion/css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "../styles/comment.module.css";

function PodcastCarousel({ data, Card, title, subtitle }) {
  const [index, setIndex] = useState(0);
  const [carouselItemCount, setCarouselItemCount] = useState(0);

  useEffect(() => {
    // 2 contents per slide, so we split it
    let numSlides = Math.ceil(data.length / 2);

    // we need a max of three slides, or six contents
    if (numSlides > 3) numSlides = 3;

    setCarouselItemCount(numSlides);
  }, [data]);

  function handleScrollCarousel(direction) {
    let currIndex = index;
    // destructures the carouselItemCount, subtracting 1
    const [min, max] = [0, carouselItemCount - 1];

    if (direction === "next") {
      currIndex++;
    } else if (direction === "prev") {
      currIndex--;
    }

    if (currIndex > max) {
      // at max, start from top
      currIndex = 0;
    }

    if (currIndex < min) {
      // at min, start from max
      currIndex = max;
    }

    setIndex(currIndex);
  }

  return (
    <>
      <section>
        <div className="container py-3 py-md-5">
          <div className="row justify-content-between">
            <div className="col-12 col-md-auto d-flex align-items-center">
              <div>
                <p
                  className={`m-0 text-uppercase ${css(`
                      font-size: 25px;
                      color: #84382B;
                    `)}`}
                >
                  {title}
                </p>
              </div>

              <div
                className={css(`
                  width: 40px;
                  height: 1px;
                  background: #000000;
                  margin: 0 20px;
              `)}
              ></div>

              <div>
                <button className="btn">{subtitle}</button>
              </div>
            </div>

            <div className="col-12 col-md-auto mt-3 mt-md-0 d-flex justify-content-between">
              <button
                onClick={() => handleScrollCarousel("prev")}
                className={`btn ${css(`
                  width: 50px; 
                  border-radius: 50%;
                  height: 50px; 
                  background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
                  margin-right: 10px;
                  color: #ffffff;
                  outline: none;
                  
                  `)}`}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>

              <button
                onClick={() => handleScrollCarousel("next")}
                className={`btn ${css(`
                  width: 50px; 
                  border-radius: 50%;
                  height: 50px; 
                  background: radial-gradient(168% 168% at -24% 50%, #84382B 0%, rgba(132, 56, 43, 0.8) 100%);
                  margin-right: 10px;
                  color: #ffffff;
                  outline: none;
                  `)}`}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>

          <Carousel activeIndex={index} indicators={false} controls={false}>
            <Carousel.Item>
              <div className="row mt-4 justify-content-center">
                {data.slice(0, 2).map((data) => (
                  <div className="col mb-5 mb-md-0 col-12 col-md-6 col-xl-5 testing">
                    <Card data={data} />
                  </div>
                ))}
              </div>
            </Carousel.Item>

            {carouselItemCount >= 2 && (
              <Carousel.Item>
                <div className="row mt-4 justify-content-center">
                  {data.slice(2, 4).map((data) => (
                    <div className="col mb-5 mb-md-0 col-12 col-md-6 col-xl-5 testing">
                      <Card data={data} />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            )}

            {carouselItemCount >= 4 && (
              <Carousel.Item>
                <div className="row mt-4 justify-content-center">
                  {data.slice(4, 6).map((data) => (
                    <div className="col mb-5 mb-md-0 col-12 col-md-6 col-xl-5">
                      <Card data={data} />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            )}
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default PodcastCarousel;
