import React from 'react';
import axios  from 'axios';

import './DonorRegister.css';
const proxyurl = "https://cors-anywhere.herokuapp.com/"
let url1="http://localhost:1011/addPatient";
let url = proxyurl + url1;
class DonorRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state={
       newdonorList:{
        "donor_id":0,
        "donor_name":"",
        // "dob":"",
        // "blood_group":"",
        // "phone_number":0,
        
        // "address":
        // {
        // "city":"",
        // "state":"",
        // "country":"",
        // "pincode":0,
        // "line":""
        // },
        
        // "donor_availablity":true,
        "email":"",
        // "effective_date":""
    }
        }
    }


    handleChange =(event) =>{
       
        let name = event.target.name;
        let value =event.target.value;
         // console.log(value)
          this.setState(prevState =>( {newdonorList:{...prevState.newdonorList,[name]:value}}));
          //console.log("This is : " + JSON.stringify(this.state.newdonorList))
      }

      handleSubmit =(event) =>
      {
 
    //     var headers = {
    //       'Content-Type': 'application/json', 
    //       'Access-Control-Allow-Methods': 'PUT',
    //       "Access-Control-Allow-Origin": "*"
    //   };
          event.preventDefault();
          console.log(this.state.newdonorList);
        //   axios.post(url1,this.state.newdonorList,headers)
         fetch(url1,{
            "method":"POST",
            "body":JSON.stringify({
                "patient_id": 4,
                "patient_name": "shubham",
                "dob": "2019-09-05",
                "blood_group": "AB+",
                "phone_number": "34534535345",
                "email": "shubham@gmail.com",
                "effective_date": "2018-09-03",
                "address": {
                  "user_id": 3,
                  "line": "thoraipakkam",
                  "city": "chennai",
                  "state": "tamil nadu",
                  "country": "india",
                  "pincode": 600119
                }
              }),
            headers:{
                "Content-Type":"application/json"
                // "credentials":"include"
            },
        })
        .then(resp=>{ console.log(resp);console.log(resp.status)});
      }
    render() {
        return (
            <div >         
            <form onSubmit={this.handleSubmit}>  
                    <label htmlFor="">Donor Id</label>
                    <input type="number" name='donor_id' id="donor_id" ref="donor_id" onChange={this.handleChange} required /><br/>
                    <label htmlFor="">Donor Name</label>
                    <input type="text" name="donor_name" id="donor_name" ref="donor_name"  onChange={this.handleChange} required/><br/>
                    {/* <label htmlFor="">DOB</label>
                    <input type="date" name="dob" ref="dob" id="dob"onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Blood Group</label>
                     <select name="blood_group">
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                    </select><br/> 
                    <label htmlFor="">Phone Number</label> 
                    <input type="number" name='phone_number' id="phone_number" ref="phoneNumber" onChange={this.handleChange} required/><br/>
                    <label htmlFor="" name="address" id="address" ref="address"  onChange={this.handleChange}>Address</label><br/>
                    <label htmlFor="">Line</label>
                     <input type="text" name='line' id="line" ref="line"   required /><br/>
                    <label htmlFor="">State</label>
                    <input type="text" name='state' id="state" ref="state"  required/><br/>
                    <label htmlFor="">City</label>
                    <input type="text" name='city' id="city" ref="city"  required/><br/>
                    <label htmlFor="">Country</label>
                    <input type="text" name='country' id="country" ref="country" required/><br/>
                    <label htmlFor="">Pin Code</label>
                    <input type="number" name='pincode' id="pincode" ref="pincode" required/><br/>
                    <label htmlFor="">Donor Status</label><br></br>
                    <input id="donor_status" name="donor_availablity" checked type="radio" onChange={this.handleChange} required/><br/>
                    <label htmlFor="">Donor Status</label>  Available &nbsp;
                    { <input id="donor_status" name="donor_availablity"  type="radio" defaultChecked/>Available<br/>
                    <input id="donor_status_1" name="donor_availablity"  type="radio"/> Not Available<br/><br/>*/
                    <label htmlFor="">Email</label> }  
                    <input type="email" name='email' id="email" ref="email" onChange={this.handleChange} required /><br/>
                    {/* <label htmlFor="">Eff Date</label>
                    <input type="date" name="effdate" ref="effdate" id="effdate"onChange={this.handleChange} required/><br/> */}
                   
                    <input type="submit" value="POST"/>
            </form>
            </div>
        );
    }
}

export default DonorRegister;


