import React from "react";
import "../styles/sign.css";


const login = () => {
  return (
    <div>
      {" "}
      <div className="Main">
        <div className="Left">
          <div className="leftCap">
            <h1>Drummersville Podcast</h1>
            <p>
              Sign in to show the world your experience through your podcast.
            </p>
            <a href="/">
              <button>Home</button>
            </a>
          </div>
        </div>
        <div className="Right">
          <div className="rightCap">
            <h3>Log In</h3>

            <div className="Email">
              <p>E-mail</p>
              <input type="email" />
            </div>
            <div className="Email">
              <p>Password</p>
              <input type="password" />
            </div>

            <div className="agree">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <div className="submit">
              <button>Log In</button>
              <h5>
                Don't have an account<a href="/signup">Sign up</a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
