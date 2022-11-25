import React, { useRef, useState } from "react";
import arrowup from "../../assets/img/arrow-up.svg";
import arrowdown from "../../assets/img/arrow-down.svg";
import "../../assets/css/mdb.min.css";
import "../../assets/css/style.css";
import "../../assets/css/slick.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function LoginExpand1ContentStep1(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data) {
      navigate("/loginstep2");
    }
  };
  const password = useRef({});
  password.current = watch("password", "");
  const [passwordShown, setPasswordShown] = useState(false);
  const [repasswordShown, setrePasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const togglerePassword = () => {
    setrePasswordShown(!repasswordShown);
  };
  return (
    <div className="row p-0 position-relative login-section secondStep animation-element bounce-up in-view">
      <div className="container main-container subject">
        <h2 className="text-center color-black2">Let’s go!</h2>
        <div className="row m-0 p-0 position-relative ">
          <div className="row m-0 p-0 position-relative desktop ">
            <div className="d-flex justify-content-center my-4 ">
              <div className="step">
                <div className="circle"></div>
                <h5 className="font-600 font-14 color-black1 mt-2">Register</h5>
              </div>
              <div className="line bg-line"></div>
              <div className="step mleft">
                <div className="circle bg-grey"></div>
                <h5 className="font-600 font-14 color-black1 mt-2">
                  Questions
                </h5>
              </div>
              <div className="line bg-line mleft2"></div>
              <div className="step mleft">
                <div className="circle bg-grey"></div>
                <h5 className="font-600 font-14 color-black1 mt-2">
                  Connect with
                </h5>
              </div>
              <div className="line bg-line mleft1"></div>
              <div className="step mleft">
                <div className="circle bg-grey"></div>
                <h5 className="font-600 font-14 color-black1 mt-2">
                  Connect CRM
                </h5>
              </div>
            </div>
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
                  <circle cx="21" cy="21.0273" r="21" fill="#F5F5FF" />
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
            <img src={arrowup} className="position-absolute" alt="" />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="container-style py-sm-4 py-2 mt-sm-4 mt-3">
              <div className="d-flex  justify-content-center">
                <div className="d-flex  flex-column">
                  <div className="d-flex m-flex-column">
                    <div className="d-flex flex-column">
                      <label className="color-black2 mt-sm-4 mt-3">
                        Full name
                      </label>
                      <input
                        className="custom-input mt-2"
                        type="text"
                        placeholder="John Doe"
                        name="fullname"
                        {...register("fullname", {
                          required: true,
                        })}
                        aria-invalid={errors.name ? "true" : "false"}
                      />
                      {errors.fullname &&
                        errors.fullname.type === "required" && (
                          <span>Fullname is required</span>
                        )}
                    </div>
                    <div className="d-flex flex-column ps-sm-5">
                      <label className="color-black2 mt-sm-4 mt-3">
                        Company name
                      </label>
                      <input
                        className="custom-input mt-2"
                        type="text"
                        placeholder="Lorem Org"
                        name="compname"
                        {...register("compname", {
                          required: true,
                        })}
                        aria-invalid={errors.compname ? "true" : "false"}
                      />
                      {errors.compname &&
                        errors.compname.type === "required" && (
                          <span>Company name is required</span>
                        )}
                    </div>
                  </div>
                  <div className="d-flex m-flex-column">
                    <div className="d-flex flex-column">
                      <label className="color-black2 mt-sm-3 mt-3">Email</label>
                      <input
                        className="custom-input mt-2"
                        type="text"
                        placeholder="example@site.com"
                        name="email"
                        {...register("email", {
                          required: "Email Address is required",
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <span>Email Address is required"</span>
                      )}
                    </div>
                    <div className="d-flex flex-column ps-sm-5">
                      <label className="color-black2 mt-sm-3 mt-3">Phone</label>
                      <input
                        className="custom-input mt-2"
                        type="text"
                        placeholder="00 800 12574"
                        name="phone"
                        {...register("phone", {
                          required: true,
                          maxLength: 10,
                          minLength: 10,
                        })}
                        aria-invalid={errors.phone ? "true" : "false"}
                      />
                      {errors.phone && errors.phone.type === "required" && (
                        <span>Contact Number is required"</span>
                      )}
                      {errors.phone && errors.phone.type === "maxLength" && (
                        <span>Please enter a valid contact number</span>
                      )}
                      {errors.phone && errors.phone.type === "minLength" && (
                        <span>Please enter a valid contact number</span>
                      )}
                    </div>
                  </div>
                  <div className="d-flex m-flex-column">
                    <div className="position-relative d-flex flex-column">
                      <label className="color-black2 mt-sm-3 mt-3">
                        Choose password
                      </label>
                      <input
                        className="custom-input mt-2"
                        type={passwordShown ? "text" : "password"}
                        placeholder="Min. 8 Characters"
                        name="password"
                        {...register("password", {
                          required: true,
                          maxLength: 8,
                          minLength: 8,
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                      />

                      {errors.password &&
                        errors.password.type === "required" && (
                          <span>Password is required"</span>
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
                    <div className="position-relative d-flex flex-column ps-sm-5">
                      <label className="color-black2 mt-sm-3 mt-3">
                        Re-enter password
                      </label>
                      <input
                        className="custom-input mt-2"
                        type={repasswordShown ? "text" : "password"}
                        placeholder="Min. 8 Characters"
                        name="confirmPassword"
                        {...register("confirmPassword", {
                          required: true,
                          maxLength: 8,
                          minLength: 8,
                          validate: (value) =>
                            value === password.current ||
                            "The passwords do not match",
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                      />
                      {errors.confirmPassword && (
                        <p>{errors.confirmPassword.message}</p>
                      )}
                      {errors.confirmPassword &&
                        errors.confirmPassword.type === "maxLength" && (
                          <span>Max length exceeded</span>
                        )}
                      {errors.confirmPassword &&
                        errors.confirmPassword.type === "minLength" && (
                          <span>Please enter atleast 8 Characters</span>
                        )}
                      {errors.confirmPassword &&
                        errors.confirmPassword.type === "required" && (
                          <span>Confirm Password is required</span>
                        )}

                      <div className="position-absolute new-ab">
                        <Link
                          className="font-14 color-black1 show-label font-600"
                          onClick={togglerePassword}
                        >
                          SHOW
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-center my-sm-5 my-4 flex-column">
                <button className="btn theme-btn w-auto" type="submit">
                  Get started with Main Campaign
                </button>
                <Link className="color-black2 font-14 mt-2" alt="">
                  or sign up with SSO
                </Link>
              </div>
            </div>
          </form>
          <div className="position-relative arrow-down">
            <img src={arrowdown} className="position-absolute" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
