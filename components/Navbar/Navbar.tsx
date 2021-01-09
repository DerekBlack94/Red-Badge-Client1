import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Auth from '../Auth/Auth';
import Drawer from '../Main/Drawer'
import Signup from '../Auth/SignUpDisplay'
// import CreateUserBike from './UserBike/CreateUserBike'
import Login from '../Auth/LoginDisplay'

const useStyles = makeStyles(() =>
    createStyles({
        logSignButtons: {
            display: 'flex',
            justifyContent: 'flex-end'
        },
    }),
);

interface Props {
    clearToken:() => void
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
}

const NavbBar = (props: Props) => {
    const classes = useStyles();

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Grid container spacing={3}>
                    <Grid item >
                        <Link to='home'>Home</Link>
                    </Grid>
                    <Grid item xl={6}></Grid>
                    <Grid item xs className={classes.logSignButtons}>
                        <Auth clearToken={props.clearToken} />
                        {/* <Signup updateToken={props.updateToken}/> */}
                        {/* <Login updateToken={props.updateToken} /> */}
                        {/* <Drawer /> */}
                        <Grid item xs>
                        <Link to='/createbike'>Create Bike</Link>
                        <Link to='/createapp'>Create App</Link>
                        <Link to='/getapp'>your appointments</Link>
                        <Link to='/getbike'>your bikes</Link>
                        <Link to='/deleteapp'>Delete Appointment</Link>
                        <Link to='/deleteuserbike'>Delete User Bike</Link>
                        <Link to='/updatebike'>Update User Bike</Link>
                        <Link to='/updateapp'>Update Your Appointment</Link>

                    </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavbBar;