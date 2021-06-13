import React from "react";
import * as AiIcons from "react-icons/ai";
import {BsPersonPlus} from "react-icons/bs";
import styled from 'styled-components'
import Logo from '../assets/images/cmplogo.jpeg';


const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`
const LogoImg = styled.img`
height: 3rem;
width:10rem;

`
const SidebarItem = [
	{
       icon : <LogoImg src={Logo}></LogoImg>
	},

  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiIcons.AiFillDashboard />,
  },
  {
    title: "User",
    path: "/table",
    icon: <BsPersonPlus color="purple"/>,
  },
];


export default SidebarItem;
