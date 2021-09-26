import React from "react";
import axios from "axios";
const baseURL = "http://wytenomore.herokuapp.com/api/users";


class Register extends React.Component {
    

    submit = e =>{

        axios
        .post(baseURL, {
            body: JSON.stringify(this.state)
        })
        .then((response) => {
            console.log(response)
        });
        this.props.nextStep("main")
    }
    render() {
        return (
            <div className="col-sm-4">
                <div class="jumbotron text-center">
                <h3>Create your subscribtion</h3>
            
                </div>
                <div class="jumbotron text-center">
                <label className="w3-label">Register as </label>
                <select className = "w3-input" type="text"  onChange={this.props.handleChange('type')} name='type'>
                    <option>--</option>
                    <option>Patient</option>
                    <option>Driver</option>
                    <option>Nurse</option>
                </select>
                <br />

                
                <label  className="w3-label">Name</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('name')} name='name' ></input>


                <label  className="w3-label">Surname</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('surname')} name='surname'></input>


                <label  className="w3-label">id</label>
                <input className = "w3-input" type="number" onChange={this.props.handleChange('id')} name='id'></input>


                <label  className="w3-label">Cell Number</label>
                <input className = "w3-input" type="number" onChange={this.props.handleChange('cell_number')} name='cell_number'></input>
                
                <label  className="w3-label">Gender</label>
                <select className = "w3-input" type="text" onChange={this.props.handleChange('gender')} name='gender'>
                    <option>--</option>
                    <option>Female</option>
                    <option>Male</option>
                </select>

                <label  className="w3-label">Password</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('password')} name='password'></input>

                <label  className="w3-label">Confirm Password</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('password2')} name='password2'></input>

                
                <button className = "btn btn-primary" type="button" onClick= {this.submit}> Register Now.!!</button>
                </div>
            </div>
        )
    }
}

export default Register;