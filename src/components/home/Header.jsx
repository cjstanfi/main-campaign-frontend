import React, {useEffect, useState} from "react";
import logo from "../../assets/img/logo.svg";
import navArrow from "../../assets/img/navArrow.png";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";
import { Link } from "react-router-dom";
import {useAuth0} from "@auth0/auth0-react";
import Login from "../login/auth0/login";
import Logout from "../login/auth0/logout";
import LoadingSpinner from "../login/auth0/LoadingSpinner";
import {useDispatch} from "react-redux";
import {setMainCampaignAccountId} from "../../reducer/MainCampaignAccountSlice";

function Header(props) {
  const [navistoggledsub, setnavistoggledsub] = useState(false);
  const { isAuthenticated, isLoading, user } = useAuth0();
  const dispatch = useDispatch()

  function handleClick() {
    setnavistoggledsub(!navistoggledsub);
  }
  let setnavistoggledsubnew = navistoggledsub ? "active" : null;

  useEffect(() => {
    console.log(user)
    if(user?.sub) {
      dispatch(setMainCampaignAccountId(user.sub))
    }
  }, [user])

  useEffect(() => {
    console.log("ENV VARIABLES: ", process.env.REACT_APP_MAIN_CAMPAIGN_API_URL)
  })

  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg m-0 desktop my-4">
        <div className="container nav-container">
          <div
            className="navbar-nav collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <Link
              to={"/"}
              className="navbar-brand mt-lg-0 me-auto mt-0 d-flex align-items-center"
            >
              <img src={logo} height="" alt="Main Campaign" loading="lazy" />
            </Link>
            <ul className="navbar-nav m-auto home_nav">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product <img src={navArrow} alt="Logo" className="navArrow" />
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item">Action</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Another action</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Something else here</Link>
                  </li>
                </ul>
              </li>

              {/* <li className="nav-item dropdown mx-3">
                <Link
                  className="nav-link dropdown-toggle mx-2"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to={"/dashboard"} className="dropdown-item">Dashboard</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Resources 2</Link>
                  </li>
                </ul>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link">Pricing</Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  Our Approach
                  <img src={navArrow} alt="Logo" className="navArrow" />
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item">Approach 1</Link>
                  </li>
                  <li>
                    <Link className="dropdown-item">Approach 2</Link>
                  </li>
                </ul>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <Link to={"/dashboard"} className="nav-link">
                    My Dashboard
                  </Link>
                </li>
              )}
            </ul>
            <div className="d-flex ms-auto align-items-center">
              {
                !isLoading ?
                    (isAuthenticated ? <Logout className="btn theme-btn ms-4"/> : <Login className="btn theme-btn ms-4"/>)
                    : <LoadingSpinner/>
              }
              <button className="btn theme-btn ms-4">Start Free Trial</button>
            </div>
          </div>
        </div>
      </nav>
      <div className="row m-0 position-relative mobile-menu-cont mobile">
        <header className="nav-top d-flex align-items-center">
          <Link to={"/"} className="navbar-brand me-auto mt-lg-0 ">
            <img src={logo} height="" alt="Logo" loading="lazy" />
          </Link>
          <span
            className="hamburger material-icons px-2 ms-auto"
            id="ham"
            onClick={props.clickEvent}
          >
            <svg
              width="23"
              height="15"
              viewBox="0 0 23 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.5 15H0V12.5H22.5V15ZM22.5 0V2.5H0V0H22.5ZM22.5 8.75H7.5V6.25H22.5V8.75Z"
                fill="#0A0A0D"
              />
            </svg>
          </span>
        </header>

        <nav className="nav-drill">
          <ul className="nav-items nav-level-1">
            <li className={`nav-item nav-expand ${setnavistoggledsubnew}`}>
              <Link onClick={handleClick} className="nav-link nav-expand-link">
                Product
                <svg
                  className="mx-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
              <ul className="nav-items nav-expand-content">
                <li className="nav-item">
                  <Link
                    className="nav-link nav-back-link"
                    onClick={handleClick}
                  >
                    <svg
                      className="mx-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z"
                        fill="white"
                      ></path>
                    </svg>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Product 1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Product 2</Link>
                </li>
              </ul>
            </li>
            {/* <li className={`nav-item nav-expand ${setnavistoggledsubnew}`}>
              <Link onClick={handleClick} className="nav-link nav-expand-link">
                Resources
                <svg
                  className="mx-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
              <ul className="nav-items nav-expand-content">
                <li className="nav-item">
                  <Link
                    className="nav-link nav-back-link"
                    onClick={handleClick}
                  >
                    <svg
                      className="mx-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z"
                        fill="white"
                      ></path>
                    </svg>{" "}
                    Back
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Resources 1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Resources 2</Link>
                </li>
              </ul>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link">Pricing</Link>
            </li>
            <li className={`nav-item nav-expand ${setnavistoggledsubnew}`}>
              <Link onClick={handleClick} className="nav-link nav-expand-link">
                Approach
                <svg
                  className="mx-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z"
                    fill="white"
                  ></path>
                </svg>
              </Link>
              <ul className="nav-items nav-expand-content">
                <li className="nav-item">
                  <Link
                    className="nav-link nav-back-link"
                    onClick={handleClick}
                  >
                    <svg
                      className="mx-1"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.59 8.59009L12 13.1701L7.41 8.59009L6 10.0001L12 16.0001L18 10.0001L16.59 8.59009Z"
                        fill="white"
                      ></path>
                    </svg>{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Approach 1</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link">Approach 2</Link>
                </li>
              </ul>
            </li>

            {isAuthenticated && (
              <li className="nav-item">
                <Link to={"/dashboard"} className="nav-link">
                  My Dashboard
                </Link>
              </li>
            )}
            <div className=" ms-auto mobile-color">
              {
                !isLoading ?
                    (isAuthenticated ? <Logout className="btn theme-btn ms-4"/> : <Login className="btn theme-btn ms-4"/>)
                    : <LoadingSpinner/>
              }
              <button className="btn theme-btn ms-4">Start Free Trial</button>
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
