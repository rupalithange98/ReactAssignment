import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v1 as uuid } from 'uuid'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from '@material-ui/core/styles';
import { UsbOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const AddUserComponent = () => {
  const classes = useStyles();
  let history = useHistory();

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");

  let userList = JSON.parse(localStorage.getItem("UserList")) || [];

  const handleAddUser = (e) => {
    e.preventDefault();
    let obj = {
      Id:uuid(),
      Name: user,
      Email: email,
      Role: role,
      Phone: phone,
      Status: status,
      Password: password,
      confirmPwd: confirmPwd,
    };
    userList.push(obj);
    localStorage.setItem("UserList", JSON.stringify(userList));
    toast.success("User has been added successfully");
    
    // history.push('./table')
  };

  return (
    <>
      <div className="container">
        <div className="w-50 mx-auto shadow p-5">
          <form onSubmit={handleAddUser}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">
                Name
                <span aria-hidden="true" style={{ color: "red" }}>
                  *
                </span>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-lg "
                  placeholder="First name"
                  name="name"
                  value={user}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-2 col-form-label">
                Email
                <span aria-hidden="true" style={{ color: "red" }}>
                  *
                </span>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Email "
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control form-control-lg"
                  placeholder="Phone Number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group row">
              <label class="col-sm-2 col-form-label">Role</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  name="select "
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option default>Select Role</option>
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label class="col-sm-2 col-form-label">Status</label>
              <div className="col-sm-10">
                <select
                  className="form-control"
                  name="status "
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option default>Select Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">InActive</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-2 col-form-label">Password</label>
              <div className="col-sm-10 md-2">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label class="col-sm-2 col-form-label">Confirm Password</label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter Confirm Password"
                  name="confirmPwd"
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                />
              </div>
            </div>
            <button className="btn btn-primary btn-block"
            >Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddUserComponent;
