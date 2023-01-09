import React, {useEffect, useRef, useState} from "react";
import arrowup from "../../assets/img/arrow-up.svg";
import arrowdown from "../../assets/img/arrow-down.svg";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setMainCampaignAccountData} from "../../reducer/MainCampaignAccountSlice";
import Header from "../home/Header";
import makeMainCampaignLogin from "../../models/main-campaign-account-login-model";
import makeMainCampaignAccount from "../../models/main-campaign-account-model";
import {useAuth0} from "@auth0/auth0-react";
import Login from "./auth0/login";


export default function LoginExpandContent(props) {
  const [passwordShown, setPasswordShown] = useState(false);
  const { loginWithRedirect } = useAuth0();


  const dispatch = useDispatch()
  const navigate = useNavigate();


  const password = useRef({});



  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  password.current = watch("password", "");


  const LoginButton = () => {
    loginWithRedirect()
  };


  const onSubmit = async (data) => {
    if (data) {
      const body = makeMainCampaignLogin(data)
     await axios.post("https://test.api.maincampaign.com/main-campaign-account/login", body).then(async ({data}) => {
       const validMainCampaignAccount = makeMainCampaignAccount(data.currentAccount)
       dispatch(setMainCampaignAccountData(validMainCampaignAccount))

     }).catch(error => {
        //Print Error message. Email or password probably incorrect
        console.log(error)
      })
    }
  };

  // useEffect(() => {
  //   if(auth) {
  //     navigate("/dashboard");
  //   }
  // },[auth])

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
      <div>
        <Header/>
        <div className="row pt-5 mt-5 position-relative login-section secondStep animation-element bounce-up in-view">
          <div className="container main-container subject">
            <h2 className="text-center color-black2">Login</h2>
            <div className="row m-0 p-0 position-relative ">
              <div className="row m-0 p-0 position-relative desktop ">
              </div>
              <div className="row m-0 p-0 position-relative mobile">
                <div className="d-flex align-items-center justify-content-center mt-4 mb-2">
                  <Link to={"/"}>
                    <svg
                        width="42"
                        height="43"
                        viewBox="0 0 42 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="21" cy="21.0273" r="21" fill="#F5F5FF"/>
                      <g clipPath="url(#clip0_33_1480)">
                        <path
                            d="M24.41 25.6173L19.83 21.0273L24.41 16.4373L23 15.0273L17 21.0273L23 27.0273L24.41 25.6173Z"
                            fill="#3B5998"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_33_1480">
                          <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="translate(9 9.02734)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                  <div className="ellipse d-flex align-items-center justify-content-center">
                    <h4 className="font-24 text-center color-white d-flex align-items-center justify-content-center">
                      1/4
                    </h4>
                  </div>
                  <Link to={"/loginstep2"}>
                    <svg
                        width="42"
                        height="43"
                        viewBox="0 0 42 43"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                          r="21"
                          transform="matrix(-1 0 0 1 21 21.0273)"
                          fill="#F5F5FF"
                      />
                      <g clipPath="url(#clip0_33_1483)">
                        <path
                            d="M17.59 25.6173L22.17 21.0273L17.59 16.4373L19 15.0273L25 21.0273L19 27.0273L17.59 25.6173Z"
                            fill="#3B5998"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_33_1483">
                          <rect
                              width="24"
                              height="24"
                              fill="white"
                              transform="matrix(-1 0 0 1 33 9.02734)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
                <div className="d-flex justify-content-center">
                  <h5 className="font-600 font-12 color-black1">Register</h5>
                </div>
              </div>
              <div className="position-relative arrow-up">
                <img src={arrowup} className="position-absolute" alt=""/>
              </div>
              <form onSubmit={handleSubmit(LoginButton)}>
                <div className="container-style py-sm-4 py-2 mt-sm-4 mt-3">
                  <div className="d-flex  justify-content-center">
                    <div className="d-flex  flex-column">
                      <div className="d-flex m-flex-column">
                        <div className="d-flex flex-column">
                          <label className="color-black2 mt-sm-4 mt-3">
                            E-mail
                          </label>
                          <input
                              className="custom-input mt-2"
                              type="text"
                              placeholder=""
                              name="email"
                              {...register("email", {
                                required: true,
                              })}
                              aria-invalid={errors.name ? "true" : "false"}
                          />
                          {errors.fullname &&
                              errors.fullname.type === "required" && (
                                  <span>E-Mail is required</span>
                              )}
                        </div>
                      </div>
                      <div className="d-flex m-flex-column">
                        <div className="position-relative d-flex flex-column">
                          <label className="color-black2 mt-sm-3 mt-3">
                            Password
                          </label>
                          <input
                              className="custom-input mt-2"
                              type={passwordShown ? "text" : "password"}
                              placeholder=""
                              name="password"
                              {...register("password", {
                                required: true,
                                maxLength: 64,
                                minLength: 8,
                              })}
                              aria-invalid={errors.password ? "true" : "false"}
                          />

                          {errors.password &&
                              errors.password.type === "required" && (
                                  <span>Password is required</span>
                              )}
                          {errors.password &&
                              errors.password.type === "maxLength" && (
                                  <span>Max length exceeded</span>
                              )}
                          {errors.password &&
                              errors.password.type === "minLength" && (
                                  <span>Please enter atleast 8 Characters</span>
                              )}
                          <div className="position-absolute new-ab">
                            <Link
                                className="font-14 color-black1 show-label font-600"
                                onClick={togglePassword}
                            >
                              SHOW
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center my-sm-5 my-4 flex-column">
                    {/*<button className="btn theme-btn w-auto" type="submit">*/}
                    {/*  Login*/}
                    {/*</button>*/}
                    <Login/>
                    <Link className="color-black2 font-14 mt-2" to={"/loginstep1"} alt="">
                      or sign up
                    </Link>
                  </div>
                </div>
              </form>
              <div className="position-relative arrow-down">
                <img src={arrowdown} className="position-absolute" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
