import React from 'react'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { MainLayout } from './layout'
import { DashboardPage } from './pages'
import { ErrorBoundary } from './components'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          minHeight: '40px',
          '&.Mui-expanded': {
            minHeight: '40px',
          },
        }),
      },
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ErrorBoundary>
        <MainLayout>
          <DashboardPage />
        </MainLayout>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
