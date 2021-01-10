

import { AddCircleOutline, MenuBook, Person } from '@material-ui/icons';
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
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import DirectionsBikeSharpIcon from '@material-ui/icons/DirectionsBikeSharp';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';

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
    //
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
          <ListItem>
            <ListItemIcon><HomeSharpIcon></HomeSharpIcon></ListItemIcon>
            <Link to="/home"><Button>Home</Button></Link>
          </ListItem>
          
            <ListItem >
              <ListItemIcon><MailIcon /></ListItemIcon>
        <Link to="/createbike"><Button>New Bike</Button></Link>
            </ListItem>
            <ListItem>
              <ListItemIcon><DirectionsBikeSharpIcon></DirectionsBikeSharpIcon></ListItemIcon>
              <Link to='/getbike'><Button>Your Bikes</Button></Link>
            </ListItem>
            <ListItem>
              <ListItemIcon><DirectionsBikeSharpIcon></DirectionsBikeSharpIcon></ListItemIcon>
              <Link to='/deleteuserbike'><Button>Delete Your Bike</Button></Link>
            </ListItem>
            <ListItem>
              <ListItemIcon><DirectionsBikeSharpIcon></DirectionsBikeSharpIcon></ListItemIcon>
              <Link to='/updatebike'><Button>Update Your Bikes</Button></Link>
            </ListItem>
        </List>
        <Divider />
        <List>
        
            <ListItem >
              <ListItemIcon><AddSharpIcon></AddSharpIcon></ListItemIcon>
              <Link to='/createapp'><Button>Schduel Appointment</Button></Link>
            </ListItem>
            <ListItem >
              <ListItemIcon><AddSharpIcon></AddSharpIcon></ListItemIcon>
              <Link to='/getapp'><Button>Your Appointments</Button></Link>
            </ListItem>
            <ListItem >
              <ListItemIcon><AddSharpIcon></AddSharpIcon></ListItemIcon>
              <Link to='/updateapp'><Button>Change Your Appointment</Button></Link>
            </ListItem>
            <ListItem >
              <ListItemIcon><AddSharpIcon></AddSharpIcon></ListItemIcon>
              <Link to='/deleteapp'><Button>Delete Appointmnets</Button></Link>
            </ListItem>
        
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
        <Button onClick={this.toggleDrawer('left', true)}><MenuSharpIcon></MenuSharpIcon></Button>
        {/* <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button> */}
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