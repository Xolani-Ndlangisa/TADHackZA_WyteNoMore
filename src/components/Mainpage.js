import React from "react";
import axios from "axios";
const baseURL = "http://localhost:5000/api/users";


class Mainpage extends React.Component {
    
    deliver = e =>{
        this.props.nextStep("delivery")    
    }

    checkup = e =>{
        this.props.nextStep("checkup")    
    }
    render() {  
        const {values, handleChange} = this.props;
        return (
            <div className="col-sm-4" >
                <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
             <input type="text" class="form-control" placeholder="Scan a queue"></input>
             </div>
                <div>
                    
                <div class="jumbotron text-center">
                    <h3>Medicine Delivery</h3>
                    <p>Avoid quees, Take the Load off hospitals</p>
                    <button className = "btn btn-primary" type="button" onClick= {this.deliver}>Make Delivery Request</button>
                </div>

                <div class="jumbotron text-center">
                    <h3>Health Check up .. </h3>
                    <p>With Dedicated retired indivituals ..</p> 
                    <button className = "btn btn-primary" type="button" onClick= {this.checkup}>Request Checkup</button>
                </div>


                </div>
            </div>
        )
    }
}

export default Mainpage;