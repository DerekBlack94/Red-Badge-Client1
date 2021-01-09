// import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { AddCircleOutline, MenuBook, Person } from '@material-ui/icons';
// import { Link } from 'react-router-dom';

// class sideDrawer extends Component {
//     state = {
//         value: 0
//     }

//     handleChange = (e: any, value: any) => {
//         this.setState({ value });
//     }

//     render() {
//         const { value } = this.state;

//         return (
//             <BottomNavigation value={value} onChange={this.handleChange}>
//                 <Link to='/createbike'>
//                     <BottomNavigationAction label='Tell Us About Your Bike' showLabel icon={<AddCircleOutline />} />
//                 </Link>
//                 <Link to='/getbike'>
//                     <BottomNavigationAction label='Your Bikes' showLabel icon={<MenuBook />} />
//                 </Link>
//                 <Link to='/deletebikes'>
//                     <BottomNavigationAction label='A New Problem With Your Bike?' showLabel icon={<Person />} />
//                 </Link>
//             </BottomNavigation>
//         )
//     }
// }

// export default sideDrawer;

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from 'react-router-dom';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

interface Props {
    

}

interface State {
    // side: any,
    // classes: any
}

class sideDrawer extends React.Component<Props,State> {
    static propTypes = {};
    
    
       state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    classes:{
        list:"",
        fullList: ''
    } 
     
    
    
  };

  toggleDrawer = (side: string, open: boolean) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.state;

    const sideList = (
      <div className={classes.list}>
        <List>
          <Link to="/signup">signup</Link>
        <Link to='/createbike'>Your Bike</Link>
        {/* <Link to="/getbike">Get Your Bikes</Link> */}
        <Link to="/createapp">Create an App</Link>
        {/* <Link to='/deletebikes'>Edit Bike</Link> */}
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
              <Link to='/creatbike'>
              <BottomNavigationAction label='Tell Us About Your Bike' showLabel icon={<AddCircleOutline />} />
                
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
        <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </Drawer>
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

sideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(sideDrawer);