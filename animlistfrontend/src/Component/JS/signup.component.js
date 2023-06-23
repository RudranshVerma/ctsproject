import React from "react";
import "../CSS/signup.component.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const [username, setusername] = useState();
  const [useremail, setuseremail] = useState();
  const [password, setpassword] = useState();

  const handlesignup = async(e) => {
    e.preventDefault();

    await axios.post("http://localhost:8080/createUser", {
      userName: username,
      emailId: useremail,
      password: password
    }).then((res)=>console.log(res.data));
    // console.log(username);
    // console.log(useremail);
    // console.log(password);
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="signupcard">
              <div class="text-center">
                <h1>SignUp</h1>
                <h6>Register yourself</h6>
              </div>

              <form onSubmit={handlesignup}>
                <div class="mb-3">
                  <label class="form-label">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={username}
                    onChange={(e) => {
                      setusername(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    value={useremail}
                    onChange={(e) => {
                      setuseremail(e.target.value);
                    }}
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                </div>
                <button
                  type="submit"
                  class="btn btn-success"
                  
                >
                  SignUp
                </button>
              </form>

              <p style={{ color: " white", marginTop: "10px" }}>
                Already Resgistered? <Link to="/login"> click to Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
