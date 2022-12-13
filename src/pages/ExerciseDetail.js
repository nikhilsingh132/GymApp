import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import axios from 'axios'
function ExerciseDetail() {
  const [exercisedetail, setexercisedetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchexercisedata = () => {
      const options = {
        method: 'GET',
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        headers: {
          'X-RapidAPI-Key': '7982d66f7emsh2ee6384b28d6c40p111227jsn3cffea2a6042',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      axios.request(options).then(function (response) {
        console.log(response.data);
        setexercisedetail(response.data);

      }).catch(function (error) {
        console.error(error);
      });
    };
    fetchexercisedata();
  }, [id]);

  return (
    <Box>
      <Detail exercisedetail={exercisedetail}/>
    </Box>
  )
}

export default ExerciseDetail