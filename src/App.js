import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './AuthContext';
// Other Imports
import Header from './Commen/Header';
import Footer from './Commen/Footer';
import Login from './Login';
import SignUp from './Signup';
import Home from './Main';
// Import Styling
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props){
    super(props);
    console.log('props', props);
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </AuthProvider>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
