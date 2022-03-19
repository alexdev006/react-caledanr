import React from 'react'
import CreateEventButton from './CreateEventButton'

import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className='sidebar_container'>
            <CreateEventButton />
        </aside>
    )
}

export default Sidebar