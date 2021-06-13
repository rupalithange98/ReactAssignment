import React from "react";
import '../css/Header.css'
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
      <div className="container-fluid">
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
           
          {/* <span className="logo">lamaadmin</span> */}
        </div>
        <div className="topRight">
          <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
    </div>
    

  );
}
