import { css } from "@emotion/css";

function MailBox() {
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col col-12 col-md-10 text-capitalize col-lg-7">
            <p
              className={` ${css(`
              font-family: Roboto;
              font-style: normal;
              font-weight: bold;
              font-size: 25px;
              line-height: 37px;
              color: #84382B;
                    `)}`}
            >
              Subscribe to our mailing list
            </p>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <div
              className={`d-flex mx-auto ${css(`
                   background: #F4F1EB;
                   padding: 15px 10px;
                   border-radius: 50px;
                  `)}`}
            >
              <input
                className="input"
                type="search"
                placeholder="Enter your email address"
                style={{
                  flexGrow: 1,
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  width: "80%"
                }}
              />
              <button
                className={`btn ${css(`
                    color: #84382B;
                    font-weight: bold;
                    width: 20%
                  `)}`}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MailBox;
