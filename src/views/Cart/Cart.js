import React, { useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import Heading from "../../components/Heading";
import CartItem from "./CartItem";
import CalculateTax from "../../utils/CalculateTax";
import EmptyCart from "../../assets/images/empty_cart.png";

function Cart(props) {

    const { totalPrice, items } = props.cart;

    const [hideSkeleton, setHiheSkeletonTime] = useState(false)

    useEffect(() => {
        setTimeout(() => setHiheSkeletonTime(true), 2000)
    }, [])

    const { postCart } = props;

    return (
        <>
            <div className="shopping--cart" data-aos="fade-up">
                <div className="container">
                    <div className="shopping--cart--container">
                        <div className="row ">
                            <Heading title="Your Shopping Cart" data-aos="fade-up" />
                        </div>
                        <div style={{ height: 30 }}></div>
                        {items || hideSkeleton ? (<CartItem
                            items={items || {}}
                            handleClick={(pid, decrease, count) =>
                                postCart(pid, decrease, count)
                            }
                        />) : (
                            <Skeleton height={200} count={3} />
                        )
                        }
                        {items !== undefined && items !== null ? (
                            <div
                                className="d-flex flex-column justify-content-end align-items-end"
                                style={{ paddingRight: 50 }}
                            >
                                <p>
                                    SubTotal :{" "}
                                    <span style={{ color: "#FE4C50" }}>${totalPrice}</span>
                                </p>
                                <p>
                                    Shipping : <span style={{ color: "#FE4C50" }}>Free</span>
                                </p>

                                <p>
                                    Taxes :{" "}
                                    <span style={{ color: "#FE4C50" }}>
                                        $ {CalculateTax(totalPrice).taxes}
                                    </span>
                                </p>

                                <h3 style={{ textAlign: "center" }}>
                                    Total:{" "}
                                    <span style={{ color: "#FE4C50" }}>
                                        $ {CalculateTax(totalPrice).total}
                                    </span>
                                </h3>
                                <hr />

                                <Button variant="danger" size="sm" style={{ marginTop: 30 }}>
                                    Confirm Checkout
                                </Button>
                            </div>
                        ) : (hideSkeleton ? (
                            <div style={{ textAlign: "center" }}>
                                <img
                                    src={EmptyCart}
                                    alt=""
                                    style={{ maxHeight: 400, maxWidth: 400 }}
                                    className="img-fluid"
                                />
                            </div>) : (<></>)
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart