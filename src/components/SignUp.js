import React from 'react'
import axios from 'axios'
import store from '../redux/store'

class SignUp extends React.Component{
  signUp = (e) => {
    e.preventDefault()
    let username = this.UserNameInput.value
    let password = this.passwordInput.value
    // let repeatpassword = this.repeatInput.value
    let data = {username, password}
    axios.post('http://192.168.0.122:3008/user/signup', data)
      .then( res =>{
        if (res.data.username) {
          store.dispatch({type:'AUTH_USER', username:res.data.username})
          this.form.reset()
        }
      })
      .catch( err => console.log(err.response.data.msg) )
  }
  // componentDidMount(){
  //   axios.get('http://192.168.0.122:3008/user/data')
  //     .then( res => console.log(res))
  // }
  render(){
    return(
      <div>
        <h1>注册</h1>
        <form ref={ value => this.form = value } onSubmit={this.signUp}>
          <div>
            <input ref={value => this.UserNameInput = value} type="text" placeholder="用户名" />
          </div>
          <div>
            <input ref={value => this.passwordInput = value} type="password" placeholder="密码" />
          </div>
          <div>
            <input ref={value => this.repeatInput = value} type="password" placeholder="确认密码" />
          </div>
          <div>
            <button type="submit">注册</button>
          </div>
        </form>
      </div>
    )
  }
}


export default SignUp
