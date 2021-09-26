import React from "react";
import axios from "axios";
const baseURL = "http://localhost:5000/api/users";


class Mainpage extends React.Component {
    
    register = e =>{
        this.props.nextStep("register")    
    }

    login = e =>{
        this.props.nextStep("login")    
    }
    render() {
        const {values, handleChange} = this.props;
        return (
            <div className="col-sm-4" >
                <div>
                    
                <div class="jumbotron text-center">
                    <h3>Medicine Delivery</h3>
                    <p>Avoid quees</p>
                    <button className = "btn btn-primary" type="button" onClick= {this.submit}> Book Now.!!</button>
                </div>

                <div class="jumbotron text-center">
                    <p>Basic Health Check-up ..! !</p> 
                </div>

                <div class="jumbotron text-center">
                    <p>and more ..! !</p> 
                </div>
                <button className = "btn btn-primary" type="button" onClick= {this.register}> Register Now.!!</button>
                <button className = "btn btn-primary" type="button" onClick= {this.login}> Login.!!</button>
                </div>
            </div>
        )
    }
}

export default Mainpage;