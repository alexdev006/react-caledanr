import React from 'react'
import CreateEventButton from './CreateEventButton'

import './Sidebar.css'
import SmallCalendar from './SmallCalendar'

const Sidebar = () => {
    return (
        <aside className='sidebar_container'>
            <CreateEventButton />
            <SmallCalendar />
        </aside>
    )
}

export default Sidebar