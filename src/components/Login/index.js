import React from 'react';
import LoginForm from '../LoginForm';
import { Link } from 'react-router-dom';

function Login(props) {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm {...props} />
            <div><Link to="/signup">Signup here</Link></div>
        </div>
    )
}

export default Login

// import React, { Component } from 'react';

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         user: null,
//         email: '',
//         password: ''
//     }
//   }

//   handleSubmit = e => {
//       e.preventDefault()
//       const newEmail = e.target.parentNode[0].value
//       const newPassword = e.target.parentNode[1].value
//       console.log(newEmail, newPassword)
//       this.setState({
//           email: newEmail, 
//           password: newPassword
//       }, ()=>console.log(this.state))
      
//   }

//   render() {
//     return (
//       <div className="login-container">
//         <h3 className="login-header" >Sign IN</h3>
//         <form className="login-form" >
//             <input className="login-form-email" type="text" placeholder="email" />
//             <input className="login-form-pw" type="text" placeholder="password" />
//             <button className="login-form-button" onClick={this.handleSubmit} > Submit </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Login;
