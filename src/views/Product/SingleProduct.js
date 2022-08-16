import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import LoginRegisterForm from "../../components/LoginRegisterForm";
import Auth from "../../modules/Auth";

function SingleProduct(props) {

    const [count, setCount] = useState(1);

    const [isLoad, setIsLoad] = useState(false);

    const [state, setState] = useState(
        {
            color: "",
            size: "",
            pic: "",
            selectedSize: "",
            id: "",
            quantity: 1,
        });

    const [isModalShow, setIsModalShow] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    useEffect(() => {
        props.getProduct(props.location.pathname.split("/").slice(-1)[0]);
        props.getVariantsByProductId(
            props.location.pathname.split("/").slice(-1)[0]);
        window.scrollTo({ top: 0 });
    }, []);

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

    const handleThumbnailClick = (item) => {
        setState({
            ...state,
            color: item.color,
            size: item.size,
            pic: item.imagePath,
            selectedSize: "",
            id: item._id,
            cartItem: null,
        });
    };

    async function addToBag() {
        if (
            Auth.getUserDetails() !== undefined &&
            Auth.getUserDetails() !== null &&
            Auth.getToken() !== undefined
        ) {
            props
                .postCart(
                    state.id || props.location.pathname.split("/").slice(-1)[0],
                    false,
                    count
                )
                .then((res) => {
                    // console.log(res);
                });

        } else {
            setIsModalShow(true);
        }
    };

    // const productInCart = () => {
    //     let available = false;
    //     let items = this.props.cart.items;
    //     if (items !== undefined && items !== null) {
    //       let itemCheck = Object.keys(items).map(
    //         id => items[id].item.title === this.props.product.title
    //       );

    //       if (itemCheck !== undefined && itemCheck !== null) {
    //         this.setState({ cartItem: itemCheck });
    //         available = true;
    //       } else {
    //         available = false;
    //       }
    //     }

    //     return available;
    // };

    return (
        <>
            <div className="container single_product_container">
                <div className="row">
                    <div className="col">
                        <div className="breadcrumbs d-flex flex-row align-items-center">
                            <ul>
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        {props.product ? props.product.department : <Skeleton />}
                                    </a>
                                </li>
                                <li className="active">
                                    <a href="#">
                                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                                        {props.product ? props.product.category : <Skeleton />}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {props.product ? (
                    <>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="single_product_pics">
                                    <div className="row">
                                        <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                            <div className="single_product_thumbnails">
                                                <ul>
                                                    {props.variants &&
                                                        props.variants
                                                            .slice(0, 4)
                                                            .map((item, index) => (
                                                                <li
                                                                    key={index}
                                                                    onClick={() =>
                                                                        handleThumbnailClick(item)
                                                                    }
                                                                >
                                                                    <img
                                                                        src={item.imagePath}
                                                                        alt=""
                                                                        className="img-fluid"
                                                                    />
                                                                </li>
                                                            ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-9 image_col order-lg-2 order-1">
                                            <div className="single_product_image">
                                                <div
                                                    className="single_product_image_background"
                                                    style={{
                                                        backgroundImage: `url(${state.pic || props.product.imagePath
                                                            })`,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="product_details">
                                    <div className="product_details_title">
                                        <h2>{props.product.title}</h2>
                                        <p>{props.product.description}</p>
                                    </div>
                                    <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
                                        <span>
                                            <i className="fas fa-truck"></i>
                                        </span>
                                        <span>free delivery</span>
                                    </div>
                                    <div className="original_price">
                                        {" "}
                                        $ {(parseFloat(props.product.price) + 30).toFixed(2)}
                                    </div>
                                    <div className="product_price">
                                        $ {props.product.price}
                                    </div>
                                    <ul className="star_rating">
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </li>
                                        <li>
                                            <i className="fa fa-star-o" aria-hidden="true"></i>
                                        </li>
                                    </ul>
                                    <div className="product_color">
                                        <span>Select Color:</span>
                                        <ul>
                                            <li style={{ background: "#e54e5d" }}></li>
                                            <li style={{ background: "#252525" }}></li>
                                            <li style={{ background: "#60b3f3" }}></li>
                                        </ul>
                                    </div>

                                    <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                                        <span>Quantity:</span>
                                        <div className="quantity_selector">
                                            <span
                                                className={
                                                    count > 1 ? "minus" : "minus disabled"
                                                }
                                                onClick={() => {
                                                    if (count > 0)
                                                        return setCount(count => count - 1)
                                                }
                                                }
                                            >
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </span>
                                            <span id="quantity_value">{count}</span>
                                            <span
                                                className="plus"
                                                onClick={() => {
                                                    setCount(count => count + 1)
                                                }
                                                }
                                            >
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </span>
                                        </div>
                                        <div
                                            className="red_button product-add_to_cart_button"
                                            onClick={() => {
                                                addToBag();
                                                setCount(1);
                                                setIsLoad(true);
                                                setTimeout(() => setIsLoad(false),2000)
                                            }}
                                        >
                                            <button className='add-cart-btn'>add to cart</button>
                                        </div>

                                        {/* <div className="red_cart_button product_add_to_cart_icon">
                                            <a href="#">
                                                <i className="fas fa-cart-arrow-down"></i>
                                            </a>
                                        </div> */}

                                        <div className="product_favorite d-flex flex-column align-items-center justify-content-center">
                                            <i className="far fa-heart"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="single_product_pics">
                                    <div className="row">
                                        <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                                            <div className="single_product_thumbnails">
                                                <Skeleton height={200} />
                                            </div>
                                        </div>
                                        <div className="col-lg-9 image_col order-lg-2 order-1">
                                            <div className="single_product_image">
                                                <div
                                                    className="single_product_image_background">
                                                    <Skeleton height={500} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="product_details">
                                    <div className="product_details_title">
                                        <h2><Skeleton height={100} /></h2>
                                        <p><Skeleton height={100} count={2} /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                <LoginRegisterForm
                    show={isModalShow}
                    login={isLoginForm}
                    registerClicked={() => registerClicked()}
                    loginClicked={() => loginClicked()}
                    onHide={() => showHideModal()}
                />
            </div>
            {isLoad && <div class="loading-container">
                <div className='loadding-bar'>
                    <div class="Loaderdot"></div>
                    <div class="Loaderdot"></div>
                    <div class="Loaderdot"></div>
                    <div class="Loaderdot"></div>
                </div>
            </div>}
        </>
    )
}

export default SingleProduct