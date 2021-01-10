import React, { Component, MouseEvent } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import {
  TextField,
  Button,
  MenuItem,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core";

// const styles = (theme: {}) =>
//   createStyles({
//     formControl: {
//       margin: theme.spacing(1),
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   });

interface State {
 savedDate: string,
 userInput: string,
  // userId: number
};

interface Props {
  token: string | null;
  // classes: any;
  // bike: any
}

class CreateAppointment extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      savedDate: "",
      userInput: "",
      // userId: this.props.id
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
    return (
      <div>
        {/* <form onSubmit={(e)=>this.createAppointment(e)}> */}
          <TextField
            id="outlined-basic"
            label="Appointment Time"
            variant="outlined"
            onChange={(e) => this.setDate(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Whats this all about? Life i mean"
            variant="outlined"
            onChange={(e) => this.setUserInput(e.target.value)}
          />
         
          <Button onClick={(e)=>this.createAppointment(e)} type='submit' variant='contained' >Schedule Appointment</Button>
        {/* </form> */}
      </div>
    );
  }
}

// export default withStyles(styles)(CreateAppointment);
export default CreateAppointment
