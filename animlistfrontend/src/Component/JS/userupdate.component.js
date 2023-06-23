import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const UserUpdate = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [emailId, setEmailId] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handlecancel = () => {
    navigate("/myprofile");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // Create an object with the updated data

    console.log(props.userId);
    // Call the update method from the Axios service
    await axios
      .put("http://localhost:8080/updateUserById/" + `${userId}`, {
        userName: userName,
        password: password,
        emailId: emailId,
        role: role,
      })
      .then((response) => {
        console.log(response)
        toast.success("Update successful");
        navigate("/myprofile")
        // Additional actions after successful update
      })
      .catch((error) => {
        console.error("Update failed", error);
        // Additional error handling
      });
  };

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="signupcard">
              <div class="text-center">
                <h1>Update User</h1>
                <h6>Enter New Details</h6>
              </div>

              <form onSubmit={handleUpdate}>
                <div class="mb-3">
                  <label class="form-label">User Id</label>
                  <input
                    type="text"
                    class="form-control"
                    value={userId}
                    onChange={(e) => {
                      setUserId(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Full Name</label>
                  <input
                    type="text"
                    class="form-control"
                    value={userName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Email address</label>
                  <input
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    value={emailId}
                    onChange={(e) => {
                      setEmailId(e.target.value);
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
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Role</label>
                  <input
                    type="text"
                    class="form-control"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value);
                    }}
                  />
                </div>

                <button type="submit" class="btn btn-success">
                  update
                </button>
                <button onClick={handlecancel} class="btn btn-warning">
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default UserUpdate;
