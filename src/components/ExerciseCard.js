import React from 'react'
import {Link} from 'react-router-dom'
import {Stack,Button,Typography} from '@mui/material'

function ExerciseCard({exercise}) {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>

       <img src={exercise.gifUrl} alt={exercise.name} Loading="eager"/>

       <Stack direction="row" alignItems="center" justifyContent="center" gap="5px" >

           <Button sx={{color:'#fff',background:'#ffa9a9',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
            {exercise.bodyPart}
           </Button>

           <Button sx={{color:'#fff',background:'#fcc757',fontSize:'14px',borderRadius:'20px',textTransform:'capitalize'}}>
            {exercise.target}
           </Button>
           
       </Stack>
       <Typography  mt='5px' pb='10px' color="#000" fontWeight='bold' textTransform="capitalize" fontSize="15px" textAlign="center">
        {exercise.name}
       </Typography>
    </Link>
  )
}

export default ExerciseCard