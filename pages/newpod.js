import "../styles/newpod.module.css";
import { AiFillPicture, AiFillCamera } from "react-icons/ai";
import { FaRegEye, FaTimes } from "react-icons/fa";
import { BiSquare, BiBold, BiItalic } from "react-icons/bi";
import { BsCodeSlash, BsBraces } from "react-icons/bs";
import { IoIosQuote } from "react-icons/io";
import { FiLink2 } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
  MdOutlineCancel,
} from "react-icons/md";
import { useState } from "react";
// useRef, useEffect;

const newPod = () => {
  const [open, setOpen] = useState(false);
  const [properties, setProperties] = useState({
    isBold: false,
    isItalic: false,
    isQuote: false,
    isLink: false,
    isBullet: false,
    isList: false,
    isPic: false,
    isCode: false,
    isBraket: false,
  });

  const change = () => {
    setOpen((prev) => !prev);
  };

  const toggleBold = () => {
    setProperties((prev) => {
      return { ...prev, isBold: !prev.isBold };
    });
  };

  const toggleItalic = () => {
    setProperties((prev) => {
      return { ...prev, isItalic: !prev.isItalic };
    });
  };
  const toggleQuote = () => {
    setProperties((prev) => {
      return { ...prev, isQuote: !prev.isQuote };
    });
  };
  const toogleLink = () => {
    setProperties((prev) => {
      return { ...prev, isLink: !prev.isLink };
    });
  };
  const bullet = () => {
    setProperties((prev) => {
      return { ...prev, isBullet: !prev.isBullet };
    });
  };
  const toggleList = () => {
    setProperties((prev) => {
      return { ...prev, isList: !prev.isList };
    });
  };
  const pic = () => {
    setProperties((prev) => {
      return { ...prev, isPic: !prev.isPic };
    });
  };
  const Code = () => {
    setProperties((prev) => {
      return { ...prev, isCode: !prev.isCode };
    });
  };
  const Bracket = () => {
    setProperties((prev) => {
      return { ...prev, isBraket: !prev.isBraket };
    });
  };

  return (
    <div className="main">
      <div className="top">
        <label> Logo</label>
        <button>Preview</button>
      </div>
      <div className="cent">
        <div className="mid">
          <div className="check">
            <button>
              <FaRegEye />
              Preview
            </button>
            <button>
              <AiFillPicture />
              Set Cover
            </button>

            <button>
              <BiSquare />
              Feature
            </button>
          </div>
          <div className="log">
            <input type="text" placeholder="Enter Tag" />
          </div>
        </div>

        <div className="tag">
          <button>
            Tag 1 <MdOutlineCancel className="tagIcon" />
          </button>
          <button>
            Tag 2 <MdOutlineCancel className="tagIcon" />
          </button>
          <button>
            Tag 3 <MdOutlineCancel className="tagIcon" />
          </button>
        </div>
        <div className="prev">
          <img src="/prevv.png" alt="Preview Image" />
        </div>

        <div className="content">
          <form action="">
            <input type="text" placeholder="Title..." />

            <textarea cols="30" placeholder="Description"></textarea>
          </form>

          <div className="ccancel" onClick={change}>
            {open ? (
              <FaTimes className="icon" />
            ) : (
              <GiHamburgerMenu className="icon" />
            )}
          </div>
          <div className={open ? "active" : "het"}>
            <BiBold
              onClick={toggleBold}
              className={properties.isBold ? "cli" : "icon"}
            />
            <BiItalic
              onClick={toggleItalic}
              className={properties.isItalic ? "cli" : "icon"}
            />
            <IoIosQuote
              onClick={toggleQuote}
              className={properties.isQuote ? "cli" : "icon"}
            />
            <FiLink2
              onClick={toogleLink}
              className={properties.isLink ? "cli" : "icon"}
            />
            <MdOutlineFormatListBulleted
              onClick={bullet}
              className={properties.isBullet ? "cli" : "icon"}
            />
            <MdOutlineFormatListNumbered
              onClick={toggleList}
              className={properties.isList ? "cli" : "icon"}
            />
            <AiFillCamera
              onClick={pic}
              className={properties.isPic ? "cli" : "icon"}
            />
            <BsCodeSlash
              onClick={Code}
              className={properties.isCode ? "cli" : "icon"}
            />
            <BsBraces
              onClick={Bracket}
              className={properties.isBraket ? "cli" : "icon"}
            />
          </div>
        </div>
      </div>
      {/* <Poperties/>  */}
    </div>
  );
};

export default newPod;
