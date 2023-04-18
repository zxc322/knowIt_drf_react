import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import React, { Component } from "react";
import AuthService from "../services/AuthService";
import { withRouter } from "./navigation/withRouter";


const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );  
  }
};

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {         
          this.props.router.navigate("/");
          // window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div className="">
        <div className="">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className=""
          />

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="">
              <label htmlFor="email">email</label>
              <Input
                type="text"
                className=""
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>

            <div className="">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className=""
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="">
              <button
                className=""
                // disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className=""></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="">
                <div className="" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginComponent);