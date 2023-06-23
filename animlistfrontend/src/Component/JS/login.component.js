import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../CSS/login.component.css";
import { ToastContainer, toast } from "react-toastify";
import { wait } from "@testing-library/user-event/dist/utils";

export default function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [loginRequest, setLoginRequest] = useState({
    email: "",
    password: "",
  });
  const loginhandler = async (e, field) => {
    setLoginRequest({
      ...loginRequest,
      [field]: e.target.value,
    });
  };
  const formhandler = (event) => {
    console.log(loginRequest);
    event.preventDefault();
    axios.post("http://localhost:8080/login", loginRequest).then(
      (res) => {
        console.log(res.data);

        if (res.data.message === "Email not exits") {
          alert("Email not exits");
        } else if (res.data.message === "Login Success") {
          // setId(res.data.id);
          // toast.success(res.data.message);
          navigate("/animes");
        } else {
          alert("Incorrect Email and Password not match");
        }
      },
      (fail) => {
        console.error(fail); // Error!
      }
    );
  };

  return (
    <div>
      <div className="logincontainer">
        <div className="row">
          <div className="col-md-6">
            <div className="logincard">
              <div className="text-center">
                <h1>Login</h1>
                <h6>enter email and password</h6>
              </div>
              <form onSubmit={formhandler}>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    formControlName="email"
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value={loginRequest.email}
                    onChange={(e) => {
                      loginhandler(e, "email");
                    }}
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    formControlName="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={loginRequest.password}
                    onChange={(e) => {
                      loginhandler(e, "password");
                    }}
                  />
                </div>
                <div>
                  <button type="submit" className="btn btn-success ">
                    Login
                  </button>
                </div>
              </form>
              <p style={{ color: " white", marginTop: "10px" }}>
                New User? <Link to="/signUp">Click to signup</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
