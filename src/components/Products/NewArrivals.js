import React, { useState } from 'react'

import SingleProduct from "./SingleProduct";
import Heading from "../Heading";

function NewArrivals(props) {

    const [products, setProducts] = useState({
        products: props.products,
        productsBAK: props.products,
        departments: props.department,
    });
    const [selectedOption, setSelectedOption] = useState("All");

    const optionClicked = (option) => {
        let FilterList = products.productsBAK.filter(
            item => item.department === option
        );
        if (FilterList.length > 0) {
            setProducts({ ...products, products: FilterList });
        } else {
            setProducts({ ...products, products: products.productsBAK });
        }
        setSelectedOption(option);
    }
    
    return (
        <>
            <div className="new_arrivals" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <Heading title="New Arrivals" data-aos="fade-up" />
                    </div>
                    <div className="row align-items-center" data-aos="fade-up">
                        <div className="col text-center">
                            <div className="new_arrivals_sorting">
                                <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
                                    <li
                                        onClick={() => optionClicked("All")}
                                        className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${selectedOption === "All"
                                            ? "active is-checked"
                                            : null
                                            }`}
                                    >
                                        all
                                    </li>
                                    <li
                                        className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${selectedOption === "Women"
                                            ? "active is-checked"
                                            : null
                                            }`}
                                        onClick={() => optionClicked("Women")}
                                    >
                                        women's
                                    </li>

                                    <li
                                        className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${selectedOption === "Men"
                                            ? "active is-checked"
                                            : null
                                            }`}
                                        onClick={() => optionClicked("Men")}
                                    >
                                        men's
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {products.products &&
                            products.products.slice(0, 8).map((item, index) => {
                                return (
                                    <div
                                        className="col-lg-3 col-sm-6 mt-4"
                                        key={index}
                                        data-aos="zoom-in"
                                    >
                                        <SingleProduct
                                            productItem={item}
                                            addToBag={props.addToBag}
                                        />
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewArrivals