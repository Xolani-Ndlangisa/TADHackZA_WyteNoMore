import React from "react";
import axios from "axios";
const baseURL = "http://localhost:5000/api/users";
class Register extends React.Component {
    
    state = {
        step : 1,
        cell_number: "",
        Name: "",
        Surename: "",
        email: "",
        gender: "",
        id: "",
        type: "",
    }
    submit = e =>{


        axios
        .post(baseURL, {
            body: this.state
        })
        .then((response) => {
            console.log(response)
        });

        // if (!post) this.nextStep()

        
    }
      
        // Procceed to the next step
        nextStep = () => {
          const {step} = this.state;
          this.setState({
            step: step +1
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

    render() {
        return (
            <div className="w3-display-middle">

                <label className="w3-label">Register as </label>
                <select className = "w3-input" type="text"  onChange={this.handleChange} name='type'>
                    <option>--</option>
                    <option>Patient</option>
                    <option>Driver</option>
                    <option>Nurse</option>
                </select>
                <br />

                
                <label  className="w3-label">Name</label>
                <input className = "w3-input" type="text" onChange={this.handleChange} name='Name' ></input>


                <label  className="w3-label">Surname</label>
                <input className = "w3-input" type="text" onChange={this.handleChange} name='Surename'></input>


                <label  className="w3-label">id</label>
                <input className = "w3-input" type="text" onChange={this.handleChange} name='id'></input>


                <label  className="w3-label">Cell Number</label>
                <input className = "w3-input" type="text" onChange={this.handleChange} name='cell_number'></input>
                
                <label  className="w3-label">Gender</label>
                <select className = "w3-input" type="text" onChange={this.handleChange} name='gender'>
                    <option>--</option>
                    <option>Female</option>
                    <option>Male</option>
                </select>

                <label  className="w3-label">Password</label>
                <input className = "w3-input" type="text" onChange={this.handleChange} name='password'></input>

                <label  className="w3-label">Confirm Password</label>
                <input className = "w3-input" type="text" onChange={this.handleChange} name='password2'></input>

                
                <button className = "btn btn-primary" type="button" onClick= {this.submit}> Register Now.!!</button>
            </div>
        )
    }
}

export default Register;