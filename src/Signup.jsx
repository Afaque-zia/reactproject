import React, { Component } from 'react';

import './App.css'

export class Signup extends Component {
  constructor(props){
    super(props);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    // Send data to JSON Server
    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('User registered successfully', data);
        // Redirect to Home or do something else
        e.target.querySelectorAll("input").forEach(i => i.value = "");
        e.target.querySelector("p").classList.toggle("d-none");
        setTimeout(() => {
          e.target.querySelector("p").classList.toggle("d-none");
          // this.props.history.push('/');
        }, 3000);
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  }
  render() {
    return (
      <>
        <main className="form-signin w-100 m-auto">
          <form onSubmit={this.handleSubmit}>
            <h2 className="h3 mb-3 fw-normal">Please Sign Up</h2>
            <p className="text-success fw-bolder d-none">Registered Successfull</p>
            <div className="form-floating">
              <input type="text" className="form-control" id="Username" placeholder="Username" name="username" />
              <label htmlFor="Username">Username</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="password" placeholder="Password" name="password" />
              <label htmlFor="password">Password</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign Up</button>
          </form>
        </main>
      </>
    )
  }
}

export default Signup