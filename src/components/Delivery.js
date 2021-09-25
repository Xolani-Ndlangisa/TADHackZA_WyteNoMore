import React from "react";

class NotBooked extends React.Component {

    continue = e =>{
        e.preventDefault();
        this.props.postHandler();
        this.props.nextStep(3);

        
    }

    render() {
        const {values, handleChange} = this.props; 
        return (
            <div className="w3-display-topmiddle">

                <label className="w3-label">Address</label>
                <select className = "w3-input" type="text">
                    <option>--</option>
                    <option>JHB</option>
                    <option>CPT</option>
                    <option>DBN</option>
                </select>

                <br />

                <label  className="w3-label">Date</label>
                <select className = "w3-input" type="text">
                    <option>--</option>
                    <option>2020-05-06</option>
                    <option>2020-15-06</option>
                </select>
                <br />

                <label  className="w3-label">Virtual BootCamp ..?</label>
                <select className = "w3-input" type="text" >
                    <option>--</option>
                    <option>NO</option>
                    <option>YES</option>
                </select>
                <br />
                <input class="w3-check" type="checkbox"/>
                <label class="w3-validate">  <p>Confirm that information is accurate.</p></label>
                <br />
                
                <button className = "btn btn-primary" type="button" onClick= {this.continue}> Book.!!</button>
            </div>
        )
    }
}

export default NotBooked;