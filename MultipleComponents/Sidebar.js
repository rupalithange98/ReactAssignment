import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import SidebarItem from "./SidebarItem";
import {BsFillGrid3X3GapFill,BsListUl} from 'react-icons/bs'

const Nav = styled.div`
  background: white;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // border-bottom:solid lightgray 0.5px;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #f5f4f2;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
  //   border-right: solid lightgray 0.5px;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Container = styled.div`
  // margin-top: 5rem;
`;

const ProfileImg = styled.img`
  height: 2rem;
`;


const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "black" }}>
        <Nav>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <Nav>
          <div className="container">
           
            <nav class="navbar navbar-expand-sm fixed float-right">
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <form class="form-inline my-2 my-lg-0">
                {/* <nav className="left">Users</nav> */}
                  <Link to={{pathname:"/cardView"}} className="btn btn-outline-light mr-0 "  style={{backgroundColor:"#7853b0" ,color:"white"}}><BsListUl/></Link>

                  <Link to={{ pathname: "/table" }} className="btn mr-2 btn-outline-light"  style={{backgroundColor:"gray"  ,color:"#7853b0"}}><BsFillGrid3X3GapFill/></Link>

                  <Link to={{pathname:"/user"}} className="btn btn-outline-light " style={{backgroundColor:"#7853b0" ,color:"white"}} >+AddUser</Link>
                  
                </form>
              </div>
            </nav>
          </div>
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon>
            {SidebarItem.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
