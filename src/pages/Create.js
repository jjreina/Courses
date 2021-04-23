import React from 'react'
import { Typography, Button, Container } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit';

export default function Create() {
  return (
    <Container>
      <Typography 
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new note
      </Typography> 
      <Button type="submit" color="primary">Submit</Button>
      <Button type="submit" color="secondary" variant="outlined">Submit</Button>
      {/* Icons */}
      <br />
      <AcUnitIcon />

    </Container>
  )
}
