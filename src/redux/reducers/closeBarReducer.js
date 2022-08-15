import {
  SHOW_CART,
  SHOW_MOBILE_MENU,
  HIDE_CART,
  HIDE_MOBILE_MENU,
} from "../actions/closeBarAction";

const initialState = {
  isCartShow: false,
  isMenuMobileShow: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_CART:
      return {
        ...state,
        isCartShow: true,
      };
    case SHOW_MOBILE_MENU:
      return {
        ...state,
        isMenuMobileShow: true,
      };
    case HIDE_CART:
      return {
        ...state,
        isCartShow: false,
      };
    case HIDE_MOBILE_MENU:
      return {
        ...state,
        isMenuMobileShow: false,
      };
    default:
      return state;
  }
};