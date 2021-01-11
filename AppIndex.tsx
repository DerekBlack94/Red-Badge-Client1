import React, { Component } from 'react';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

type State = {
    
    token: string| null ;
    userId: number;
    role: 'user' | 'admin';
    
}


class App extends Component<{}, State> {
    constructor(props: {}) {
      super(props);
      this.state = {
        token: localStorage.getItem('token') ? localStorage.getItem('token') : "",
        userId: 0,
        role: 'user',
       
      }
      console.log(this.state.token)
    }
    
    componentDidMount = () => {
      if(localStorage.getItem('token')) {
        this.setState({
          token: localStorage.getItem('token'),
        });
      }
    }
    
    updateToken = (newToken: string, newUserId: number, newRole: 'user' | 'admin') => {
      localStorage.setItem("token", newToken);
      localStorage.setItem('userId', String(newUserId));
      localStorage.setItem('role', newRole);
      this.setState({
        token: newToken,
        userId: newUserId,
        role: newRole,
      })
      console.log(newToken)
      console.log(newUserId)
    };
    
    clearToken = () => {
      localStorage.clear();
      this.setState({
        token: "",
      });
    }
    render() {
        return (
            <div className='app'>
                <Main updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} />
            </div>
        )
    }
}
export default App