import React, { Component } from 'react'
import axios from 'axios';
import Checkup from './components/Checkup';
import Register from './components/Register';
import Header from './components/Header';
import Delivery from './components/Delivery';
import Login from './components/Login';
import Mainpage from './components/Mainpage';

var step = 1;
export class Home extends Component {
  
    state = {
        step : "login",
        cell_number: "",
        name: "",
        surname: "",
        email: "",
        gender: "",
        id: "",
        type: "",
        password:"",
        password2:""
    }
  
    // Procceed to the next step
    nextStep = (e) => {
      const {step} = this.state;
      this.setState({
        step: e
      });
    }

    // Go to prev step
    prevStep = () => {
      const {step} = this.state;
      this.setState({
        step: step - 1
      });
    }

    handleChange = input => event =>{
      this.setState({[input]: event.target.value });  
    }


    postHandler = e => {
      // e.preventDefault()
        axios.post('http://localhost:8080/book', this.state, {
          headers: {
            'Content-Type': 'application/json'
          }
          }).then(resp => {

          this.setState( resp.data)
          
    })
  }

  loginHandler = e => {
    // e.preventDefault()
      axios.post('http://localhost:8080/login', {email : this.state.email}, {
        headers: {
          'Content-Type': 'application/json'
        }
        }).then(resp => {

        this.setState( resp.data)
        
  })
}
  render() {
    const {step} = this.state;
    const {cell_number,
    name,
    surname,
    email,
    gender,
    id,
    type,
    password,
    password2} = this.state;
      
    const values = {cell_number,
        name,
        surname,
        email,
        gender,
        id,
        type,
        password,
        password2}
        
    switch (step) {
        case "main":
            return (<Mainpage
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}/>)
        case "login":
        return(
            <Login 
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
            />
        )
        case "checkup":
        return(
            
        <Checkup 
        nextStep = {this.nextStep}
        handleChange = {this.handleChange}
        values = {values}
        />
        )
      case "register":
        return(
          <Register  
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )

        case "delivery":
        return(
          <Delivery  
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
          />
        )
      default:
      break;
    }
  }
}

export default Home;