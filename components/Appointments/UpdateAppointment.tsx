

import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";

interface State  {
    savedDate: string,
     userInput: string,
};

interface Props {
  token: string | null;
  appointmentId: number;
  
}

class UpdateUserBike extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
            savedDate: "",
            userInput: "",
    };
    this.updateAppointment = this.updateAppointment.bind(this)
  }

  

//   handleSubmit = (event: any) => {
//     event.preventDefault();
//     fetch(`http://localhost:3000/appointments/${this.props.appointmentId}`, {
//         method: "PUT",
//         headers: new Headers({
//             "Content-Type": "application/json",
//             Authorization: `${this.props.token}`,
//         }),
//         body: JSON.stringify({
//             appointments:{
//                 savedDate: this.state.savedDate,
//                 userInput: this.state.userInput,

//             },
//         })
        
//     })
//     .then((result) => result.json())
//     .then((data) => { console.log(data)
        
//         console.log(this.props.token)
//     })
// }

updateAppointment() {
  // const AppId = this.state.appointment.id
  fetch(`http://localhost:3000/appointments/${this.props.appointmentId}`, {
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
    .then((res) => res.json())
    .then((data) => {
      // this.setState({
      //   appointment: data.deleteUserBike,
      // });
      console.log("response", data);
    });
}

  setDate(e: string) {
    this.setState({
      savedDate: e,
    });
  }

  setInput(e: string) {
    this.setState({
      userInput: e,
    });
  }



  componentDidMount() {
    // this.deleteAppointment();
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
            onChange={(e) => this.setDate(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="What Problems are you Haveing?"
            variant="outlined"
            value={this.state.userInput}
            onChange={(e) => this.setInput(e.target.value)}
          />
         
          {/* <Button onClick={(e)=>this.handleSubmit(e)} type='submit' variant="contained">Submit</Button> */}
          <Button variant='contained' onClick={this.updateAppointment}>Update</Button>
      </div>
    );
  }
}

export default UpdateUserBike;

