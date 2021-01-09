import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import DeleteAppointment from './DeleteAppointment';

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
    token: string |null ,
    // appointments: any
}

const DeleteAppointmentDisplay =(props: Props)=>{
    const classes = useStyles();

    console.log('DeleteAppointment')

    return(
        <Container className={classes.container}>
            <div>You deleted stuff!</div>
            <DeleteAppointment  token={props.token} />
        </Container>
    )
}

export default DeleteAppointmentDisplay;