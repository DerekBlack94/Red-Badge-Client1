import React, { Component } from "react";
import { Checkbox,Button } from "@material-ui/core";
import{Typography} from "@material-ui/core";
import GetAppointmentDisplay from "./GetAppointmentDisplay"
import {Link} from 'react-router-dom';
import { DataUsageTwoTone } from "@material-ui/icons";

interface State  {
  // userBikeId: number;
  userAppointments: Array<appointmentInterface>;
 
};

interface Props {
  token: string | null;
  // bike: any;
}
// Array<{title: string, date: string, user: number, tags: Array<string>: null}>
interface appointmentInterface {
  savedDate: string,
  userInput: string
}


class GetAppointment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // userBikeId: this.props.bike.id,
      userAppointments: [],
      
    };
  }

   appointment() {
    fetch(`http://localhost:3000/appointments/`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userAppointments: data.GetAppointments,
        });
        console.log("Appointments: ", data);
      });
  }

  

  componentDidMount() {
  
    this.appointment();
    console.log('Appointments State: ', this.state.userAppointments)
  }

  render() {
    return (
      <div>
          <li>
          
          <h1>can you see me ?</h1>
          <div>
            
            {this.state.userAppointments.map((appointment: any, index: number) => {
                return(
                    <div key={index} >
                        <h1>{appointment.savedDate}</h1>
                        <h1>{appointment.userInput}</h1>
                       
                    </div>
                )
            })} 


           
        </div>
        
          </li>
      </div>
    );
  }
}

export default GetAppointment;