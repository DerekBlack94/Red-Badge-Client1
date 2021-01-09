// import React, { Component } from "react";
// import { ExpandMore, MoreVert } from "@material-ui/icons";
// import {
//   Container,
//   Card,
//   CardHeader,
//   CardMedia,
//   CardContent,
//   CardActions,
//   Collapse,
//   Avatar,
//   IconButton,
//   Typography,
//   Menu,
//   MenuItem,
//   Button,
//   Modal,
//   Drawer,
//   List
// } from "@material-ui/core";
// import { createStyles, withStyles } from "@material-ui/core/styles";
// import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// import clsx from "clsx";
// import UpdateUserBike from "./UpdateUserBike";
// import CreateAppointmentDisplay from "../Appointments/CreateAppointmentDisplay";
// import GetAppointmentDisplay from "../Appointments/GetAppointmentDisplay";
// import CreateAppointment from "../Appointments/CreateAppointment";

// const styles = (theme: any) =>
//   createStyles({
//     container: {
//       marginTop: "5em",
//       backgroundColor: "gray",
//       display: "flex",
//       justifyContent: "center",
//       alignContent: "center",
//       height: "100%",
//     },
//     root: {
//       maxWidth: 345,
//     },
//     media: {
//       height: 0,
//       paddingTop: "56.25%",
//     },
//     expand: {
//       transform: "rotate(0deg)",
//       marginLeft: "auto",
//       transition: theme.transitions.create("transform", {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: "rotate(180deg)",
//     },
//     paper: {
//       position: "absolute",
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: "2px solid #000",
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//     list: {
//       width: 250,
//     },
//   });

//   interface State {
//   userBike: Array<string>;
//   expanded: boolean;
//   open: boolean;
//   editOpen: boolean;
//   bikeToUpdate: any;
//   appointmentIsOpen: boolean;
//   bike: any;
//   visible: boolean
//   drawer: boolean
//   data: [],
// };

// interface Props {
//   token: string | null;
//   classes: any;
// }

// class DeleteUserBike extends Component<Props, State> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       userBike: [],
//       expanded: false,
//       open: false,
//       editOpen: false,
//       bikeToUpdate: [],
//       appointmentIsOpen: false,
//       bike: [],
//       visible: false,
//       drawer: false,
//       data: []
//     };
//   }

//   UserBikes() {
//     fetch("http://localhost:3000/userbike/", {
//       method: "GET",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: `${this.props.token}`,
//       }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         this.setState({
//           userBike: data.UserBike,
//         });
//         console.log("response", data);
//       });
//   }

//   componentDidMount() {
//     this.UserBikes();
//     console.log("TOKEN: ", this.props.token);
//   }

//   deleteBike(bike: any) {
    
//     fetch(`http://localhost:3000/userbike/${bike.id}`, {
//       method: "DELETE",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: `${this.props.token}`,
//       }),
//     }).then(() => console.log(this.state.userBike));
//   }

//   handleExpandClick() {
//     this.setState({
//       expanded: !this.state.expanded,
//     });
//   }

//   updateOpen() {
//     this.setState({
//       editOpen: true,
//     });
//   }

//   updateClose() {
//     this.setState({
//       editOpen: false,
//     });
//   }

//   handleOpen() {
//     this.setState({
//       open: true,
//     });
//   }

//   handleClose() {
//     this.setState({
//       open: false,
//     });
//   }

//   setBikeToUpdate(updatedUserBike: any) {
//     this.setState({
//       bikeToUpdate: updatedUserBike,
//     });
//   }

//   setUserBike(userBike: any) {
//     this.setState({
//       bike: userBike,
//     });
//   }

//   appointmentOpen() {
//     this.setState({
//       appointmentIsOpen: true,
//     });
//   }

//   appointmentClose() {
//     this.setState({
//       appointmentIsOpen: false,
//     });
//   }

//   openDrawer(){
//     this.setState({
//       drawer: true
//     })
//   }

//   closeDrawer(){
//     this.setState({
//       drawer: false
//     })
//   }

//   render() {
//     const { classes } = this.props;
//     return (
//       <Container className={classes.container}>
//         <div>
//           <h1>Your Bikes</h1>
//           {this.state.userBike === []
//             ? null
//             : this.state.userBike.map((bike : any, index: any) => (
//                   <div key={index}>
//                   <Card className={classes.root}>
//                     <CardHeader
//                       avatar={<Avatar aria-label="recipe">R</Avatar>}
//                       action={
//                         <IconButton aria-label="settings">
//                           <PopupState
//                             variant="popover"
//                             popupId="demo-popup-menu"
//                           >
//                             {(popupState) => (
//                               <React.Fragment>
//                                 <MoreVert {...bindTrigger(popupState)} />
//                                 <Menu {...bindMenu(popupState)}>
//                                   <Modal
//                                     open={this.state.open}
//                                     onClose={() => this.handleClose()}
//                                     aria-labelledby="simple-modal-title"
//                                     aria-describedby="simple-modal-description"
//                                   >
//                                     <div className={classes.paper}>
//                                       <h2 id="simple-modal-title">Warning!</h2>
//                                       <p>You are about to DELETE you'r Bike!</p>
//                                       <Button
//                                         onClick={() =>
//                                           this.deleteBike(bike)
//                                         }
//                                       >
//                                         Delete UserBike
//                                       </Button>
//                                       <Button>Cancel</Button>
//                                     </div>
//                                   </Modal>
//                                   <Modal
//                                     open={this.state.editOpen}
//                                     onClose={() => this.updateClose()}
//                                     aria-labelledby="simple-modal-title"
//                                     aria-describedby="simple-modal-description"
//                                   >
//                                     <div className={classes.paper}>
//                                       <h2 id="simple-modal-title">
//                                         Edit UserBike
//                                       </h2>
//                                       <UpdateUserBike
//                                         bikeToUpdate={this.state.bikeToUpdate}
//                                         token={this.props.token}
//                                       />
//                                     </div>
//                                   </Modal>
//                                   <Modal
//                                     open={this.state.appointmentIsOpen}
//                                     onClose={() => this.appointmentClose()}
//                                     aria-labelledby="simple-modal-title"
//                                     aria-describedby="simple-modal-description"
//                                   >
//                                     <div className={classes.paper}>
//                                       <h2 id="simple-modal-title">
//                                         Add Ingredient
//                                       </h2>
//                                       <CreateAppointmentDisplay
//                                         // bike={this.state.bike}
//                                         token={this.props.token}
//                                       />
//                                     </div>
//                                   </Modal>
//                                   <Drawer anchor='right' open={this.state.drawer} onClose={()=>this.closeDrawer()} >
//                                         <List className={clsx(classes.list)}>
//                                           <GetAppointmentDisplay  token={this.props.token} />
//                                         </List>
//                                   </Drawer>
//                                   <MenuItem
//                                     onClick={() => {
//                                       this.appointmentOpen();
//                                       this.setUserBike(bike);
//                                     }}
//                                   >
//                                     Add Appointment
//                                   </MenuItem>
//                                   <MenuItem onClick={() => {
//                                     this.openDrawer();
//                                     this.setUserBike(bike);
//                                     }}>
//                                     View Appointments
//                                   </MenuItem>
//                                   <MenuItem
//                                     onClick={() => {
//                                       this.updateOpen();
//                                       // this.bikeToUpdate(bike);
//                                     }}
//                                   >
//                                     Edit Bike
//                                   </MenuItem>
//                                   <MenuItem onClick={() => this.handleOpen()}>
//                                     Delete Bike
//                                   </MenuItem>
//                                 </Menu>
//                               </React.Fragment>
//                             )}
//                           </PopupState>
//                         </IconButton>
//                       }
//                       title={bike.make}
//                       subheader={bike.model}
//                     />
//                     {/* <CardMedia className={classes.media} image="" /> */}
//                     <CardContent>
//                       <Typography
//                         variant="body2"
//                         color="textSecondary"
//                         component="p"
//                       >
//                         Model: {bike.model}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="textSecondary"
//                         component="p"
//                       >
//                         Make: {bike.make}
//                       </Typography>
//                     </CardContent>
//                     <CardActions disableSpacing>
//                       <IconButton
//                         className={clsx(classes.expand, {
//                           [classes.expandOpen]: this.state.expanded,
//                         })}
//                         onClick={() => this.handleExpandClick()}
//                         aria-expanded={this.state.expanded}
//                         aria-label="show more"
//                       >
//                         <ExpandMore />
//                       </IconButton>
//                     </CardActions>
//                     <Collapse
//                       in={this.state.expanded}
//                       timeout="auto"
//                       unmountOnExit
//                     >
//                       <CardContent>
//                         <Typography paragraph>Model:</Typography>
//                         <Typography paragraph>{bike.model}</Typography>
//                       </CardContent>
//                     </Collapse>
//                   </Card>
//                 </div>
//               ))}
//         </div>
//       </Container>
//     );
//   }
// }

// export default withStyles(styles)(DeleteUserBike);
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

