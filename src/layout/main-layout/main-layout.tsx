import React, { FC, PropsWithChildren } from 'react'
import { styled } from '@mui/material/styles'
import { Sidebar } from '../../components'
import { SIDE_NAV_WIDTH } from '../../constants'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: SIDE_NAV_WIDTH,
    },
  }))

  const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  })
  return (
    <>
      {/* <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      /> */}
      <Sidebar />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
    </>
  )
}

export default MainLayout
