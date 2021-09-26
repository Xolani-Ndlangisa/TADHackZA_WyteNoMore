import React from "react";
import axios from "axios";
const baseURL = "http://localhost:5000/api/users";


class Delivery extends React.Component {
    
    state = {
        step : 1,
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

    submit = e =>{

        axios
        .post(baseURL, {
            body: JSON.stringify(this.state)
        })
        .then((response) => {
            console.log(response)
        });
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
                <h3>Request Delivery</h3>
                <br  />


                <label  className="w3-label">Address</label>
                <input className = "w3-input" type="address" onChange={this.handleChange('address')} name='address' ></input>

                
                <label  className="w3-label">Prescreption No</label>
                <input className = "w3-input" type="number" onChange={this.handleChange('prescreption')} name='prescreption' ></input>


                <label  className="w3-label">Date</label>
                <input className = "w3-input" type="date" onChange={this.handleChange('date')} name='date'></input>

                <br />
                <button className = "btn btn-primary" type="button" onClick= {this.submit}> Request.!!</button>
            </div>
        )
    }
}

export default Delivery;