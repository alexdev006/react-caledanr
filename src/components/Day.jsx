import dayjs from 'dayjs'
import React from 'react'
import './Day.css'

const Day = ({ day, rowIdx }) => {
    //cibler le jour actuel
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? 'day_text_rounded' : 'day_number'
    }

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
        </div>
    )
}

export default Day