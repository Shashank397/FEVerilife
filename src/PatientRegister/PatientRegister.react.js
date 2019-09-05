import React from 'react';

import './PatientRegister.css';
let url="http://localhost:3100/patientList";
class PatientRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            newpatientList:{
                "patientId": 0,
                "patientName": "",
                "dob": "",
                "bloodGroup": "",
                "phoneNumber": 0,
                "email": "",
                " effectiveDate": "",
                "address": {
                  "line": "",
                  "city": "",
                  "state": "",
                  "country": "",
                  "pincode":0
                }
            }
        }
    }
    
    handleChange = event =>{
       
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log("Hi");
        
        let name = event.target.name;
        let value = event.target.value;

         
          this.setState(prevState =>( {newpatientList:{...prevState.newpatientList,[name]:value}}));
      }

      handleSubmit =(event) =>
      {
          event.preventDefault();
          console.log(this.state.newpatientList.dob);
          fetch(url,{"method":"POST",
          "body":JSON.stringify(this.state.newpatientList),
           "headers":{
               "Content-Type":"application/json"
           }
}).then(resp=>{ console.log("Response");console.log(resp.status)});
      }

    render() {
        return (
            <div >         
            <form onSubmit={this.handleSubmit}>  
                    <label htmlFor="">Patient Id</label>
                    <input type="number" name='patientId'     onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Patient Name</label>
                    <input type="text" name="patientName"   onChange={this.handleChange} required/><br/>
                    <label htmlFor="">DOB</label>
                    <input type="date" name="dob"onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Blood Group</label>
                    <select name="blood_group">
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                    </select><br/>
                    <label htmlFor="">Phone Number</label>
                    <input type="number" name='phoneNumber'  onChange={this.handleChange} required/><br/>
                    <label htmlFor="" name="address" >Address</label><br/>
                    <label htmlFor="">Line</label>
                    <input type="text" name='line'  onChange={this.handleChange} required /><br/>
                    <label htmlFor="">State</label>
                    <input type="text" name='state'  onChange={this.handleChange} required/><br/>
                    <label htmlFor="">City</label>
                    <input type="text" name='city'  onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Country</label>
                    <input type="text" name='country'  onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Pin Code</label>
                    <input type="number" name='pincode'  onChange={this.handleChange} required/><br/>
                    {/* <label htmlFor="">Donor Status</label><br></br> */}
                    {/* <input id="donor_status" name="donor_availablity" checked type="radio" onChange={this.handleChange} required/><br/> */}
                    {/* <label htmlFor="">Donor Status</label>  Available &nbsp; */}
                    {/* <input id="donor_status" name="donor_availablity"  type="radio" defaultChecked/>Available<br/>
                    <input id="donor_status_1" name="donor_availablity"  type="radio"/> Not Available<br/><br/> */}
                    <label htmlFor="">Email</label>
                    <input type="email" name='email'  onChange={this.handleChange} required /><br/>
                    <label htmlFor="">Eff Date</label>
                    <input type="date" name="effectiveDate" onChange={this.handleChange} required/><br/>
                   
                    <input type="submit" value="POST"/>
            </form>
            </div>
        );
    }
}

export default PatientRegister;


