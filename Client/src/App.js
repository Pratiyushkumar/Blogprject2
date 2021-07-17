
import TopBar from "./components/topbar/topbar";
import Home from "./pages/home/home";
import Single from "./pages/single/single";
import Write from "./pages/write/write";
import Settings from "./pages/settings/settings";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
  const user = false ;
  return (
    <Router>
     <TopBar />
    <Switch >

      <Route path="/" component={Home} exact/>
      <Route path="/register" >{user ? <Home /> :<Register />}</Route>
      <Route path="/login" >{user ? <Home /> :<Login />}</Route>
      <Route path="/post/:postId"><Single/> </Route>
      <Route path="/write" >{user ? <Write /> : <Register/>}</Route>
      <Route path="/settings" >{user ?<Settings/> : <Register/>}</Route>
      

    </Switch>

     {/* <Home /> */}
     {/* <Single /> */}
     {/* <Write /> */}
     {/* <Settings /> */}
     {/* <Login /> */}
     {/* <Register /> */}

    </ Router>
  );
}

export default App;
