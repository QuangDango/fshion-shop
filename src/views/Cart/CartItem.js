import React, { useState } from 'react'
import CartUpdateQty from './CartUpdateQty';

function CartItem({ items, handleClick }) {

    const [isShowOverlay, setIsSchowOverlay] = useState(false)
    const [idShow, setIDShow] = useState()

    const handleShowOverlay = () => {
        setIsSchowOverlay(false);
    }

    return (
        <>
            {isShowOverlay && <div className="shopping--cart--item-overlay">
            </div>}
            <div style={{ marginTop: 30 }}>
                {items !== undefined &&
                    items !== null &&
                    Object.keys(items).map(id => {
                        return (
                            <div key={id}>
                                {isShowOverlay && idShow === id &&
                                    <CartUpdateQty
                                        id={id}
                                        items={items}
                                        handleClick={handleClick}
                                        handleShowOverlay={() => handleShowOverlay()}
                                    />
                                    }

                                <div className="row shopping--cart--item" data-aos="fade-up">
                                    <div className="col-sm-2">
                                        <div className="cart--item--img">
                                            <img
                                                src={items[id].item.imagePath}
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div
                                            className="basket--item--title"
                                            style={{ marginTop: 10, marginBottom: 10 }}
                                        >
                                            {items[id].item.title}
                                        </div>
                                        <div
                                            className="basket--item--quantity"
                                            style={{ marginTop: 10, marginBottom: 10 }}
                                        >
                                            Quantity: <span>{items[id].qty}</span>
                                        </div>
                                        <div
                                            className="basket--item--price"
                                            style={{ marginTop: 10, marginBottom: 10 }}
                                        >
                                            {" "}
                                            Price: <span>${items[id].price}</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-5">
                                        <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                                            <span>Quantity:</span>
                                            <div onClick={() => {
                                                setIDShow(id);
                                                setIsSchowOverlay(true)
                                            }
                                            } className="quantity_selector outline-quantity_selector">
                                                {/* <span
                                                className="minus"
                                                style={{ pointerEvents: items[id].qty ? 'auto' : 'none' }}
                                                onClick={() => {
                                                    handleClick(id, true, 1);
                                                }
                                                }
                                            >
                                                <i className="fa fa-minus" aria-hidden="true"></i>
                                            </span> */}
                                                <span id="quantity_value"> {items[id].qty}</span>
                                                {/* <span
                                                className="plus"
                                                onClick={() => handleClick(id, false, 1)}
                                            >
                                                <i className="fa fa-plus" aria-hidden="true"></i>
                                            </span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </>
    )
}

export default CartItem