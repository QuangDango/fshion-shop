import React, { useEffect, useState } from 'react'

import SingleProduct from "../../components/Products/SingleProduct";
import Auth from "../../modules/Auth";
import LoginRegisterForm from "../../components/LoginRegisterForm";
import Filter from "./components/Filter";

function Category(props) {

    const { products, applyFilters } = props;

    const [isModalShow, setIsModalShow] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    useEffect(() => {
        if (!props.products) {
            props.getAllProducts();
        }
        window.scrollTo({ top: 0 });
    }, [])

    const loginClicked = () => {
        setIsModalShow(true);
        setIsLoginForm(true);
    };

    const registerClicked = () => {
        setIsModalShow(true);
        setIsLoginForm(false);
    };

    const showHideModal = () => {
        setIsModalShow(false);
    };

    const addToBag = params => {
        if (
            Auth.getUserDetails() !== undefined &&
            Auth.getUserDetails() !== null &&
            Auth.getToken() !== undefined
        ) {
            let cart = props.postCart(params);
            cart.then(res => {
                console.log(res);
            });
        } else {
            setIsModalShow(true);
        }
    };

    return (
        <>
            <div className="container product_section_container">
                <div className="row">
                    <div className="col product_section clearfix">
                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li className="active">
                                    <a href="#">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        {props.location.pathname.split("/")[2]}
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="sidebar">
                            <Filter applyFilters={applyFilters} categoryActive = {props.match.url.split("/").slice(-1)[0]} />
                        </div>
                        <div className="main_content">
                            <div className="products_iso">
                                <div className="row">
                                    <div className="col">
                                        <div className="product_sorting_container product_sorting_container_top">
                                            <ul className="product_sorting">
                                                <li>
                                                    <span className="type_sorting_text">Default Sorting</span>
                                                    <i className="fa fa-angle-down"></i>
                                                    <ul className="sorting_type">
                                                        <li
                                                            className="type_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "original-order" }'
                                                        >
                                                            <span>Default Sorting</span>
                                                        </li>
                                                        <li
                                                            className="type_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "price" }'
                                                        >
                                                            <span>Price</span>
                                                        </li>
                                                        <li
                                                            className="type_sorting_btn"
                                                            data-isotope-option='{ "sortBy": "name" }'
                                                        >
                                                            <span>Product Name</span>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>Show</span>
                                                    <span className="num_sorting_text">6</span>
                                                    <i className="fa fa-angle-down"></i>
                                                    <ul className="sorting_num">
                                                        <li className="num_sorting_btn">
                                                            <span>6</span>
                                                        </li>
                                                        <li className="num_sorting_btn">
                                                            <span>12</span>
                                                        </li>
                                                        <li className="num_sorting_btn">
                                                            <span>24</span>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                            <div className="pages d-flex flex-row align-items-center">
                                                <div className="page_current">
                                                    <span>1</span>
                                                    <ul className="page_selection">
                                                        <li>
                                                            <a href="#">1</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">2</a>
                                                        </li>
                                                        <li>
                                                            <a href="#">3</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="page_total">
                                                    <span>of</span> 3
                                                </div>
                                                <div id="next_page" className="page_next">
                                                    <a href="#">
                                                        <i className="fas fa-long-arrow-alt-right"></i>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {products &&
                                        products.filter((item, index) => {

                                            return item.department == props.match.url.split("/").slice(-1)[0];
                                        }).map((item, index) => {
                                            return (
                                                <div
                                                    className="col-lg-3 col-sm-6 mt-4"
                                                    key={index}
                                                    data-aos="zoom-in"
                                                >
                                                    <SingleProduct
                                                        productItem={item}
                                                        addToBag={addToBag}
                                                    />
                                                </div>
                                            );
                                        })}
                                </div>
                                <div className="product_sorting_container product_sorting_container_bottom clearfix">
                                    <ul className="product_sorting">
                                        <li>
                                            <span>Show:</span>
                                            <span className="num_sorting_text">04</span>
                                            <i className="fa fa-angle-down"></i>
                                            <ul className="sorting_num">
                                                <li className="num_sorting_btn">
                                                    <span>01</span>
                                                </li>
                                                <li className="num_sorting_btn">
                                                    <span>02</span>
                                                </li>
                                                <li className="num_sorting_btn">
                                                    <span>03</span>
                                                </li>
                                                <li className="num_sorting_btn">
                                                    <span>04</span>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <span className="showing_results">Showing 1–3 of 12 results</span>
                                    <div className="pages d-flex flex-row align-items-center">
                                        <div className="page_current">
                                            <span>1</span>
                                            <ul className="page_selection">
                                                <li>
                                                    <a href="#">1</a>
                                                </li>
                                                <li>
                                                    <a href="#">2</a>
                                                </li>
                                                <li>
                                                    <a href="#">3</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="page_total">
                                            <span>of</span> 3
                                        </div>
                                        <div id="next_page_1" className="page_next">
                                            <a href="#">
                                                <i
                                                    className="fas fa-long-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginRegisterForm
                    show={isModalShow}
                    login={isLoginForm}
                    registerClicked={() => registerClicked()}
                    loginClicked={() => loginClicked()}
                    onHide={() => showHideModal()}
                />
            </div>
        </>
    )
}

export default Category