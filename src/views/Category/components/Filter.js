import React, { useState } from 'react'

function Filter(props) {

    const categoryList = [
        "Women",
        "Men",
        "Kids",
        "Accessories",
        "New Arrivals",
        "Collection",
    ]

    return (
        <>
            <div className="sidebar_section">
                <div className="sidebar_title">
                    <h5>Product Category</h5>
                </div>
                <ul className="sidebar_categories">
                    {categoryList.map((item, index) => {
                        if (item === props.categoryActive) {
                            return (
                                <li key={index} className="active">
                                    <a href="#">
                                        <span>
                                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                        </span>
                                        {item}
                                    </a>
                                </li>
                            )
                        }
                        return (
                            <li key={index}>
                                <a href="#">{item}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Filter