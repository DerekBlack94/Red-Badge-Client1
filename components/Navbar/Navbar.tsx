import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Auth from '../Auth/Auth'




interface Props {
    clearToken:() => void
}

const Navbar = (props: Props) => {
   

    return (
        <AppBar position='fixed'>
            <Toolbar>
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Auth clearToken={props.clearToken} />
                    </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;