import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { CssBaseline } from '@mui/material'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
          <Typography variant="h2">Transmax Dashboard</Typography>
        </header>
      </div>
    </ThemeProvider>
  )
}

export default App
