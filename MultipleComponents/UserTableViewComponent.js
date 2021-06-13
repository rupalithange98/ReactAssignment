import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Avatar from "react-avatar";
import { FaFilter } from "react-icons/fa";
import { BsArrowBarUp } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditUserComponent from "./EditUserComponent";
import { ThreeSixtyOutlined } from "@material-ui/icons";

function UserTableViewComponent(props) {
  const [user, setUser] = useState([]);
  const [tempList, setTempList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let userList = JSON.parse(localStorage.getItem("UserList")) || [];
    setUser(userList);
  }, []);

  const removeData = (id) => {
    console.log("Id to delete-------", id);
    let tempList = JSON.parse(localStorage.getItem("UserList"));
    tempList.splice(id, 1);
    localStorage.setItem("UserList", JSON.stringify(tempList));
    setTempList(tempList);
    // prompt("Are you sure you want to delete this");
    toast.error("User has been deleted successfully......");
    window.location.reload();
  };

  const editUser = (id) => {
    // let index=id;
    alert("editUser function is called..");
    console.log("Id to be edited", id);
    let tempList = JSON.parse(localStorage.getItem("UserList"));

    var obj = tempList[id];
    console.log("Obj----", obj);
  };

  return (
    <>
      <div className="container" style={{ width: "80%", marginTop: "80px" }}>
        <div style={{ padding: "10px", float: "right" }}></div>
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
              type="text"
              placeholder="Search.."
              aria-label="Search"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </form>
        </div>
        <hr></hr>
        <br></br>

        <br></br>
        <div>
          {user.length ? (
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <label className="custom-control-label"></label>
                    </div>
                  </th>
                  <th scope="row">Id</th>
                  <th>Name </th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {user
                  .filter((val) => {
                    if (searchTerm == "") {
                      return val;
                    } else if (
                      val.Name.toLowerCase().includes(
                        searchTerm.toLocaleLowerCase()
                      )
                    ) {
                      return val;
                    }
                  })
                  .map((u, i) => {
                    return (
                      <tr>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                            />
                            <label className="custom-control-label"></label>
                          </div>
                        </td>
                        <td>{i + 1}</td>
                        <td>
                          <Avatar
                            className="mr-2 rounded"
                            name={u.Name}
                            size="30"
                          />
                          {u.Name}
                        </td>
                        <td>{u.Email}</td>
                        <td>{u.Phone}</td>
                        <td>{u.Role}</td>
                        <td>{u.Status}</td>
                        <td>
                          <button
                          type="button"
                          onClick={() => removeData(i)}
                          className="btn btn-light "
                        >
                          <AiOutlineDelete />
                        </button>
                      
                          <Link to={`/edit/${u.Id}`}>
                            <MdModeEdit />
                          </Link>

                          {/* <Link to={`/delete/${i}`}>
                            {" "}
                            <AiOutlineDelete />
                          </Link> */}

                         
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          ) : (
            <div>
              <br></br>
              <h3>No User to display.....</h3>
            </div>
          )}
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default UserTableViewComponent;
