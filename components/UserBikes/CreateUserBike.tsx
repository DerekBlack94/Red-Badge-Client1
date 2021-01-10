import React, { Component,MouseEvent } from 'react';
import {TextField, Button} from '@material-ui/core';


interface Props {
    token: string | null;
}

interface State {
    make: string;
    model: string;
    year: string;
    color: string;
    size: string;
    tireSize: string;
    userInput: string;
    id: number;
}


class CreateUserBike extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state ={
            make: "",
            model: "",
            year: "",
            color: "",
            size: "",
            tireSize: "",
            userInput: "",
            id: 0,
            
        };
    }
    handleSubmit = (event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        event.preventDefault();
        fetch('http://localhost:3000/userbike/create', {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: `${this.props.token}`,
            }),
            body: JSON.stringify({
                userbike:{
                    make: this.state.make,
                    model: this.state.model,
                    year: this.state.year,
                    color: this.state.color,
                    size: this.state.size,
                    tireSize: this.state.tireSize,
                    userInput: this.state.userInput

                },
            })
            
        })
        .then((result) => result.json())
        .then((data) => { console.log(data)
            
            console.log(this.props.token)
        })
    }
    
    
    render(){
        return(
            <div>
                <div >
                    <TextField id="outlined-basic" label="Make" onChange={(e) => this.setState({make: e.target.value})} />
                    <TextField id="outlined-basic" label="Model" onChange={(e) => this.setState({model: e.target.value})} />
                    <TextField id="outlined-basic" label="Year" onChange={(e) => this.setState({year: e.target.value})} />
                    <TextField id="outlined-basic" label="color" onChange={(e) => this.setState({color: e.target.value})} />
                    <TextField id="outlined-basic" label="Size" onChange={(e) => this.setState({size: e.target.value})} />
                    <TextField id="outlined-basic" label="Tire Size" onChange={(e) => this.setState({tireSize: e.target.value})} />
                    <TextField id="outlined-basic" label="Anything else you'd like us to knew" onChange={(e) => this.setState({userInput: e.target.value})} />
                    <Button onClick={(e)=>this.handleSubmit(e)} type='submit' variant="contained">Submit</Button>

                </div>

            </div>

)
}
}


export default CreateUserBike;
