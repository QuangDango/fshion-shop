import React, { useState } from 'react'
import { connect } from "react-redux";

import Validator from "../../utils/Validator";
import { DEFAULT_RULE, EMAIL_RULE } from "../../utils/Validator/rule";
import { userRegister } from "../../redux/actions/RegisterAction";
import LoadingButton from "../LoadingButton";

function RegisterForm(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        if (!Validator(name, DEFAULT_RULE)) {
            console.log("Name Error");
            return;
        }
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
            .userRegister(name, email, password, password)
            .then(res => {
                console.log(res);
                props.loginClicked();
                setLoading(false);
            })
            .catch(error => {
                console.log(error.response);
                setLoading(false);
            });
    };

    return (
        <>
            <div className="login-form">
                <h2>Register</h2>
                <div className="form-group ">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name "
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        autoComplete="false"
                    />
                    <i className="fa fa-user"></i>
                </div>

                <div className="form-group ">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Email "
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="false"
                    />
                    <i className="fa fa-envelope"></i>
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
                <LoadingButton
                    type="button"
                    className="log-btn"
                    loading={loading}
                    onClick={() => handleSubmit()}
                >
                    Register
                </LoadingButton>
                <div
                    onClick={props.loginClicked}
                    style={{
                        textAlign: "center",
                        fontSize: 12,
                        color: "#c4c4c4",
                        cursor: "pointer"
                    }}
                >
                    Already have an account ? Please login.
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    userRegister
};
const mapStoreToProps = state => ({
    register_loading: state.register.register_loading,
    register_error: state.register.error
});

export default connect(mapStoreToProps, mapDispatchToProps)(RegisterForm);