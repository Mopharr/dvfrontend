import React from 'react'
import "../styles/sign.css";


const signup = () => {
    return (
      <div className="Main">
        <div className="Left">
          <div className="leftCap">
            <h1>Drummersville Podcast</h1>
            <p>
              Sign in to show the world your experience through your podcast.
            </p>
            <a href='/'>
              <button>Home</button>
            </a>
          </div>
        </div>
        <div className="Right">
          <div className="rightCap">
            <h3>Create an Account</h3>

            <div className="input">
              <div>
                <p>First Name</p>
                <input type="text" />
              </div>

              <div>
                <p>Last Name</p>
                <input type="text" />
              </div>
            </div>

            <div className="Email">
              <p>E-mail</p>
              <input type="email" />
              <p>We'll never share your email with anyone else.</p>
            </div>

            <div className="checkbox">
              <div>
                <input id="male" type="radio" name="gender" />
                <label for="male">Male</label>
              </div>
              <div>
                <input id="female" type="radio" name="gender" />
                <label for="female">Female</label>
              </div>
            </div>

            <div className="input">
              <div>
                <p>Country</p>
                <input type="text" />
              </div>

              <div>
                <p>City</p>
                <input type="text" />
              </div>
            </div>

            <div className="agree">
              <input type="checkbox" />
              <label>
                I agree with <span>Terms and Conditions</span>
              </label>
            </div>
            <div className="submit">
              <button>Sign Up</button>
              <p>
                By clicking the 'Sign Up' button, you confirm that you accept
                our <span>Terms of use</span> and <span>Privacy Police</span>.
              </p>
              <hr />
              <h5>
                Have an account<a href='/login'>Sign In </a>
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
}

export default signup
