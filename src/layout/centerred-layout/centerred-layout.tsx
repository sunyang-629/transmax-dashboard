import React, { FC, PropsWithChildren } from 'react'
import Box from '@mui/material/Box'

const CenterredLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      alignSelf="stretch"
    >
      {children}
    </Box>
  )
}

export default CenterredLayout
