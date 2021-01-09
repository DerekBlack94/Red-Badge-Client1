import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CreateAppointment from './CreateAppointment';

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
    // bike: any
}

const CreateAppointmentDisplay = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} >

            <div>
                <CreateAppointment  token={props.token} />
            </div>
        </Container>
    )
}

export default CreateAppointmentDisplay;