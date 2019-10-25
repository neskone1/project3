import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import ShoeLogo from "../../ShoeLogo.svg";
import ReactDOM from "react-dom";
import { GoogleLogin } from "react-google-login";
import { GoogleLogout } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
    <header>
      <div>
        <img id="shoeLogoNav" alt={"shoes"} src={ShoeLogo} />
      </div>
      <div className="logo">
      </div>





      <nav >
        <ul>
          <li className="first">

            <GoogleLogin
              clientId="794209733864-0sh0q593bh0sidd62si1f8ai7tkno8rh.apps.googleusercontent.com"
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn aqua-gradient color-block mb-3 mx-auto waves-effect">Login</button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />

          </li>

          <li className="second">
            <Link to="/">
              <button className="btn peach-gradient color-block mb-3 mx-auto waves-effect">
                About
      </button>
            </Link>
          </li>

          <li>
            <Link to="/newsFeed">
              <button className="btn peach-gradient color-block mb-3 mx-auto waves-effect">
                News Feed
      </button>
            </Link>
          </li>

          <li>
            <Link

              to="/myRoom">
              <button className="btn peach-gradient color-block mb-3 mx-auto waves-effect">
                My Room
              </button>

            </Link>
          </li>
          <li>
            <Link
              to="/Search">
              <button className="btn aqua-gradient color-block mb-3 mx-auto waves-effect">
                Search
              </button>

            </Link>
          </li>

          <li>

            <GoogleLogout
              clientId="794209733864-0sh0q593bh0sidd62si1f8ai7tkno8rh.apps.googleusercontent.com"
              render={renderProps => (
                <button onClick={renderProps.onClick} disabled={renderProps.disabled} className="btn aqua-gradient color-block mb-3 mx-auto waves-effect">Logout</button>
              )}
              // buttonText="Logout"
              // onLogoutSuccess={logout}
              onLogoutSuccess={responseGoogle}
              onFaliure={responseGoogle}
            >
            </GoogleLogout>

          </li>



        </ul>

      </nav>

    </header>

  );
}

export default Header;
