// import "./App.css";
import Sidebar from "../MultipleComponents/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddUserComponent from "./AddUserComponent";
import UserTableViewComponent from "./UserTableViewComponent";
import UserCardViewComponent from "./UserCardViewComponent";
import EditUserComponent from "./EditUserComponent";
import DeleteUserComponent from "./DeleteUserComponent";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/user" component={AddUserComponent} />
        <Route exact path="/table" component={UserTableViewComponent} />
        <Route exact path="/cardView" component={UserCardViewComponent} />
        <Route exact path="/edit/:id" component={EditUserComponent} />
        <Route exact path="/delete/:id" component={DeleteUserComponent} />

      </Switch>
    </Router>
  );
}

export default App;
