import Head from "next/head";
import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import PodcastCard from "../components/podcastCard";
import WhereToListen from "../components/whereToListen";
import mockPodcasts from "../utilities/podcasts.json";
import Box from '@mui/material/Box'
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import '../styles/Home.module.css'

function Podcast() {
  const [podcasts, setPodcasts] = useState([]);
  const [service, setService] = useState(1)
  const [catigories, setCatigories] = useState('')


  const handleChange = (event) => {
    setCatigories(event.target.value)
  }
  const toogleTap = (index) => {
    setService(index)
  }

  useEffect(() => {
    setPodcasts(mockPodcasts);
  }, []);

  // styling for MUI 

  const style = (theme) => ({
    cssLabel: {
      color: "green",
    }
  });



  return (
    <>
      <Head>
        <title>Podcast - Drummersville</title>
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
        <div className="container">Podcasts</div>
      </div>

      <div className="container">
        <div className="d-flex justify-content-between py-4">
          <div>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Catigories</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={catigories}
                  label="Catigories"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>Pop</MenuItem>
                  <MenuItem value={20}>jazz</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>

          <div>
            <div
              className="rounded fw-bold"
              style={{ border: "1px solid #84382B", color: "#84382B" }}
            >
              <button
                className="btn text-light"
                style={{ border: "1px solid #84382B", background: "#84382B" }}
                // onClick={() => toogleTap(1)}
                // className={
                //   service === 1
                //     ? `${sectionStyle.tittle} ${sectionStyle.active} `
                //     : sectionStyle.tittle
                // }
              >
                Featured
              </button>
              <button
                className="btn"
                style={{ borderRight: "1px solid #84382B", outline: "none" }}
                // onClick={() => toogleTap(1)}
                // className={
                //   service === 1
                //     ? `${sectionStyle.tittle} ${sectionStyle.active} `
                //     : sectionStyle.tittle
                // }
              >
                New
              </button>
              <button
                className="btn"
                // onClick={() => toogleTap(1)}
                // className={
                //   service === 1
                //     ? `${sectionStyle.tittle} ${sectionStyle.active} `
                //     : sectionStyle.tittle
                // }
              >
                On sale
              </button>
            </div>
          </div>
        </div>
      </div>

      <WhereToListen />

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

      <section>
        <div className="container my-5">
          <div className="row mt-5 justify-content-center">
            <div className="col-auto">
              <button className="btn btn-danger p-3 text-uppercase mt-3 ">
                Load more podcasts
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Podcast;
