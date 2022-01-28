import React, { Component } from "react";
import axios from "axios";
import "./join.css";

class join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user:
      {
        id : '',
        password : ''
      }
    
  }
}
    onIdHandler = (e) => {
      this.setState({userid}) 
    }
    send = () => {
      let form = new FormData()
      form.append('id', this.userID) 
      form.append('pwd',this.userPass)
      axios.post(`http://localhost:4000/post`, { 
      headers: { 'Content-type': 'application/x-www-form-urlencoded', }, id : 'hong', pwd: '12345' })
      .then( response => { console.log('response', JSON.stringify(response, null, 2)) })
      .catch( error => { console.log('failed', error) });
    }
  
//  form.append('id', this.userID) form.append('pwd',this.userPass) axios.post(`http://localhost:8000/api/auth`, form) .then( response => { console.log('response : ', JSON.stringify(response, null, 2)) }).catch( error => { console.log('failed', error) })

  

  render() {
    return (
      <div className="JoinContainer">
          <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={this.send}>
            <label>name</label>
            <input type="text" value={this.state.user.id} onChange={this.onIdHandler} />{this.state.user.id}
            <label>Password</label>
            <input type="password" value={this.state.user.password} onChange={this.onPasswordHandler} />{this.state.user.password}
            <br />
            <button type="submit">회원 가입</button>
          </form>
      </div>
    );
  }
}

export default join;
