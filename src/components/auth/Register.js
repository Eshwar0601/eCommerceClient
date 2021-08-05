import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Input } from "../general/Input";
import { register } from "../../actions/authActions";
class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    // onChange(e) {
    //     console.log(e.target.name);
    //     this.setState({ [e.target.name]: e.target.value });
    // }
    onChange(e) {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit() {
        const { name, email, password } = this.state;
        const newUser = {
            name,
            email,
            password,
        };
        if (password === this.state.password2) {
            this.props.register(newUser);
        } else {
            console.log("password dont match");
        }
    }

    render() {
        const { name, email, password, password2 } = this.state;
        return (
            <div className="container">
                <h1 className="large text-primary">Register</h1>
                <p className="lead">
                    <i className="fas fa-user"></i> Create Your Account
                </p>
                <div className="form">
                    <Input
                        name="name"
                        type="text"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form">
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                    />
                </div>

                <div className="form">
                    <Input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={this.onChange}
                    />
                </div>

                <div className="form">
                    <Input
                        name="password2"
                        type="password"
                        placeholder="confirm password"
                        value={password2}
                        onChange={this.onChange}
                    />
                </div>

                <button className="btn btn-primary" onClick={this.onSubmit}>
                    Register
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { register })(withRouter(Register));
