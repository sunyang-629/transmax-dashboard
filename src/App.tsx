import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { MainLayout } from './layout'
import { DashboardPage } from './pages'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <MainLayout>
        <DashboardPage />
      </MainLayout>
    </ThemeProvider>
  )
}

export default App
