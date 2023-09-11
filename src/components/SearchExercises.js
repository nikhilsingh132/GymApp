import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import axios from 'axios'
import HorizontalScrollBar from './HorizontalScrollBar';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
function SearchExercises({ setexercises, bodyPart, setbodyPart }) {

  const { transcript } = useSpeechRecognition("");
  const [Buttonvalue, setButtonvalue] = useState("SPEAK 🎤")
  const [search, setsearch] = useState('');
  const [bodyParts, setbodyParts] = useState([]);

  useEffect(() => {
    const fetchexercisedata = () => {
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'X-RapidAPI-Key': '39ceef5eabmsh365ed796fc87a19p17bcb7jsn5837d2be86c0',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
        setbodyParts(response.data);

      }).catch(function (error) {
        console.error(error);
      });
    };
    fetchexercisedata();
  }, []);
  function func2() {

    setsearch(transcript);
    if (Buttonvalue === "STOP 🔇") {
      setButtonvalue("SPEAK 🎤")
    }
    else {
      setButtonvalue("STOP 🔇")
    }


    console.log(search);
  }
  const handlesearch = async () => {
    if (search) {

      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': '39ceef5eabmsh365ed796fc87a19p17bcb7jsn5837d2be86c0',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

      axios.request(options).then(function (response) {

        const searchedexercise = response.data.filter(
          (exercise) => exercise.name.toLowerCase().includes(search) ||
            exercise.target.toLowerCase().includes(search) ||
            exercise.bodyPart.toLowerCase().includes(search) ||
            exercise.equipment.toLowerCase().includes(search)
        );

        setsearch("");
        setexercises(searchedexercise);

      }).catch(function (error) {
        console.error(error);
      });


    }
  }

  return (
    <Stack alignItems="center" mt="30px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: '44px', xs: '32px' }
        }}
        mb="50px"
        textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "5px",
              textAlign: "center",
              fontSize: "16px"
            },
            width: { lg: '800px', xs: '350px' },
            background: "white"
          }}
          height="76px"
          value={search}
          placeholder="Search Exercises"
          type="text"
          onChange={(event) => setsearch(event.target.value.toLowerCase())} />

        <Button className='search-btn'
          sx={{
            bgcolor: "#FF2626",
            color: "#fff",
            width: { lg: '100px', xs: '50px' },
            height: '54px',
            fontSize: { lg: "16px", xs: "12px" },
            position: "relative"
          }}
          onClick={handlesearch}>
          Search
        </Button>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "100px", xs: "50px" },
            fontsize: { lg: "16px", xs: "12px" },
            height: "54px",
            position: "relative",
            marginLeft: "5px"
          }}
          onClick={() => {
            func2();
            SpeechRecognition.startListening();

          }}
        >
          {Buttonvalue}
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setbodyPart={setbodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises