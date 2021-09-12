import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
// importing general componenets
import NavBar from "./components/general/NavBar";
// landing components
import background from "./components/landing/background";
// user components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import "./App.css";
import "antd/dist/antd.css";
import setAuthToken from "./util/setAuthToken";
import { setCurrentUser } from "./actions/authActions";

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

function App() {
    useEffect(() => {
        store.dispatch(setCurrentUser());
    }, []);

    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <NavBar />
                    <Route exact path="/" component={background} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
