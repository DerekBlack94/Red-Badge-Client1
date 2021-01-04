import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SignUp from '../Auth/Signup';
import Login from '../Auth/Login';

type Props = {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
    clearToken: () => void,
    token: string | null,
}

const Main = (props: Props) => {

    return (
        <React.Fragment>
            <Router>
                <div className='head'>
                    <Navbar clearToken={props.clearToken} />
                    <div></div>
                    <SignUp updateToken={props.updateToken}/>
                    <Switch>
                        <Route exact path='/navbar' render={()=>(<Navbar clearToken={props.clearToken}/>)} />
                        <Route exact path='/signup' render={()=> (<SignUp updateToken={props.updateToken}/>)}/>
                        <Route exact path='/login' render={()=> (<Login updateToken={props.updateToken}/>)}/>
                    </Switch>
                </div>
            </Router>
        </React.Fragment>
    )
}
export default Main;