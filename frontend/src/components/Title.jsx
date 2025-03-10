import { Typography } from '@mui/material'
import React from 'react'

const Title = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h4'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
      fontFamily: "Yatra One",
      fontStyle: "normal",
      color: '#B8E6E5',
   }}
    >
      {text}
    </Typography>
  )
}

export default Title