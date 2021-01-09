import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Signup from './Signup';

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
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
}

const SignUpDisplay = (props: Props) => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <div>
                <h1>SIGN UP</h1>
                <Signup updateToken={props.updateToken} />
            </div>
        </Container>
    )
}

export default SignUpDisplay;