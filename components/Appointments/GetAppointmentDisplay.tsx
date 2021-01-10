import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import GetAppointment from './GetAppointment'

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '5em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%'
        }
    }),
);

interface Props {
    token: string | null
    // appointments: any
}

const GetAppointmentDisplay =(props: Props)=>{
    const classes = useStyles();

    console.log('GetAppointment')

    return(
        <Container className={classes.container}>
            <div>Your Scheduled Appointmnets</div>
            <GetAppointment  token={props.token} />
            
        </Container>
    )
}

export default GetAppointmentDisplay;