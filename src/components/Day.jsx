import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import './Day.css'

const Day = ({ day, rowIdx }) => {
    const [dayEvents, setDayEvents] = useState([]);

    const { setDaySelected, setShowEventModal, filteredEvents, setSelectedEvent } = useContext(GlobalContext);

    //cibler le jour actuel
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'day_text_rounded' : 'day_number'
    }

    useEffect(() => {
        const events = filteredEvents.filter(
            (evt) => dayjs(evt.day).format('DD-MM-YY') === day.format("DD-MM-YY")
        )
        setDayEvents(events)
    }, [filteredEvents, day]);

    return (
        <div className='day_cell'>
            <header className='day_cell_header'>
                {/* rowIdx on veut juste afficher la 1ere ligne des jours */}
                {rowIdx === 0 && (
                    <p className='day_name'>
                        {day.format('ddd').toUpperCase()}
                    </p>
                )}
                <p className={getCurrentDayClass()}>
                    {day.format('DD')}
                </p>
            </header>
            <div className="day-grid-cell" onClick={() => {
                setDaySelected(day);
                setShowEventModal(true);
            }}>
                {dayEvents.map((evt, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedEvent(evt)}
                        style={{ 'backgroundColor': evt.label, 'color': 'white', 'overflow': 'hidden', 'textOverflow': 'ellipsis', 'whiteSpace': 'nowrap', 'borderRadius': '5px', 'marginRight': '1em' }}>
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Day