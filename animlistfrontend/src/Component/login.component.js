import React from "react";
import "./login.component.css";

export default function Login() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="logincard">
              <div class="text-center">
                <h1>Login</h1>
                <h6>enter email and password</h6>
              </div>
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    formControlName="email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    formControlName="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                </div>
                <div style={{}}>
                  <button type="submit" class="btn btn-success ">
                    Login
                  </button>
                </div>
              </form>
              {/* <a style={{color:" white",marginTop:"10px"}}> */}
              New User? click to signup
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
