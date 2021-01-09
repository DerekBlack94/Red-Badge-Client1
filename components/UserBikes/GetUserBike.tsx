


import React, { Component } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {
  Container,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import GetUserBikeDisplay from "./GetUserBikeDisplay";

const styles = (theme: any) =>
  createStyles({
    container: {
      marginTop: "5em",
      backgroundColor: "gray",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      height: "100%",
    },
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: "56.25%",
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
  });

interface State {
  userbike: any;
  expanded: boolean;
};

interface Props {
  token: string | null;
  classes: any;
}

class GetUserBike extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      userbike: [],
      expanded: false,
    };
  }

  fetchedUserBike() {
    fetch("http://localhost:3000/userbike/", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `${this.props.token}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          userbike: data.fetchedUserBike,
        });
        console.log("response", data);
      });
  }

  componentDidMount() {
    this.fetchedUserBike();
    console.log('User Bikes' , this.state.userbike)
  }

  handleExpandClick() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container>
        {this.state.userbike}
        <GetUserBikeDisplay userBikes={this.state.userbike}/>

        </Container>
      </div>
      
    );
  }
}

export default withStyles(styles)(GetUserBike);
