import React, { useEffect, useState} from 'react'

import TopNavBar from "../components/TopNavBar";
import NavBarContainer from "../components/NavBar/NavBarContainer";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

function BaseLayout(props) {

    const [isTop, setIsTop] = useState(true);

    console.log("BAse Layout")

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <>
            <div className="super_container">
                <header className="header trans_300">
                    {isTop && <TopNavBar className="show"/> }
                    <NavBarContainer />
                </header>
                <div className="layout-container">{props.children}</div>
                <Footer />
            </div>
        </>
    )
}

export default BaseLayout