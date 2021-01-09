import React, { Component } from 'react';
import Main from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

type State = {
    
    token: string | null ;
    userId: number;
    role: 'user' | 'admin';
    
}


class App extends Component<{}, State> {
    constructor(props: any) {
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
    
    updateToken = (newToken: string, userId: number, role: 'user' | 'admin') => {
      localStorage.setItem("token", newToken);
      localStorage.setItem('userId', String(userId));
      localStorage.setItem('role', role);
      this.setState({
        token: newToken,
        userId: userId,
        role: role,
      })
      console.log(newToken)
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