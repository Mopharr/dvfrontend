import Head from "next/head";
import Navbar from "../components/navbar/navbar";
import CustomBtn from "../components/customBtn/customBtn";
import Footer from "../components/footer/footer";
import { css, cx } from "@emotion/css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/index.css";
import {
  faArrowLeft,
  faChevronLeft,
  faChevronRight,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { Carousel, Image } from "react-bootstrap";
import podcasts from "../utilities/podcasts.json";
import mockBlogs from "../utilities/blogs.json";
import { useEffect, useState } from "react";
import PodcastCard from "../components/podcastCard";
import RecommendededPodcastsCard from "../components/recommendedPodcastCard";
import MailBox from "../components/mailBox";
import BlogCard from "../components/blogCard";
import PodcastCarousel from "../components/podcastCarousel";
import WhereToListen from "../components/whereToListen";
import Comment from "../components/comment";

export default function Home() {
  const [latestPodcasts, setLatestPodcasts] = useState([]);
  const [recommendededPodcasts, setRecommendedPodcasts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [index, setIndex] = useState(0);
  const [carouselItemCount, setCarouselItemCount] = useState(3);
  const [direction, setDirection] = useState();

  // set the blogs
  useEffect(() => {
    setBlogs(mockBlogs);
  }, []);

  // set the recommended podcasts
  useEffect(() => {
    let podcastCopy = podcasts;
    let recommendedPodcasts = podcastCopy.filter(
      (podcast) => podcast.category === "recommended"
    );
    setRecommendedPodcasts(recommendedPodcasts);
  }, []);

  // set the latest podcasts
  useEffect(() => {
    let podcastCopy = podcasts;
    let latestPodcasts = podcastCopy.filter(
      (podcast) => podcast.category === "latest"
    );
    setLatestPodcasts(latestPodcasts);
  }, []);

  return (
    <div
      className={css(`
    background: rgba(220, 209, 191, 0.6); `)}
    >
      <Head>
        <title>Home - Drummersville</title>
      </Head>

      <Navbar />

      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto 1fr auto",
          minHeight: "80vh",
          background: "url('./ryan-holloway-XUXx8X4znHU-unsplash 1.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div
          style={{
            minHeight: "90vh",
            background: "rgba(62, 45, 27, 0.8)",
          }}
        >
          <div class="container h-100">
            <div className="row  mt-lg-0 justify-content-center align-items-center h-100">
              <div className="col mt-5 mt-lg-0">
                <div className="row justify-content-center">
                  <div className="col text-center col-12 col-md-8">
                    <h1 className="headee">
                      Drummersville <br />
                      Podcast
                    </h1>
                    <p
                      className={`mb-5 ${css(`
                    font-family: Halyard Micro;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 25px;
                      line-height: 45px;
                      color: #ad9f82;
                      @media (max-width: 425px) {
                        font-size: 20px;
                      }
                    `)}`}
                    >
                      Bringing to you inspiring, educating, motivating and
                      transforming interviews from pro drummers and other music
                      professionals.
                    </p>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col col-auto">
                    <div>
                      <button
                        className={`btn py-3  px-4 btn_value ${css(
                          `border-radius: 50px; background: #84382b; color: #fff `
                        )}`}
                      >
                        <FontAwesomeIcon
                          icon={faPlay}
                          color="#fff"
                          className="mr-2"
                          style="margin-right: 1000px; "
                        />
                        <span className="playPodcast">Play latest Podcast</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhereToListen />

      <PodcastCarousel
        title="Latest Podcasts"
        subtitle="view all data"
        data={latestPodcasts}
        Card={PodcastCard}
      />

      <PodcastCarousel
        title="Recommended for you"
        subtitle="view all data"
        data={recommendededPodcasts}
        Card={RecommendededPodcastsCard}
      />

      <PodcastCarousel
        title="Blog posts"
        subtitle="view all blog posts"
        data={blogs}
        Card={BlogCard}
      />
      <Comment />
      <div className="my-5">
        <MailBox />
      </div>

      <Footer />
    </div>
  );
}
