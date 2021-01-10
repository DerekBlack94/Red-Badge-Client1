import React, { Component } from "react";
import { createStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import {Container,} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import GetUserBikeDisplay from "./GetUserBikeDisplay";



interface State {
  userbike: Array<userBikeInterface>;
 
};

interface Props {
  token: string | null;
  // classes: any;
}
interface userBikeInterface {
  make: string,
  model: string,
  year: string;
  color: string;
  size: string;
  tireSize: string;
  userInput: string;
  id: number;
}

class GetUserBike extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userbike: [],
      
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
          userbike: data.getUserBike,
        });
        console.log("response", data.getUserBike);
      });
  }

  componentDidMount() {
    this.fetchedUserBike();
    console.log('User Bikes' , this.state.userbike)
  }

 

  render() {
    
    return (
      <div>
        <li>
        
        <h1>can you see me?</h1>
    <div>

        {this.state.userbike.map((bike: userBikeInterface, index: number) => {
                return(
                  
                    <div key={index} >
                        <h6>{bike.make}</h6>
                        <h6>{bike.model}</h6>
                        <h6>{bike.year}</h6>
                        <h6>{bike.color}</h6>
                        <h6>{bike.size}</h6>
                        <h6>{bike.tireSize}</h6>
                        <h6>{bike.userInput}</h6>
                        
                       
                    </div>
                )
            })} 
       
       </div>

       </li>  
      </div>
      
    );
  }
}


export default GetUserBike;
