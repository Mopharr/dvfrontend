import Head from 'next/head'
import React, { useState, useEffect} from 'react'
import Navbar from '../components/navbar/navbar'
import Details from '../components/Blog/details'
 import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Playlist from '../components/Blog/Playlist';
import { Pagination } from '@mui/material';
import { Stack } from '@mui/material';
import Footer from "../components/footer/footer";


const blog = ({}) => {

    const [catigories, setCatigories] = useState("");


    const handleChange = (event) => {
      setCatigories(event.target.value);
    };

    

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
          <div className="container">Podcasts</div>
        </div>

        <div className="container">
          <div className="d-flex justify-content-between py-4">
            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Catigories
                  </InputLabel>
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

        <Details />
        <Playlist />

        <Stack spacing={2}>
          <Pagination count={35}
           style = {{fontSize: '20px', float: 'right', margin: '2em 0 2em auto'}}
           
           />
        </Stack>

        <Footer />
      </div>
    );
}

export default blog
