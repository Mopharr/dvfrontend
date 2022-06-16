import React from 'react'
import Head from "next/head";
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer';
import '../styles/blogRead.css'

const BlogRead = () => {
    return (
      <div>
        <Head>
          <title>Drummersville</title>
          <meta name="description" content="" />
          <meta name="theme-color" content="#3E2D1B" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Inter|Roboto|Begum Sans|Halyard Micro"
          />
        </Head>
        <Navbar />
        <div
          className="text-uppercase py-4"
          style={{
            color: "#84382B",
            background: "#DCD1BF",
            fontSize: "25px",
            fontFamily: "Begum Sans",
          }}
        >
          <div className="container">Blogs</div>
        </div>

        <div className='mainPage'>
          <h1 className='header'>Druid’s Podcasts, the mere feelings</h1>
          <img src="/podcast1.png" alt="" />
          <p className='sub'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <span className='subCap'>2 Comment / November 2020</span>
          <div className="view">
            <p>Mark Dino</p>
            <p className='but'>View Reply</p>
          </div>

          <div className='comment'>
            <input type='text' placeholder='Type your comment here'/>
            <button>Comment</button>
          </div>
        </div>
        <Footer />
      </div>
    );
}

export default BlogRead
