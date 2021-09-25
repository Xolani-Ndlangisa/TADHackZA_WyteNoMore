import React from "react";

class Delivery extends React.Component {

    continue = e =>{
        e.preventDefault();
        this.props.postHandler();
        this.props.nextStep(3);

        
    }

    render() {
        const {values, handleChange} = this.props; 
        return (
            <div className="w3-display-middle">


                <label  className="w3-label">Date</label>
                <select className = "w3-input" type="text">
                    <option>--</option>
                    <option>2020-05-06</option>
                    <option>2020-15-06</option>
                </select>
                <br />

                <label  className="w3-label">Name</label>
                <input className = "w3-input" type="text" ></input>
                <br />
                <input class="w3-check" type="checkbox"/>
                <label class="w3-validate">  <p>Confirm that information is accurate.</p></label>
                <br />
                
                <button className = "btn btn-primary" type="button" onClick= {this.continue}>Delivery Request</button>
            </div>
        )
    }
}

export default Delivery;