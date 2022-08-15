import React from 'react'
import { Modal } from "react-bootstrap";
import "./style.css"

import Auth from "../../modules/Auth";
import EmptyCart from "../../assets/images/emptyCart.png";
import { Link } from 'react-router-dom';

function HomeCartView(props) {

    const { items, totalPrice } = props.cart;

    return (
        <>
            <Modal {...props} className="right">
                <Modal.Header closeButton>
                    <Modal.Title>Your Cart</Modal.Title>
                    {items !== undefined && items !== null ? (
                        <Link className="check-out-link" to={"/cart"} onClick={props.onHide}>
                            <span className="checkout--btn">
                                checkout{" "}
                            </span>
                        </Link>

                    ) : null}
                </Modal.Header>
                <Modal.Body className="modal-body-content">
                    {Auth.getUserDetails() !== undefined &&
                        Auth.getUserDetails() !== null &&
                        Auth.getToken() !== undefined ? (
                        <div>
                            {items !== undefined && items !== null ? null : (
                                <div className="empty--basket">
                                    <img src={EmptyCart} className="img-fluid" />
                                    <h4 style={{ textAlign: "center" }}>Empty cart</h4>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="empty--basket">
                            <h4>Please login to view cart</h4>
                            <img src={EmptyCart} className="img-fluid" />
                        </div>
                    )}

                    {items !== undefined &&
                        items !== null &&
                        Object.keys(items).map((id) => {
                            return (
                                <div key={id} className="basket--item">
                                    <div className="basket--item--img">
                                        <img src={items[id].item.imagePath} alt="" />
                                    </div>
                                    <div className="basket--item--details">
                                        <div className="basket--item--title">
                                            {items[id].item.title}
                                        </div>
                                        <div className="basket--item--quantity">
                                            Quantity: <span>{items[id].qty}</span>
                                        </div>
                                        <div className="basket--item--price">
                                            {" "}
                                            Price: <span>${items[id].price}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    {items !== undefined && items !== null && (
                        <div className="total--price-container">
                            <h3 style={{ textAlign: "center" }}>
                                Total: <span style={{ color: "#FE4C50" }}>${totalPrice}</span>{" "}
                            </h3>
                            <Link to={"/cart"}>
                                <button
                                    className="btn btn-wide log-btn"
                                    style={{ marginTop: 20 }}
                                    onClick={props.onHide}
                                >
                                    Checkout
                                </button>
                            </Link>
                        </div>
                    )}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default HomeCartView