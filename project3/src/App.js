import React  from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import About from "./pages/About";
import myRoom from "./pages/myRoom";
import Search from "./pages/Search";
import newsFeed from "./pages/newsFeed";
import Login from "./pages/Login";
// import Logout from "./pages/Logout";
import Navbar from "./components/headerComponent/header";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Main from "./components/Main";

// import Auth from "./service";


// class AppLogin extends Component {
//   constructor(props) {
//     super(props);

//     auth.loginCallback = this.loggedIn.bind(this);
//     auth.logoutCallback = this.loggedOut.bind(this);

//     this.state = { loggedIn: false };
//   }

//   loggedIn() {
//     this.setState({ loggedIn: true });
//   }

//   loggedOut() {
//     this.setState({ loggedIn: false });
//   }

//   render() {
//     return (
//       <div>
//         {this.state.loggedIn ? <Login /> : <newsFeed />}
//         {this.state.loggedIn ? (
//           <button onClick={() => auth.logout()} className="log-in">
//             Logout
//           </button>
//         ) : (
//           <button onClick={() => auth.login()} className="log-in">
//             Login
//           </button>
//         )}
//       </div>
//     );
//   }
// }

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/myRoom" component={myRoom} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/newsFeed" component={newsFeed} />
          <Route exact path="/Login" component={Login} />
          {/* <Route exact path="/" component={Logout} />  */}
                
          
        </Wrapper>
        {/* <Main /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
