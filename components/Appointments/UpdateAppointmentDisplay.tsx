import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import UpdateAppointment from './UpdateAppointment';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '5em',
            backgroundColor: 'gray',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%'
        }
    }),
);

interface Props {
    token: string | null
}

const UpdateAppointmentDisplay = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} >
            <div>
                <h1>what would you like to update About Your Bike</h1>
                {/* <UpdateAppointment token={props.token} /> */}
            </div>
        </Container>
    )
}

export default UpdateAppointmentDisplay;