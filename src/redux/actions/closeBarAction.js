export const showCart = () => dispatch => {
    dispatch({
        type: SHOW_CART
    });
    return {
        type: SHOW_CART
    }
};

export const showMobileMenu = () => dispatch => {
    dispatch({
        type: SHOW_MOBILE_MENU
    });
    return {
        type: SHOW_MOBILE_MENU
    }
};

export const hideCart = () => dispatch => {
    dispatch({
        type: HIDE_CART
    });
    return {
        type: HIDE_CART
    }
};

export const hideMobileMenu = () => dispatch => {
    dispatch({
        type: HIDE_MOBILE_MENU
    });
    return {
        type: HIDE_MOBILE_MENU
    }
};

export const SHOW_CART = "SHOW_CART";
export const SHOW_MOBILE_MENU = "SHOW_MOBILE_MENU";
export const HIDE_CART = "HIDE_CART";
export const HIDE_MOBILE_MENU = "HIDE_MOBILE_MENU";