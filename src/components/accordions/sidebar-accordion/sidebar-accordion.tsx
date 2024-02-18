import React, { FC, PropsWithChildren } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { BLUE_GREY } from '../../../constants'

interface SidebarAccordionProps extends PropsWithChildren {
  title: string
}

const SidebarAccordion: FC<SidebarAccordionProps> = ({ title, children }) => {
  return (
    <Accordion
      defaultExpanded
      sx={{
        borderRadius: '4px',
        backgroundColor: BLUE_GREY,
        color: 'text.disabled',
        '&.Mui-expanded': {
          marginBottom: 0,
        },
      }}
      variant="outlined"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: '1.8rem', color: 'text.disabled' }} />}
        aria-controls={`panel-${title}-content`}
        id={`panel-${title}-header`}
        sx={{ height: '40px', paddingRight: '6px' }}
      >
        <Typography fontWeight={500}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: '2px 0px 6px 0px' }}>{children}</AccordionDetails>
    </Accordion>
  )
}

export default SidebarAccordion
