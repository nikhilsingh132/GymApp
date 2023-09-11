import React, { useEffect, useState } from 'react'
import Pagination from '@mui//material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import ExerciseCard from './ExerciseCard';
import axios from 'axios';

function Exercises({ exercises, setexercises, bodyPart }) {

  const [currentpage, setcurrentpage] = useState(1);
  const exercisesperpage = 9;
  const indexOfLastExercise = currentpage * exercisesperpage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesperpage;
  const currentexercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  function paginate(e, value) {
    setcurrentpage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchexercisedata = () => {
      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
        headers: {
          'X-RapidAPI-Key': '39ceef5eabmsh365ed796fc87a19p17bcb7jsn5837d2be86c0',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
        setexercises(response.data);

      }).catch(function (error) {
        console.error(error);
      });
    };
    fetchexercisedata();
  }, [bodyPart]);

  return (
    <Box id="exercises"
      sx={{ mt: { lg: '110px' } }}
      mt='50px'
      p='20px'
    >

      <Typography variant='h4' fontWeight="bold" mb="40px" textAlign="center">
        Showing Results
      </Typography>

      <Stack
        direction='row'
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentexercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>

      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesperpage)}
            page={currentpage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises