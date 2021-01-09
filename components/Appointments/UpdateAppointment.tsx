

import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

interface State  {
    savedDate: string,
     userInput: string,
};

interface Props {
  token: string | null;
  // bikeToUpdate: any;
}

class UpdateUserBike extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
            savedDate: "",
            userInput: "",
    };
  }

  

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch('http://localhost:3000/appointments/1', {
        method: "PUT",
        headers: new Headers({
            "Content-Type": "application/json",
            Authorization: `${this.props.token}`,
        }),
        body: JSON.stringify({
            appointments:{
                savedDate: this.state.savedDate,
                userInput: this.state.userInput,

            },
        })
        
    })
    .then((result) => result.json())
    .then((data) => { console.log(data)
        
        console.log(this.props.token)
    })
}

  setMake(e: any) {
    this.setState({
      savedDate: e,
    });
  }

  setModel(e: any) {
    this.setState({
      userInput: e,
    });
  }



  componentDidMount() {
    console.log("UpdateUserBike:");
    
  }

  render() {
    return (
      <div>
        
          <TextField
            id="outlined-basic"
            label="Appointment Time"
            variant="outlined"
            value={this.state.savedDate}
            onChange={(e) => this.setMake(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="What Problems are you Haveing?"
            variant="outlined"
            value={this.state.userInput}
            onChange={(e) => this.setModel(e.target.value)}
          />
         
          <Button onClick={(e)=>this.handleSubmit(e)} type='submit' variant="contained">Submit</Button>
      </div>
    );
  }
}

export default UpdateUserBike;

