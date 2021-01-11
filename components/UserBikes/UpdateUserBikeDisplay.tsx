import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import UpdateUserBike from './UpdateUserBike';

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

const UpdateUserBikeDisplay = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container} >
            <div>
                <h1>what would you like to update About Your Bike</h1>
                {/* <UpdateUserBike token={props.token} /> */}
            </div>
        </Container>
    )
}

export default UpdateUserBikeDisplay;