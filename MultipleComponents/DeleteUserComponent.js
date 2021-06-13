import React,{useEffect,useState} from 'react'
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteUserComponent() {
    const { id } = useParams()

    const [tempList, setTempList] = useState([])

    useEffect(() => {
       removeData(id);
    }, [])

    const removeData = (id) => {
        console.log("Id to delete-------", id);
        let tempList = JSON.parse(localStorage.getItem("UserList"));
        tempList.splice(id, 1);
        localStorage.setItem("UserList", JSON.stringify(tempList));
        setTempList(tempList);
        // prompt("Are you sure you want to delete this");
        toast.error("User has been deleted successfully......");
        // window.location.reload();
      };
    return (
        <div>
            
        </div>
    )
}

export default DeleteUserComponent
