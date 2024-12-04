import Sidepanel from "../Sidepanel/Sidepanel";
import logo from "../../assets/logo.svg";
import "./Navbar.css";
function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container">
          {/*---------navbar--logo---------------*/}
          <div className="navbar-logo">
            <img src={logo} alt="Project Logo" />
          </div>

          {/*---------navbar Links-----------------*/}

          <div className="navbar-links">
            <nav>
              <ul>
                <li>
                  <a href="">aaaaaaaaaaa</a>
                </li>
                <li>
                  <a href="">bbbbbbbbbbb</a>
                </li>
                <li>
                  <a href="">ccccccccccc</a>
                </li>
                <li>
                  <a href="">ddddddddddd</a>
                </li>
                <li>
                  <a href="">eeeeeeeeeee</a>
                </li>
                <button>Nav On</button>
              </ul>
            </nav>
          </div>
          {/*---------navbar Auth Links-----------------*/}
          <div className="navbar-auth-links">
            <ul>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">SignUp</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="navbar-sidepanel">
        <Sidepanel />
      </div>
    </>
  );
}

export default Navbar;
