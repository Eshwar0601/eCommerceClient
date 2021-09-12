import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Input } from "../general/Input";
import { message } from "antd";
import { connect } from "react-redux";
import { login } from "../../actions/authActions";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);

        // if (
        //     nextProps &&
        //     nextProps.auth.errors &&
        //     nextProps.auth.errors.length > 0
        // ) {
        //     nextProps.auth.errors.forEach((error) => {
        //         message.error(error.msg);
        //     });
        // }
        if (nextProps.isAuthenticated) {
            message.success("Thank you for Signing Up");
            setTimeout(() => this.props.history.push("/"), 3000);
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        const { email, password } = this.state;
        const user = {
            email,
            password,
        };
        this.props.login(user);
    }
    render() {
        return (
            <div className="container">
                <h1 className="Large text-primary">Sign in</h1>
                <p className="lead">
                    <i className="fas fa-user"></i> Sign Into Your Account
                </p>
                <div className="form">
                    <Input
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={this.state.email}
                        onChange={this.onChange}
                    />
                </div>
                <div className="form">
                    <Input
                        name="password"
                        type="password"
                        placeholder="confirm password"
                        value={this.state.password}
                        onChange={this.onChange}
                    />
                </div>
                <button className="btn btn-primary" onClick={this.onSubmit}>
                    Sign In
                </button>
                <p className="my-1">
                    Dont Have an account?
                    <Link to="/register">Sign Up</Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(withRouter(Login));
