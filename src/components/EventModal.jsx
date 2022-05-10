import React, { useState, useContext } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogTitle from '@mui/material/DialogTitle';
import Paper from '@mui/material/Paper';
import Draggable from 'react-draggable';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import CheckIcon from '@mui/icons-material/Check';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


import './EventModal.css'
import GlobalContext from '../context/GlobalContext';

const labelsClasses = ["blue", "green", 'indigo', 'grey', 'red', 'purple']

function PaperComponent(props) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}

export default function EventModal() {
    const { setShowEventModal, showEventModal, daySelected, dispatchCalEvent, selectedEvent } = useContext(GlobalContext)

    const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : '');
    const [description, setDescription] = useState(selectedEvent ? selectedEvent.description : '');
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            // ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            ? selectedEvent.label
            : labelsClasses[0]);

    //prevent default evite le reload
    const handleSubmit = (e) => {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            //valueOf() sinon on ne peut pas stringify la value
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now()
        };
        if (selectedEvent) {
            dispatchCalEvent({ type: 'update', payload: calendarEvent })

        } else {
            dispatchCalEvent({ type: 'push', payload: calendarEvent })
        }
        setShowEventModal(false)
    }

    return (
        <div>
            <Dialog
                maxWidth={'sm'}
                open={showEventModal}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
            >
                <DialogTitle className='event-modal-header' id="draggable-dialog-title">
                    <span>Create Event</span>
                    <IconButton onClick={() => setShowEventModal(false)} className='event-modal-icon' variant='outlined'>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <div className='event-modal-sub'>
                        <AccessTimeIcon color='primary' className='modal-event-icon' />
                        <p>{daySelected.format("dddd, MMMM DD")} </p>
                    </div>
                    <div className="event-modal-input ">
                        <TextField id="outlined-basic" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)} required placeholder='Add a title' value={title} />
                    </div>
                    <div className="event-modal-input">
                        <TextField id="outlined-basic" label="Description" variant="standard" onChange={(e) => setDescription(e.target.value)} required placeholder='Add adescription' value={description} />
                    </div>
                    <div className="event-modal-sub">
                        <BookmarkBorderIcon color='primary' className='modal-event-icon' />
                        {labelsClasses.map((color, idx) => (
                            <span
                                key={idx}
                                onClick={() => setSelectedLabel(color)}
                                style={{ 'backgroundColor': color, 'borderRadius': '9999px', 'cursor': 'pointer', 'width': '2em', 'height': '2em', 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'margin': '0.2em' }}
                            >
                                {selectedLabel === color && <CheckIcon style={{ 'color': 'white' }} />}
                            </span>
                        ))}
                    </div>
                </DialogContent>
                <DialogActions>
                    {selectedEvent && (
                        <IconButton variant='outlined' className='event-modal-icon' onClick={() => {
                            dispatchCalEvent({
                                type: 'delete',
                                payload: selectedEvent
                            })
                            setShowEventModal(false)
                        }}><DeleteOutlineIcon /></IconButton>

                    )}
                    <Button variant='contained' color='primary' onClick={handleSubmit}>Save</Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}