import React, { useContext } from 'react'

import { Button } from '@material-ui/core'
import Icon from "@material-ui/core/Icon";

import PlusBtn from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext';


const CreateEventButton = () => {

    const { setShowEventModal } = useContext(GlobalContext)

    const plusBtn = (
        <Icon>
            <img src={PlusBtn} alt='plusBtn' style={{ width: '1em', paddingBottom: '1em' }} />
        </Icon>
    )

    return (
        <Button variant='contained' startIcon={plusBtn} style={{ backgroundColor: 'white' }} onClick={() => setShowEventModal(true)}>
            Create
        </Button>
    )
}

export default CreateEventButton