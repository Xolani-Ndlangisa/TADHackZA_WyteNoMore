import React from "react";
import axios from "axios";
const baseURL = "http://localhost:5000/api/users";


class Checkup extends React.Component {
    
    state = {
        step : 1,
        cell_number: "",
        password:"",
        date:"",
        time :"",
        vaccine:"",
        address:"",
        additional: "",
        prescreption: "",
        provider : ""
    }

    submit = e =>{

        axios
        .post(baseURL, {
            body: JSON.stringify(this.props)
        })
        .then((response) => {
            console.log(response)
        });
    }


    render() {
        return (
            <div className="w3-display-middle">
                <h3>Request home based basic check up</h3><br />
                <select className = "w3-input" type="text"  onChange={this.props.handleChange('provider')} name='provider'>
                    <option>--</option>
                    <option>Retired Nurse</option>
                    <option>Medicine Student</option>
                    <option>Quilified</option>
                </select>
                <br />
                

                <label  className="w3-label">Prescription no</label>
                <input className = "w3-input" type="number" onChange={this.props.handleChange('prescription')} name='prescription'></input>


                <label  className="w3-label">Additional info</label>
                <text className = "w3-input" type="text" onChange={this.props.handleChange('additional')} name='additional'></text>

                <label  className="w3-label">Address</label>
                <input className = "w3-input" type="text" onChange={this.props.handleChange('address')} name='address'></input>

                <label  className="w3-label">Date</label>
                <input className = "w3-input" type="date" onChange={this.props.handleChange('time')} name='time'></input>


                <label  className="w3-label">Include Vaccine</label>
                <select className = "w3-input" type="text"  onChange={this.props.handleChange('vaccine')} name='vaccine'>
                    <option>--</option>
                    <option>yes</option>
                    <option>no</option>
                </select><br />
                <button className = "btn btn-primary" type="button" onClick= {this.submit}> Register Now.!!</button>
            </div>
        )
    }
}

export default Checkup;