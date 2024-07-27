import React from 'react'
import {Card, CardContent, Typography, Button} from '@mui/material'



const TestCard = ([test]) => {
    
  return (
    <>
 <Card sx={{marginBottom:2}}>
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
          {test.title}
        </Typography>
        <Typography variant="h5" component="h2">
          {test.questions} Questions
        </Typography>
        <Typography  color="textSecondary">
          {test.duration} minutes
        </Typography>
        <Button variant="contained" color="primary">
          Start Now
        </Button>
      </CardContent>
    </Card>
    </>
  )
}

export default TestCard