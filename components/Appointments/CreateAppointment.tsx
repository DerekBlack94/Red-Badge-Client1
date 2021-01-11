import React, { Component, MouseEvent } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import 'date-fns';

import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import {
  TextField,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";
import image from '../assets/Logo.png'

const styles = {
  grid: {
    width: '50%',
  },
};



interface State {
 savedDate: string,
 userInput: string,
 selectedDate: any
 classes: string
 
};

interface Props {
  token: string | null;
  
}

class CreateAppointment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      savedDate: "",
      userInput: "",
      selectedDate: new Date(),
      classes: ""
      
    };
  }

  setDate(e: string) {
    this.setState({
      savedDate: (e),
    });
  }

  setUserInput(e: string) {
    this.setState({
      userInput: (e),
    });
  }

  handleDateChange = (date: any )  => {
    this.setState({ selectedDate: date } );
  };

  setSelectedDate(e: any) {
    this.setState({
      selectedDate: (e)
    });
    console.log(Date)
  }

  

  // componentDidMount(){
  //     console.log('user ID: ', )
  // }
  
  createAppointment(e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    e.preventDefault();
    fetch("http://localhost:3000/appointments/create", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      }),
      body: JSON.stringify({
        appointments: {
          savedDate: this.state.savedDate,
          userInput: this.state.userInput,

        }
        // userId: this.state.userId
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("create Appointment", data);
      });
  }

  render() {
    // const { classes } = this.props;
    const { selectedDate } = this.state;
    return (
      <div>
        <img src={image} width="250vw" height="250vh" />  
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        {/* <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={this.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={this.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={this.handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
       
           {/* <TextField
            id="outlined-basic"
            label="Appointment Time"
            variant="outlined"
            onChange={(e) => this.setDate(e.target.value)}
          /> */}
          <TextField
            id="outlined-basic"
            label="Whats this all about? Life i mean"
            variant="outlined"
            onChange={(e) => this.setUserInput(e.target.value)}
          />
         
          <Button onClick={(e)=>this.createAppointment(e)} type='submit' variant='contained' >Schedule Appointment</Button> 
        
      </div>
    );
  }
}

// export default withStyles(styles)(CreateAppointment);
export default CreateAppointment
