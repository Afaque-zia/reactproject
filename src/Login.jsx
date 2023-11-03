import React, { Component } from 'react';
import { AuthContext } from './AuthContext';
import { Router } from 'react-router-dom';

// Import Styling
import './App.css'

export class Login extends Component {
  static contextType = AuthContext;

  constructor() {
    super()
    console.log('abc',)
  }
  componentDidMount() {
    const contextData = this.context;
  }
  handleLogin = (e) => {
    e.preventDefault();
    const contextData = this.context;

    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log(username, password);

    fetch('http://localhost:3001/users')
      .then(response => response.json())
      .then(data => {
        const authenticatedUser = data.find(user => user.username === username && user.password === password);
        if (authenticatedUser) {
          contextData.login();
          window.location.pathname = "/";
        } else {
          this.setState({ errorMessage: 'Invalid username or password' });
          window.location.pathname = "/signup"
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    return (
      <>
        <main className="form-signin w-100 m-auto">
          <form onSubmit={this.handleLogin}>
            <h2 className="h3 mb-3 fw-normal">Please Sign in</h2>
            <div className="form-floating">
              <input type="text" name='username' className="form-control" id="floatingInput" placeholder="Username" />
              <label htmlFor="floatingInput">Username</label>
            </div>
            <div className="form-floating">
              <input type="password" name='password' className="form-control" id="floatingPassword" placeholder="Password" />
              <label htmlFor="floatingPassword">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
          </form>
        </main>
      </>
    )
  }
}

export default Login