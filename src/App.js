// // Packages and Libraries
// import React from 'react';
// import { Route, Link } from 'react-router-dom';
// // Components
// import Home from './components/Home';
// import Dashboard from './components/Dashboard';
// import LoginForm from './components/LoginForm';
// import Login from './components/Login';
// // Helper functions
// import { login } from './services/apiService';
// //CSS
// import './App.css';
// import ProtectedRoute from './components/ProtectedRoute';

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isSignedIn: false,
//       user: {}
//     }
//   }

//   loginUser = async (credentials) => {
//     try {
//       const user = await login(credentials)

//       this.setState({
//         isSignedIn: true,
//         user: user
//       })
//     } catch (error) {
//       throw error
//     }
//   }

//   render() {
//     const { user, isSignedIn } = this.state

//     return (
//       <div className="App">
//         <nav>
//           <div><Link to="/">Home</Link></div>

//           {
//             isSignedIn &&
//             <div><Link to="/dashboard">Dashboard</Link></div>
//           }

//           {
//             !isSignedIn &&
//             <div><Link to="/login">Login</Link></div>
//           }
//         </nav>

//         <main>
//           <Route exact path="/" component={Home} />
//           {/* <Route path="/dashboard" component={Dashboard} /> */}
//           <ProtectedRoute
//             path="/dashboard"
//             user={user}
//             component={Dashboard}
//           />
//           <Route
//             path="/login"
//             render={
//               (props) =>
//                 <Login
//                   {...props}
//                   handleLogin={this.loginUser}
//                   isSignedIn={isSignedIn}
//                 />
//             }
//           />
//         </main>
//       </div>
//     );
//   }
// }

// export default App;













// Packages and Libraries
import React from 'react';
import { Route, Link } from 'react-router-dom'
// Components
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from './components/Signup'
import ProtectedRoute from './components/ProtectedRoute'
// Helper functions
import { login, getProfile, signup } from './services/apiService'
import authService from './services/authService';
// Css
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isSignedIn: false,
      user: {}
    }
  }

  async componentDidMount() {
    try {
      const fetchUser = await getProfile()

      this.setState(state => {
        return {
          isSignedIn: authService.isAuthenticated(),
          user: fetchUser
        }
      })
    } catch (e) {
      throw e
    }
  }

  loginUser = async (credentials) => {
    try {
      const user = await login(credentials)
      this.setState(state => {
        return {
          isSignedIn: true,
          user: user
        }
      })
      console.log(this.state.user)
    }
    catch (e) {
      throw e
    }
  }

  signupUser = async (credentials) => {
    try {
      const user = await signup(credentials)
      this.setState(state => {
        return {
          isSignedIn: true,
          user: user
        }
      })
      console.log(this.state.user)
    }
    catch (e) {
      throw e
    }
  }

  signOutUser = async () => {
    authService.signOut()

    this.setState(state=>{
      return{
        isSignedIn: false,
        user: {}
      }
    })
  }

  render() {
    const { isSignedIn, user } = this.state

    return (
      <div className="App">
        <nav>
          <div><Link to="/">Portfolio</Link></div>

          {
            isSignedIn &&
            <div><Link to="/dashboard">Dashboard</Link></div>
          }

          {
            !isSignedIn ? (
              <div><Link to="/login">Login</Link></div>
            ) : (
              <button onClick={this.signOutUser} >Sign Out</button>
            )
          }
        </nav>

        <main>
          <Route exact path="/" user={user} component={ProtectedRoute} />
          {/* <ProtectedRoute
            path="/"
            user={user}
            component={Dashboard}
          /> */}
          <Route
            path="/login"
            render={(props) =>
              <Login {...props} handleLogin={this.loginUser} isSignedIn={isSignedIn} />
            }
          />
          <Route
            path="/signup"
            render={(props) =>
              <Signup {...props} handleSignup={this.signupUser} isSignedIn={isSignedIn} />
            }
          />
        </main>
      </div>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import Portfolio from './components/Portfolio'
// import Login from './components/Login'
// import './App.css';

// require('dotenv').config({path: __dirname + '/.env'})

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       user: null,
//       loggedIn: false
//     }
//   }

//   checkLogin = () => {
//     const user = localStorage.getItem('token')
//     if (user) {
//       this.setState({user: user, loggedIn: true})
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         {this.state.user ? <Portfolio /> : <Login />}
//       </div>
//     );
//   }
// }

// export default App;
