import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Filter(props) {

    const categoryList = [
        "Men",
        "Women",
        "Kids",
        "Accessories",
        "New Arrivals",
        "Collection",
    ]

    const handleDefault = (e) => {
        e.preventDefault();
    }

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
                                    <Link to={`/shops/${item}`}>
                                        <a>
                                            <span>
                                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                            </span>
                                            {item}
                                        </a>
                                    </Link>
                                </li>
                            )
                        }
                        return (
                            <li key={index}>
                                <Link to={`/shops/${item}`}>
                                    <a>{item}</a>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Filter