import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

interface State  {
  make: string;
    model: string;
    year: string;
    color: string;
    size: string;
    tireSize: string;
    userInput: string;
    id: number;
};

interface Props {
  token: string | null;
  // bikeToUpdate: any;
}

class UpdateUserBike extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
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

  

  handleSubmit = (event: any) => {
    event.preventDefault();
    fetch('http://localhost:3000/userbike/1', {
        method: "PUT",
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

  setMake(e: any) {
    this.setState({
      make: e,
    });
  }

  setModel(e: any) {
    this.setState({
      model: e,
    });
  }

  setYear(e: any) {
    this.setState({
      year: e,
    });
  }

  setColor(e: any) {
    this.setState({
      color: e,
    });
  }

  setSize(e: any) {
    this.setState({
      size: e,
    });
  }

  setTireSize(e: any) {
    this.setState({
      tireSize: e,
    });
  }
  setUserInput(e: any) {
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
            label="Make"
            variant="outlined"
            value={this.state.make}
            onChange={(e) => this.setMake(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="model"
            variant="outlined"
            value={this.state.model}
            onChange={(e) => this.setModel(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Year"
            variant="outlined"
            value={this.state.year}
            onChange={(e) => this.setYear(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Color"
            variant="outlined"
            value={this.state.color}
            onChange={(e) => this.setColor(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Bike Size"
            variant="outlined"
            value={this.state.size}
            onChange={(e) => this.setSize(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Tire Size"
            variant="outlined"
            value={this.state.tireSize}
            onChange={(e) => this.setTireSize(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="what's new"
            variant="outlined"
            value={this.state.userInput}
            onChange={(e) => this.setUserInput(e.target.value)}
          />
          <Button onClick={(e)=>this.handleSubmit(e)} type='submit' variant="contained">Submit</Button>
      </div>
    );
  }
}

export default UpdateUserBike;
