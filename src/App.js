import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
// importing general componenets
import NavBar from "./components/general/NavBar";

// landing components
import background from "./components/landing/background";
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <NavBar />
                    <Route exact path="/" component={background} />
                </div>
            </Router>
        </Provider>
    );
}

export default App;
