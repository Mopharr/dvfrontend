import "../styles/newpod.module.css";
import { AiFillPicture, AiFillCamera } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa";
import { BiSquare, BiBold, BiItalic } from "react-icons/bi";
import { BsCodeSlash, BsBraces } from "react-icons/bs";
import { IoIosQuote } from 'react-icons/io'
import { FiLink2 } from 'react-icons/fi'
import {
  MdOutlineFormatListBulleted,
  MdOutlineFormatListNumbered,
} from "react-icons/md";

const newPod = () => {
  return (
    <div className="main">
      <div className="top">
        <label> Logo</label>
        <button>Preview</button>
      </div>
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
      <div className="content">
        <input type="text" placeholder="Title..." />

        <textarea cols="30" placeholder="Description"></textarea>
        <div className="modal"></div>
        <div className="het">
          <BiBold className="icon" />
          <BiItalic className="icon" />
          <IoIosQuote className="icon" />
          <FiLink2 className="icon" />
          <MdOutlineFormatListBulleted className="icon" />
          <MdOutlineFormatListNumbered className="icon" />
          <AiFillCamera className="icon" />
          <BsCodeSlash className="icon" />
          <BsBraces className="icon" />
        </div>
      </div>
    </div>
  );
};

export default newPod;
