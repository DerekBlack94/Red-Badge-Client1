
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
    userbike: any;
//         savedDate: string;
//         userInput: string;
//         id: number} |null;
// }
}

class DeleteUserBike extends Component<Props, State>{
    constructor(props: Props){
        super(props);
        this.state = {
            userbike: null,
        }
    }



deleteUserBike() {
    // const AppId = this.state.appointment.id
    fetch(`http://localhost:3000/userbike/3`, {
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
    console.log('User Bikes' , this.state.userbike)
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

export default DeleteUserBike;

