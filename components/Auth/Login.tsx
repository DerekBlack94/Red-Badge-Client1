import React, { Component, MouseEvent } from 'react';
import { TextField, Button } from '@material-ui/core';

type LoginState = {
    email: string,
    password: string
}

interface Props {
    updateToken(newToken: string, userId: number, role: 'user' | 'admin'): void,
}

export default class LoginIndex extends Component<Props, LoginState>{
    constructor(props: Props){
        super(props)
        this.state ={
            email: '',
            password: ''
        }
    }

    setUserName(e:string){
        this.setState({
            email: (e)
        })
    }

    setPassword(e: string){
        this.setState({
            password: (e)
        })
    }

    loginUser(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement> ){
        e.preventDefault();
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then((response)=> response.json())
            .then((data)=> {
                this.props.updateToken(data.token, data.userId, data.role)
            })
    }

    render() {
        return (
            <div>
                {/* <form onSubmit={(e)=>this.loginUser(e)} > */}
                    <TextField id="outlined-basic" label="email" variant="outlined" onChange={(e)=>this.setUserName(e.target.value)} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" onChange={(e)=>this.setPassword(e.target.value)} />
                    <Button onClick={(e)=>this.loginUser(e)} type='submit' variant='contained'>LOG IN</Button>
                {/* </form> */}
            </div>
        )
    }
}