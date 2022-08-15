import React, { useEffect } from 'react'
import { Link } from "react-router-dom";

import HomeCartView from "../HomeCartView";
import MobileMenu from "../MobileMenu";
import device, { size } from "../../modules/mediaQuery";
import MediaQuery from "react-responsive";

function NavBar(props) {

    const { departments, cart } = props;

    useEffect(() => {
        if (Object.keys(props.cart).length < 1) {
            props.getCartByUserId();
        }
    }, []);

    return (
        <>
            <div className="main_nav_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-right">
                            <div className="logo_container">
                                <a href="/">
                                    Beauty<span>Fashion</span>
                                </a>
                            </div>
                            <nav className="navbar">
                                <ul className="navbar_menu">
                                    <li>
                                        <Link to="/home">home</Link>
                                    </li>
                                    <li className="mega-drop-down">
                                        <Link to="/shops/Women">
                                            shop <i className="fa fa-angle-down"></i>
                                        </Link>

                                        <div className="mega-menu">
                                            <div className="mega-menu-wrap">
                                                {departments &&
                                                    departments.map((item, index) => {
                                                        return (
                                                            <div className="mega-menu-content" key={index}>
                                                                <Link to={`/shops/${item.departmentName}`} className='department-type'>{item.departmentName}</Link>
                                                            </div>
                                                        );
                                                    })}
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <a href="contact.html">contact</a>
                                    </li>
                                </ul>
                                <ul className="navbar_user">
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="fa fa-user" aria-hidden="true"></i>
                                        </a>
                                    </li>
                                    <li className="checkout">
                                        <a href='#' className='cart-icon'
                                        onClick={props.showCart}
                                        >
                                            <i className="fas fa-shopping-bag"></i>
                                            {cart.totalQty !== undefined && (
                                                <span id="checkout_items" className="checkout_items">
                                                    {cart.totalQty}
                                                </span>
                                            )}
                                        </a>
                                    </li>
                                </ul>

                                <div
                                    className="hamburger_container"
                                    onClick={props.showMobileMenu}
                                >
                                    <i className="fa fa-bars" aria-hidden="true"></i>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <MediaQuery query={device.max.tabletL}>
                    <MobileMenu
                        activeClass={props.isMenuMobileShow}
                        onClose={props.hideMobileMenu}
                    />
                </MediaQuery>

                <HomeCartView
                    cart={cart}
                    show={props.isCartShow}
                    onHide={props.hideCart}
                />
            </div>
        </>
    )
}

export default NavBar