import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Header extends React.Component{
  render(){
    let authStr = (
      <div>
        <Link to="/signup">注册</Link>
        <Link to="/login">登陆</Link>
      </div>
    )
    let userInfo = (
      <div>{this.props.currentUsers}退出</div>
    )
    return(
      <div>
          { this.props.isAuthenticated ? userInfo : authStr}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated:state.account.isAuthenticated,
  currentUsers:state.account.currentUsers
})
export default connect(mapStateToProps)(Header)
