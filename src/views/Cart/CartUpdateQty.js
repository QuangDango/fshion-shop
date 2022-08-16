import React, { useState } from 'react'

function CartUpdateQty({ id, items, handleClick, handleShowOverlay }) {

    const [count, setCount] = useState(items[id].qty);

    const [isShow, setIsShow] = useState(true);

    return (
        <>
            {isShow ?
                <div className="row shopping--cart--item shopping-update-qty-container">
                    <div className="col-sm-2 cart--item--img-contain">
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
                            Quantity: <span>{count}</span>
                        </div>
                        <div
                            className="basket--item--price"
                            style={{ marginTop: 10, marginBottom: 10 }}
                        >
                            {" "}
                            Price: <span>${parseFloat((items[id].item.price * count).toFixed(2))}</span>
                        </div>
                    </div>
                    <div className="col-sm-5">
                        <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                            <span>Quantity:</span>
                            <div className="quantity_selector">
                                <span
                                    className="minus"
                                    style={{ pointerEvents: (count > 0) ? 'auto' : 'none' }}
                                    onClick={() => {
                                        setCount(preCount => preCount - 1);
                                    }
                                    }
                                >
                                    <i className="fa fa-minus" aria-hidden="true"></i>
                                </span>
                                <span id="quantity_value"> {count}</span>
                                <span
                                    className="plus"
                                    onClick={() => { setCount(preCount => preCount + 1) }}
                                >
                                    <i className="fa fa-plus" aria-hidden="true"></i>
                                </span>
                            </div>
                            <span
                                className="confirm-btn"
                                onClick={() => {
                                    setTimeout(() => handleShowOverlay(), 2000);
                                    setIsShow(false);
                                    if (count === 0) {
                                        handleClick(id, true, items[id].qty);
                                    }
                                    else {
                                        handleClick(id, false, count - items[id].qty);
                                    }
                                }
                                }
                            >
                                OK
                            </span>
                            <span
                                className="confirm-btn delete-btn"
                                onClick={() => {
                                    setTimeout(() => handleShowOverlay(), 2000);
                                    setIsShow(false);
                                    handleClick(id, true, items[id].qty);
                                }
                                }
                            >
                                DELETE
                            </span>
                        </div>
                    </div>
                </div>
                : (<div class="loading-container">
                    <div className='loadding-bar'>
                        <div class="Loaderdot"></div>
                        <div class="Loaderdot"></div>
                        <div class="Loaderdot"></div>
                        <div class="Loaderdot"></div>
                    </div>
                </div>)}

        </>
    )
}

export default CartUpdateQty