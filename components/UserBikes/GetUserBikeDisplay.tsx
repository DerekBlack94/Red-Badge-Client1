import React from 'react';
import UpdateUserBike from './UpdateUserBike';
import GetUserBike from './GetUserBike'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

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

}

const GetUserBikeDisplay = (props: Props) => {
    const classes = useStyles();
    
    return (
        <Container className={classes.container} >
        <div>
        <h2>Your Bikes</h2>
        <GetUserBike token={props.token}/>
        </div>

        </Container>

        

    ) 
}

export default GetUserBikeDisplay;