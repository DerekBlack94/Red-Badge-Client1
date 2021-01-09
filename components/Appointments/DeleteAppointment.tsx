import React, { Component } from "react";

import { TextField, Button } from "@material-ui/core";

interface Props {
    token: string | null;
    // appointment:{
    //     savedDate: string;
    //     userInput: string;
    //     id: number;
    }
    // bike: any,




interface State {
    appointment: any;
//         savedDate: string;
//         userInput: string;
//         id: number} |null;
// }
}

class DeleteAppointment extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            appointment: null,
        }
    }



deleteUserBike() {
    // const AppId = this.state.appointment.id
    fetch(`http://localhost:3000/appointments/1`, {
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
    this.deleteUserBike();
    console.log('User Bikes' , this.state.appointment)
  }

render(){
    return(
        <div>
            <h1>can you see me?</h1>
            <div>how about this?</div>
            

        </div>
    )
}
}

export default DeleteAppointment;
