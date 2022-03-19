import React, { useContext } from 'react'

import { Button } from '@material-ui/core'
import IconButton from '@mui/material/IconButton';
import GlobalContext from '../context/GlobalContext';


import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import calendarLogo from '../assets/logo.png'
import './CalendarHeader.css'
import dayjs from 'dayjs';

const CalendarHeader = () => {

    const { monthIndex, setMonthIndex } = useContext(GlobalContext)
    const handlePrevMonth = () => {
        setMonthIndex(monthIndex - 1)
    }
    const handleNextMonth = () => {
        setMonthIndex(monthIndex + 1)
    }
    const handleResetDate = () => {
        setMonthIndex(dayjs().month())
    }
    return (
        <header className='calendar_header'>
            <img src={calendarLogo} alt="calendarLogo" className='calendar_logo' />
            <h1 className='calendar_title' >Calendar</h1>
            <Button variant='contained' size='small' color='primary' onClick={handleResetDate}>Today</Button>
            <IconButton onClick={handlePrevMonth}>
                <ChevronLeftIcon />
            </IconButton>
            <IconButton onClick={handleNextMonth} >
                <ChevronRightIcon />
            </IconButton>
            <h2 className='calendar_month_display'>
                {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
            </h2>
        </header>
    )
}

export default CalendarHeader