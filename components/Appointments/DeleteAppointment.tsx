import React, { Component } from "react";

import { TextField, Button } from "@material-ui/core";

interface Props {
    token: string | null;
    appointmentId: number;
    // appointment:{
    //     savedDate: string;
    //     userInput: string;
    //     id: number;
    }
    // bike: any,




interface State {
    // appointment: any;
    // userbike:string;
//         savedDate: string;
//         userInput: string;
//         id: number} |null;
// }
}

class DeleteAppointment extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            // appointment: null,
            // userbike: "0"
        }
        this.deleteAppointment = this.deleteAppointment.bind(this)
    }



deleteAppointment() {
    // const AppId = this.state.appointment.id
    fetch(`http://localhost:3000/appointments/${this.props.appointmentId}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // this.setState({
        //   appointment: data.deleteUserBike,
        // });
        console.log("response", data);
      });
  }
  
  componentDidMount() {
    // this.deleteAppointment();
    console.log('User Appointments' , this.props.appointmentId)
  }

render(){
    return(
        <div>
            <h1>can you see me?</h1>
            {/* <div>how about this?</div> */}
            <Button variant='contained' onClick={this.deleteAppointment}>Delete</Button>
            

        </div>
    )
}
}

export default DeleteAppointment;
