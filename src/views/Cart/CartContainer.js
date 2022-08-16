import { connect } from "react-redux";

import Cart from "./Cart";
import { getCartByUserId, postCart } from "../../redux/actions/cartAction";

const mapStoreToProps = (state) => ({
  cart: state.cart.cart,
});
const mapDispatchToProps = (dispatch) => ({
  getCartByUserId: dispatch(getCartByUserId()),
  postCart: (pid, decrease, qty) =>
    dispatch(postCart(pid, decrease, qty)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(Cart);
