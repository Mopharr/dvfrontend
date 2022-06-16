
import React, { useState, useEffect } from "react";
import PodcastCard from "../podcastCard";
import mockPodcasts from "../../utilities/podcasts.json";
import '../../styles/playlist.css'


const Playlist = () => {


    const [podcasts, setPodcasts] = useState([]);


    useEffect(() => {
      setPodcasts(mockPodcasts);
    }, []);


    return (
      <div className="main">
        <section>
          <div className="container">
            <div className="row mt-5 justify-content-center">
              {podcasts.map((data) => (
                <div className="col mb-3 mb-md-0 mt-4 col-12 col-md-6 col-xl-5">
                  <PodcastCard data={data} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
}

export default Playlist
