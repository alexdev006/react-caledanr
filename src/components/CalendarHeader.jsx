import React from 'react'

import { Button } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';


import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import calendarLogo from '../assets/logo.png'
import './CalendarHeader.css'

const CalendarHeader = () => {
    return (

        <header className='calendar_header'>
            <img src={calendarLogo} alt="calendarLogo" className='calendar_logo' />
            <h1 className='calendar_title' >Calendar</h1>
            <Button variant='contained' size='small' color='primary'>Today</Button>
            <IconButton>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton>
                <ChevronRightIcon />
            </IconButton>

        </header>
    )
}

export default CalendarHeader