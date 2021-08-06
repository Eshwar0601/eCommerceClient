import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Input } from "../general/Input";
import { register } from "../../actions/authActions";
import { message } from "antd";
import { logRoles } from "@testing-library/react";
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

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.auth.errors);
        if (
            nextProps &&
            nextProps.auth.errors &&
            nextProps.auth.errors.length > 0
        ) {
            nextProps.auth.errors.forEach((error) => {
                message.error(error.msg);
            });
        }
        if (nextProps.auth.isAuthenticated) {
            message.success("Thank you for Signing Up");
            setTimeout(() => this.props.history.push("/"), 3000);
        }
    }

    onChange(e) {
        console.log(e.target.name);
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit() {
        // console.log(this.props.location.search.split("?role="));
        let role = this.props.location.search.split("?role=");
        role = role[role.length - 1];
        // console.log(role);
        const { name, email, password } = this.state;
        const newUser = {
            name,
            email,
            password,
            role,
        };
        if (password === this.state.password2) {
            this.props.register(newUser);
        } else {
            message.error("password must match !");
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
