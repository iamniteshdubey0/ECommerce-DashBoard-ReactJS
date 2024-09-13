import React from 'react'
import Chip from '@mui/material/Chip';

const ChipCustom = ({color, text, varient}) => {
  return (
    <Chip label={text} color={color.dark} sx={{
        borderRadius:1,
        color:"white",
        backgroundColor:varient==='bg-transparent'?'transparent':"undefined",
        p:0,
        '& .MuiChip-label':{
            py:0
        }
    }}/>
  )
}

export default ChipCustom
