import React from 'react'
import {createStyles, makeStyles} from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavbBar from '../Navbar/Navbar';
import Drawer from './Drawer'

import Signup from '../Auth/Signup'
import Home from './Home';
import Login from '../Auth/Login';
import DisplayUserBike from '../UserBikes/DisplayUserBike';
import GetUserBike from '../UserBikes/GetUserBike';
import DeleteUserBike from '../UserBikes/DeleteUserBike';
import CreateAppointmentDisplay from '../Appointments/CreateAppointmentDisplay';
import GetAppointmentDisplay from '../Appointments/GetAppointmentDisplay';
import GetUserBikeDisplay from '../UserBikes/GetUserBikeDisplay';
import DeleteAppointmentDisplay from '../Appointments/DeleteAppointmentDisplay';
// import DeleteAppointment from '../Appointments/DeleteAppointment'
import GetAppointment from '../Appointments/GetAppointment'
import DeleteUserBikeDisplay from '../UserBikes/DeleteUserBikeDisplay'
import UpdateUserBikeDisplay from '../UserBikes/UpdateUserBikeDisplay';
import UpdateAppointmentDisplay from '../Appointments/UpdateAppointmentDisplay';
import SignUpDisplay from '../Auth/SignUpDisplay';
import LoginDisplay from '../Auth/LoginDisplay';


const useStyles = makeStyles(()=>
    createStyles({
        mainDiv: {
            backgroundColor: 'green',
        },
        
    })
)

interface Props {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
    clearToken:() => void,
    token: string |null
}

const Main = (props: Props) => {
    const classes = useStyles();

    // const bottomNavHandle = () => {
    //     return props.token === '' ? null : <Drawer />
    // }

    

    

    return (
            <React.Fragment>
                <Router>
                    <div className={classes.mainDiv}>
                     <NavbBar updateToken={props.updateToken} clearToken={props.clearToken} />
                    <Switch>
                        <Route exact path='/home' render={()=>(<Home />)} />
                        <Route exact path='/signup' render={()=>(<SignUpDisplay updateToken={props.updateToken} />)} />
                        <Route exact path='/login' render={()=>(<LoginDisplay updateToken={props.updateToken} />)} />
                        <Route exact path='/createbike' render={()=>(<DisplayUserBike token={props.token} />)} />
                        <Route exact path='/getbike' render={()=>(<GetUserBikeDisplay token={props.token} />)} />
                        <Route exact path='/deleteuserbike' render={()=>(<DeleteUserBikeDisplay token={props.token} />)} />
                        <Route exact path='/createapp' render={()=>(<CreateAppointmentDisplay token={props.token} />)} />
                        <Route exact path='/getapp' render={()=>(<GetAppointmentDisplay token={props.token} />)} />
                        {/* <Route exact path='/getbike' render={()=>(<GetUserBikeDisplay token={props.token} />)} /> */}
                        <Route exact path='/deleteapp' render={()=>(<DeleteAppointmentDisplay token={props.token} />)} />
                        <Route exact path='/updatebike' render={()=>(<UpdateUserBikeDisplay token={props.token} />)} />
                        <Route exact path='/updateapp' render={()=>(<UpdateAppointmentDisplay token={props.token} />)} />
                    </Switch>
                    {/* <div className={classes.bottomNavDiv}>
                        {bottomNavHandle()}
                    </div> */}
                    </div>
                </Router>
            </React.Fragment>
    )
}

export default Main;