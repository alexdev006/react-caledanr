import dayjs from 'dayjs';
import React, { useState, useEffect, useContext } from 'react'
import { getMonth } from '../util'
import GlobalContext from '../context/GlobalContext'

import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


import './SmallCalendar.css'

const SmallCalendar = () => {

    const { monthIndex } = useContext(GlobalContext)

    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month());
    const [currentMonth, setCurrentMonth] = useState(getMonth());

    const handlePrevMonth = () => {
        setCurrentMonthIdx(currentMonthIdx - 1)
    }
    const handleNextMonth = () => {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }
    const getDayClass = (day) => {
        const format = 'DD-MM-YY'
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        if (nowDay === currDay) {
            return `grid-numb-rounded`
        } else {
            return ""
        }
    }

    useEffect(() => {
        setCurrentMonthIdx(monthIndex)
    }, [monthIndex]);

    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx))
    }, [currentMonthIdx]);

    return (
        <div className='smallcal-container'>
            <header className='smallcal-header'>
                <p className="smallcal-title">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
                        'MMMM YYYY'
                    )}
                </p>
                <div className="chevron-icon">
                    <IconButton onClick={handlePrevMonth} >
                        <ChevronLeftIcon />
                    </IconButton>
                    <IconButton  >
                        <ChevronRightIcon onClick={handleNextMonth} />
                    </IconButton>
                </div>
            </header>
            <div className='grid-calendar'>
                {currentMonth[0].map((day, i) => (
                    <span key={i} className='grid-days-name'>
                        {day.format('dd').charAt(0)}
                    </span>
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <button key={idx} className={getDayClass(day)} >
                                <span>{day.format('D')}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default SmallCalendar