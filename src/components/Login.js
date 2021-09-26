import React from "react";
import axios from "axios";
import Register from "./Register";

const baseURL = "http://wytenomore.herokuapp.com/api/aut/";


class Login extends React.Component {
    
    
    submit = e =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "cell_number": this.props.values.cell_number,
        "password": this.props.values.password,
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://wytenomore.herokuapp.com/api/auth", requestOptions)
        .then(response => response.json)
        .then((response) => {
            this.props.nextStep()
        })
        .catch(error => console.log('error', error));

        this.props.nextStep("main")

    }

    register = e =>{


        this.props.nextStep("register")
    }




    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="col-sm-4">
                
                <div class="jumbotron text-center">
                <h3>Welcome back</h3>
                    <p>Signin and enjoy  </p>
                </div>
                <div class="jumbotron text-center">
                <label  className="w3-label">Cell Number</label>
                <input className = "w3-input" type="cell" onChange={this.props.handleChange('cell_number')} name='cell_number' ></input>


                <label  className="w3-label">Password</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('password')} name='password'></input>

                <br  />
                <button className = "btn btn-primary" type="button" onClick= {this.submit}> Login.!!</button>
                <button className = "btn btn-primary" type="button" onClick= {this.register}> Register</button>
                </div>
            </div>
        )
    }
}

export default Login;