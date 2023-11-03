import React, { createContext, Component } from 'react';

const AuthContext = createContext();

class AuthProvider extends Component {
  state = {
    isLoggedIn: localStorage.getItem('isLoggedIn'),
    isAuthenticated: localStorage.getItem('isAuthenticated'),
  };

  login = () => {
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('isAuthenticated', true);
    this.setState({ isLoggedIn: true, isAuthenticated: true });
  }
  

  logout = () => {
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('isAuthenticated', false);
    this.setState({ isLoggedIn: false, isAuthenticated: false });
  }

  render() {
    return (
      <AuthContext.Provider value={{ isLoggedIn: this.state.isLoggedIn, isAuthenticated: this.state.isAuthenticated, login: this.login, logout: this.logout }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthContext };
