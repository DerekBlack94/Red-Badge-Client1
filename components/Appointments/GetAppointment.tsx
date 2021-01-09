import React, { Component } from "react";
import { Checkbox,Button } from "@material-ui/core";
import{Typography} from "@material-ui/core";
import GetAppointmentDisplay from "./GetAppointmentDisplay"
import {Link} from 'react-router-dom';

interface State  {
  // userBikeId: number;
  appointments: any;
  checked: boolean;
};

interface Props {
  token: string | null;
  // bike: any;
}
// Array<{title: string, date: string, user: number, tags: Array<string>: null}>


class GetAppointment extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      // userBikeId: this.props.bike.id,
      appointments: [],
      checked: false,
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
          appointments: data.appointments,
        });
        console.log("Appointments: ", data);
      });
  }

  handleCheck() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  componentDidMount() {
  
    this.appointment();
    console.log('Appointments State: ', this.state.appointments)
  }

  render() {
    return (
      <div>
          <li>
          <Typography paragraph>{this.state.appointments}</Typography>
          <h4>{this.state.appointments}</h4>
          <h4>{GetAppointment}</h4>
          {this.state.appointments}
         
          
          
        
         
            {/* <Checkbox
              checked={this.state.checked}
              onChange={() => this.handleCheck()}
              name="Check Me!"
            /> */}
          </li>
      </div>
    );
  }
}

export default GetAppointment;