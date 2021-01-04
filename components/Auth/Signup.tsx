import React, {Component} from 'react';
import {Button, TextField} from '@material-ui/core';

interface Props {
    updateToken: (newToken: string, userId: number, role: 'user' | 'admin') => void
}
interface State {
    firstName : string;
    lastName : string;
    email: string;
    password: string;
}
class SignUp extends Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        };
    }
    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http://localhost:3000/user/register', {
            method: 'POST',
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password,
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
        })
        .then((result) => result.json())
        .then((data) => {this.props.updateToken(data.sessionToken, data.userId, data.role)})
    }

    render(){
        return(
            <div>
                <form onSubmit={(e)=>this.handleSubmit(e)}>
                    <TextField id="outlined-basic" label='First Name' onChange={(e) => this.setState({firstName: e.target.value})} />
                    <TextField id="outlined-basic" label='Last Name' onChange={(e) => this.setState({lastName: e.target.value})} />
                    <TextField id="outlined-basic" label='Email Address' onChange={(e) => this.setState({email: e.target.value})} />
                    <TextField id="outlined-basic" type="password" label='Password' onChange={(e) => this.setState({password: e.target.value})} />
                    <Button type='submit' variant="contained">Register</Button>

                </form>
                
            </div>
        )
    }
}
export default SignUp;