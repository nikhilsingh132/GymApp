import React, { useState } from 'react'
import { Box } from '@mui/material'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'

function Home() {
  const [exercises, setexercises] = useState([]);
  const [bodyPart, setbodyPart] = useState('all');
  console.log(bodyPart);
  return (
  <Box>
    <HeroBanner />
    <SearchExercises setexercises={setexercises} bodyPart={bodyPart} setbodyPart={setbodyPart}/>
    <Exercises setexercises={setexercises} bodyPart={bodyPart} exercises={exercises}/>
  </Box>
  )
}

export default Home