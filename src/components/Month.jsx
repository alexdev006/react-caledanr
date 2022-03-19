import React from 'react'
import Day from '../components/Day'

const Month = ({ month }) => {
    return (
        <div className='month' >
            {/* rows = weeks */}
            {month.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <Day day={day} key={idx} rowIdx={i} />
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Month