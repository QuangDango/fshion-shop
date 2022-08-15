import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";

import RegisterForm from "./RegisterForm";
import "./style.css";
import LoginForm from "./LoginForm";

function LoginRegisterForm(props) {

    return (
        <>
            <Modal
                {...props}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                id="loginModal"
                className="modal fade login"
            >
                <Modal.Body>
                    <div className="modal--close--button" onClick={props.onHide}>
                        <i className="fas fa-times"></i>
                    </div>
                    {props.login ? (
                        <LoginForm registerClicked={() => props.registerClicked()} />
                    ) : (
                        <RegisterForm loginClicked={() => props.loginClicked()} />
                    )}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default LoginRegisterForm