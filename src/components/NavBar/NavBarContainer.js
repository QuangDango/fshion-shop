import { connect } from "react-redux";
import NavBar from "./NavBar";
import { getDepartments } from "../../redux/actions/DepartmentAction";
import { getCartByUserId } from "../../redux/actions/cartAction";
import { showCart, showMobileMenu, hideCart, hideMobileMenu } from "../../redux/actions/closeBarAction";
const mapStoreToProps = state => ({
  departments: state.department.departments,
  cart: state.cart.cart,
  isCartShow: state.closeBar.isCartShow,
  isMenuMobileShow: state.closeBar.isMenuMobileShow,
});

const mapDispatchToProps = dispatch => ({
  getDepartments: dispatch(getDepartments()),
  getCartByUserId: () => dispatch(getCartByUserId()),
  showCart: () => dispatch(showCart()),
  showMobileMenu:() => dispatch(showMobileMenu()),
  hideCart: () => dispatch(hideCart()),
  hideMobileMenu:() => dispatch(hideMobileMenu()),
});

export default connect(mapStoreToProps, mapDispatchToProps)(NavBar);
