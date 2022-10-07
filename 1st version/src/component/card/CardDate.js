import { Typography } from '@mui/joy';
import React from 'react'

const CardDate = ({date}) => {
    // const {date} = props;
  return (
    <div>
        <Typography 
        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'right'}}
        level="body2">{date}</Typography>
    </div>
  )
}

export default CardDate