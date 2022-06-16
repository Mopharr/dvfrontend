import React from 'react'
import '../../styles/details.css'
import Link from 'next/link'
import { Image } from "react-bootstrap";



function Details() {



  return (
    <div className="details">
      <div className = "detailImg">
        <Image className="" src="./podcast1.png" alt="" />
      </div>
      <div className="detailsCap">
        <p>Mark Dino</p>
        <h2>Druid’s Podcasts, the mere feelings</h2>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </span>
        <p>0 Comment / November 2020</p>
        <button>
          <Link href="#">
            <a>Read More</a>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Details
