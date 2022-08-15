import React, { useEffect, useState } from 'react'
import Auth from "../../modules/Auth";
import HomeBanner from "../../components/HomeBanner";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import NewArrivals from "../../components/Products/NewArrivals";
import BestSeller from "../../components/Products/BestSeller";
import Benefit from "../../components/Benefit";
import Advertisement from "../../components/Advertisement";
import LoginRegisterForm from "../../components/LoginRegisterForm";

function Home(props) {

    const { products, departments } = props;
    const [isModalShow, setIsModalShow] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    useEffect(() => {
        if (!props.products) {
            props.getAllProducts();
        }
        window.scrollTo({ top: 0});
    }, [])

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

    return (
        <>
            <HomeBanner />
            <CategoryBanner />
            {products ? (
                <NewArrivals
                    products={products}
                    departments={departments}
                    addToBag={addToBag}
                />
            ) : null}
            <Benefit />
            <Advertisement />
            {products ? (
                <BestSeller
                    products={products}
                    departments={departments}
                    addToBag={addToBag}
                />
            ) : null}
            <LoginRegisterForm
                show={isModalShow}
                login={isLoginForm}
                registerClicked={() => registerClicked()}
                loginClicked={() => loginClicked()}
                onHide={() => showHideModal()}
            />
        </>
    )
}

export default Home