import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import CreateUserBike from './CreateUserBike';

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginTop: '4em',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '50vh',
            
        }
    }),
);

interface Props {
    token: string | null
}

const DisplayUserBike = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} >
            <div>
                <h1>Tell Us About Your Bike</h1>
                <CreateUserBike token={props.token} />
            </div>
        </Container>
    )
}

export default DisplayUserBike;