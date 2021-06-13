import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import { FaFilter } from "react-icons/fa";
import { BsArrowBarUp } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import '../css/Card.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRadioGroup } from "@material-ui/core";

function UserCardViewComponent() {
  const [user, setUser] = useState([]);
  const [arr, setArr] = useState([]);
  const [searchItem, setSearchItem] = useState('')

  useEffect(() => {
    let userList = JSON.parse(localStorage.getItem("UserList")) || [];
    setUser(userList);
  }, []);

  const removeData = (id) => {
    var arr = JSON.parse(localStorage.getItem("UserList"));
    arr.splice(id, 1);
    localStorage.setItem("UserList", JSON.stringify(arr));
    toast("User deleted successfully")
    window.location.reload();
  };
  const refreshData = () => {
    var arr = JSON.parse(localStorage.getItem("UserList"));
    if (arr == null) {
      arr = [];
    }
    setArr(arr);
  };
  return (
    <div className="container" style={{ width: "80%", marginTop: "80px" }}>
      <div style={{ padding: "10px", float: "right" }}>
        {/* <NavLink to="/main" className="btn btn-outline-dark">
          Go Back
        </NavLink> */}
      </div>
      <div></div>
      <div style={{ float: "right", paddingTop: "10px" }}>
        <form class="form-inline my-2 my-lg-0">
          <button type="button" className="btn btn-light mr-5">
            <FaFilter />
            Filter By
          </button>
          <button type="button" className="btn btn-light ">
            <BsArrowBarUp />
            Sort By
          </button>
          <input
            class="form-control mr-sm-2 ml-5"
            type="search"
            placeholder="Search.."
            aria-label="Search"
            onChange={e=>{setSearchItem(e.target.value)}}
          />
        </form>
      </div>
      <hr></hr>
      <br></br>

      <br></br>
      <hr></hr>
     
      <div>
        <div class="container" style={{ width: "80%", marginTop: "80px" }}>
          <div class="row">
            {user.filter(val=>{
              if(searchItem == ""){
                return val;
              }else if(val.Name.toLowerCase().includes(searchItem.toLocaleLowerCase())){
                return val;
              }
            }).map((user,i) => (
              <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="frontside">
                  <div class="card mr-2 col-sm-12" style={{width:250,height:150}}>
                    <div class="card-body text-right">
                      <div class="row">
                        <Avatar
                        className="mr-2"round={true}
                        name={user.Name}
                        size="40"
                      />
                        <div class="container" style={{ marginTop: "-33%" }}>
                          <div>{user.Name}</div>
                          <div>{user.Email}</div>
                          <div>{user.Status}</div>
                          <br></br>
                          {/* <button
                            class="btn btn-info float-right"
                            type="submit"
                          >
                            Edit
                          </button>
                          <button
                            class="btn btn-danger float-left"
                            type="submit"
                          >
                            Delete
                          </button> */}
                           <button
                          type="button"
                          onClick={() => removeData(i)}
                          className="btn btn-light "
                        >
                          <AiOutlineDelete />
                        </button>
                      
                          <Link to={`/edit/${user.Id}`}>
                            <MdModeEdit />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default UserCardViewComponent;
