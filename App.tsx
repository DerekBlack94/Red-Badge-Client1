import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/Main'

import './App.css';
interface State{
  token: string | null;
  userId: number;
  role: 'user' | 'admin';
}

class App extends Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      token: "",
      userId: 0,
      role: 'user',
    }
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
  };
  
  clearToken = () => {
    localStorage.clear();
    this.setState({
      token: "",
    });
  }
  render() {
    return(
      <div className='App'>
        <Main updateToken={this.updateToken} token={this.state.token} clearToken={this.clearToken} />
      </div>
    )
  }
}

export default App;
