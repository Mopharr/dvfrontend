import "../styles/comment.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaQuoteLeft } from 'react-icons/fa'
const comment = () => {
  return (
    <div className="maincomment">
      <h1>Word on the street</h1>

      <div className="comment">
        <div className="commentBtn">
          <FaQuoteLeft className="commentIcon" />
          <img src="/comment1.png" alt="" />
          <p>
            Enjoy access to all of your course tools with new and improved
            funtionality to take your study to the next level.
          </p>
          <h2>Mark Duck</h2>
          <h3>Secondary School</h3>
        </div>

        <div className="commentBtn2">
          <FaQuoteLeft className="commentIcon2" />
          <img src="/comment1.png" alt="" />
          <p>
            Enjoy access to all of your course tools with new and improved
            funtionality to take your study to the next level.
          </p>
          <h2>Mark Duck</h2>
          <h3>Secondary School</h3>
        </div>
      </div>
    </div>
  );
};

export default comment;
