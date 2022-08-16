import React, { useState } from 'react'
import { connect } from "react-redux";

import { userLogin } from "../../redux/actions/LoginAction";
import Validator from "../../utils/Validator";
import { DEFAULT_RULE, EMAIL_RULE } from "../../utils/Validator/rule";
import LoadingButton from "../LoadingButton";

function LoginForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        // let email = "bob@bob.com";
        // let password = "Ab123123";
        if (!Validator(email, EMAIL_RULE)) {
            console.log("email Error");
            return;
        }
        if (!Validator(password, DEFAULT_RULE)) {
            console.log("Password Error");
            return;
        }
        setLoading(true);
        props
            .userLogin(email, password)
            .then(res => {
                // console.log(res);
                setLoading(false);
                window.location.reload();
            })
            .catch(error => {
                // console.log('loginsignin error')
                console.log(error.response);
                setLoading(false);
            });
    };

    return (
        <>
            <div className="login-form">
                <h2>Login</h2>
                <div className="form-group ">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email "
                        id="UserName"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="false"
                    />
                    <i className="fa fa-user"></i>
                </div>
                <div className="form-group log-status">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="Passwod"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="false"
                    />
                    <i className="fa fa-lock"></i>
                </div>
                <span className="alert">Invalid Credentials</span>
                <a
                    className="link"
                    href="#"
                    onClick={props.forgotPasswordClicked}
                >
                    Lost your password?
                </a>
                <LoadingButton
                    type="button"
                    className="log-btn"
                    loading={loading}
                    onClick={() => handleSubmit()}
                >
                    Log in
                </LoadingButton>
                <div
                    onClick={props.registerClicked}
                    style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: "#c4c4c4",
                        cursor: "pointer"
                    }}
                >
                    New user ? Please
                    <span className='login-text'>
                        register.
                    </span>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    userLogin
};

const mapStoreToProps = state => ({
    login_loading: state.login.login_loading,
    login_error: state.login.error
});

export default connect(mapStoreToProps, mapDispatchToProps)(LoginForm);