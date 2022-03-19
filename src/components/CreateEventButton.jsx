import React from 'react'

import { Button } from '@material-ui/core'
import Icon from "@material-ui/core/Icon";

import PlusBtn from '../assets/plus.svg'


const CreateEventButton = () => {

    const plusBtn = (
        <Icon>
            <img src={PlusBtn} alt='plusBtn' style={{ width: '1em', paddingBottom: '1em' }} />
        </Icon>
    )

    return (
        <Button variant='contained' startIcon={plusBtn} style={{ backgroundColor: 'white' }} >
            Create
        </Button>
    )
}

export default CreateEventButton