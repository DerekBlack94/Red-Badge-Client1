import React, {Component} from 'react';
import { Button, TextField} from '@material-ui/core';


interface Props {
    updateToken: (newToken: string, userId: number, role: 'user' | 'admin') => void;
}
interface State {
    email: string,
    password: string
}

class Login extends Component<Props, State> {
    constructor(props: any){
        super(props)
        this.state=({
            email: '',
            password: ''
        });
    }
    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch('http//localhost:3000/user/login', {
            method: "POST",
            body: JSON.stringify({email: this.state.email, password: this.state.password}),
            headers: new Headers({
                'Content-Type' : 'application/json'
            })
        })
        .then((result) => result.json())
        .then((data) => {
            this.props.updateToken(data.sessionToken, data.userId, data.role);
        })
    }
    render() {
        return(
            <div>
                <form onSubmit={(e) =>this.handleSubmit(e)}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e)=>this.setState({email: e.target.value})} />
                    <TextField id="outlined-basic" type="password" label="Password" variant="outlined" onChange={(e)=>this.setState({password: e.target.value})} />
                    <Button type='submit' variant='contained'>LOG IN</Button>
                </form>

            </div>
        )
    }
}
export default Login;