import React, { Component } from "react";
import axios from "axios";
import "./join.css";

class join extends Component {
  constructor(props) {
    super(props);
    
  }
  
  send = () => {
    let form = new FormData()
    form.append('id', this.userID) 
    form.append('pwd',this.userPass)
    axios.post(`http://localhost:8000/join`, { 
    headers: { 'Content-type': 'application/x-www-form-urlencoded', }, id : 'hong', pwd: '12345' })
    .then( response => { console.log('response', JSON.stringify(response, null, 2)) })
    .catch( error => { console.log('failed', error) });
  }
  
//  form.append('id', this.userID) form.append('pwd',this.userPass) axios.post(`http://localhost:8000/api/auth`, form) .then( response => { console.log('response : ', JSON.stringify(response, null, 2)) }).catch( error => { console.log('failed', error) })

  

  render() {
    return (
      <div className="JoinContainer">
          <div className="JoinInput">
        
          </div>
      </div>
    );
  }
}

export default join;
