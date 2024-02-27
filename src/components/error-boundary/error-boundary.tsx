import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import React, { Component, ErrorInfo, ReactNode } from 'react'
import { CenterredLayout } from '../../layout'

interface ErrorBoundaryState {
  hasError: boolean
  errorString: string
}

interface ErrorBoundaryProps {
  children: ReactNode
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, errorString: '' }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, errorString: error.message }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log({ error, errorInfo })
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <Container maxWidth="lg" sx={{ minHeight: '100vh', display: 'flex' }}>
          <CenterredLayout>
            <Typography variant="h2" align="center">
              {this.state.errorString}
            </Typography>
          </CenterredLayout>
        </Container>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
