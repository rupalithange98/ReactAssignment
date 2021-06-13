// import React, { useContext } from 'react'
// import { ThemeProvider } from 'styled-components'
// import Dashboard from './containers/Dashboard'
// import { lightTheme, darkTheme } from './styles/theme'
// import { GlobalStyles } from './styles/global'
// import { ThemeContext } from './context/themeContext'
// import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
// import Navbar from './MultipleComponents/Navbar'
// import AddUserComponent from './MultipleComponents/AddUserComponent'
// import UserTableViewComponent from './MultipleComponents/UserTableViewComponent'
// import Sidebar from './MultipleComponents/Sidebar'
// import Routers from './MultipleComponents/Routers';

// const App = () => {

//   const context = useContext(ThemeContext);
//   const { theme } = context;
//   return (
//     <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
//       <>
//        <Routers/>
//         <BrowserRouter>
//         {/* <Sidebar/> */}
//         {/* <Header></Header> */}
//         {/* <Navbar /> */}
//         <Switch>
//           {/* <Route path='/' exact component={Home} /> */}
//           {/* <Route path='/user' component={AddUserComponent} />
//           <Route path='/tableView' component={UserTableViewComponent}/> */}
//         </Switch>
//         {/* <Footer></Footer> */}
//       </BrowserRouter>
//       </>
//     </ThemeProvider>
//   )
// }

// export default App

// // import logo from './logo.svg';
// // import './App.css';
// // import Login from './Project/Login';
// // import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
// // import WebPageMain from './Project/WebPageMain';
// // import Employee from './Project/Employee';
// // import Roles from './Project/Roles';
// // import Organization from './Project/Organization';
// // import AddOrganization from './Project/AddOrganization';
// // import AddRoles from './Project/AddRoles';
// // import AddEmployee from './Project/AddEmployee';
// // import CrudMainEmp from './Project/CrudMain';
// // import CrudMainRole from './Project/CrudMainRole';
// // import CrudMainOrg from './Project/CrudMainOrg';

// // function App() {

// //   return (
// //     <div className="App" >
// //     <Router>
// //       <Switch>
// //         <Route path='/' exact component={Login}/>
// //         <Route path='/main' exact component={WebPageMain}/>
// //         <Route path='/employee' component={CrudMainEmp}/>
// //         <Route path='/roles' component={CrudMainRole} />
// //         <Route path='/organization' component={CrudMainOrg} />
// //         <Route path='/addOrganization' component={AddOrganization} />
// //         <Route path='/addRole' component={AddRoles} />
// //         <Route path='/addEmployee' component={AddEmployee} />
// //       </Switch>
// //     </Router>
// //     </div>
// //   );
// // }

// // export default App;

import "./App.css";
import Sidebar from "../src/MultipleComponents/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import AddUserComponent from "../src/MultipleComponents/AddUserComponent";
import Routers from "../src/MultipleComponents/Routers";
import Header from "../src/MultipleComponents/Header";
// import SimpleAlerts from "./MultipleComponents/Alert";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Routers />
      </Switch>
    </Router>
  );
}

export default App;
