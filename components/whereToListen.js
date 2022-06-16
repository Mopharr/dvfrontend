import { css } from "@emotion/css";
import { Image } from "react-bootstrap";

function WhereToListen() {
  return (
    <>
      <section
        className={css(`
      background: radial-gradient(100% 11900.82% at 100% 50%, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
      backdrop-filter: blur(42px);
      `)}
      >
        <div className="container py-4">
          <div className="row align-items-center">
            <div
              className="col col-12 col-lg-5 col-xl-5 text-center font-weight-bold"
              style={{
                fontSize: "25px",
                color: "#84382B",
              }}
            >
              <p className="m-0 fw-bold">Listen On</p>
            </div>

            <div className="col col-12 col-lg-6 text-center font-weight-bold">
              <div class="row m-0 justify-content-center">
                <div class="col-auto mt-4">
                  <a href="/">
                    <Image src="./apple_music.png" />
                  </a>
                </div>
                <div class="col-auto mt-4">
                  <a href="https://open.spotify.com/show/5NQzFpvqcEGaVLkoa2ZHO2">
                    <Image src="./spotify.png" />
                  </a>
                </div>

                <div class="col-auto mt-4">
                  <a href="https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy81NzYyMTdjL3BvZGNhc3QvcnNz">
                    <Image src="./gpodcasts.png" />
                  </a>
                </div>

                <div class="col-auto mt-2">
                  <a href = '/'><Image style={{width: '100px', height: '100%'}} src="./annn.png" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WhereToListen;
