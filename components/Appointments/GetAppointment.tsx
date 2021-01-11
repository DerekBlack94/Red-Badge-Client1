import React, { Component } from "react";
import { Checkbox,Button } from "@material-ui/core";
import{Typography} from "@material-ui/core";
import GetAppointmentDisplay from "./GetAppointmentDisplay"
import {Link} from 'react-router-dom';
import { DataUsageTwoTone } from "@material-ui/icons";
import DeleteAppointment from './DeleteAppointment'
import UpdateAppointment from './UpdateAppointment'

interface State  {
  // userBikeId: number;
  userAppointments: Array<appointmentInterface>;
  appId: number,
 
};

interface Props {
  token: string | null;
  
  // bike: any;
}
// Array<{title: string, date: string, user: number, tags: Array<string>: null}>
interface appointmentInterface {
  id: number,
  savedDate: string,
  userInput: string
}


class GetAppointment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      // userBikeId: this.props.bike.id,
      userAppointments: [],
      appId: 0,
      
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
          appId: data.id
        });
        console.log("Appointments: ", data);
        console.log('test',this.state.userAppointments)
        console.log('test2', data)
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
          
          
          <div>
            
            {this.state.userAppointments.map((appointment: appointmentInterface , index: number) => {
                return(
                    <div key={index} >
                        <h1>{appointment.savedDate}</h1>
                        <h1>{appointment.userInput}</h1>
                        <h1>{appointment.id}</h1>
                        <DeleteAppointment appointmentId={appointment.id} token={this.props.token} />
                        <UpdateAppointment appointmentId={appointment.id} token={this.props.token} />
                       
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