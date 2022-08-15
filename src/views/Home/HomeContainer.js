import {
    getAllProducts,
    applyFilters
  } from "../../redux/actions/productAction";
  import { connect } from "react-redux";
  import Home from "./Home";
  import { postCart } from "../../redux/actions/cartAction";
  
  const mapStoreToProps = props => ({
    products: props.product.products,
    departments: props.department.departments,
    loading: props.product.loading
  });
  const mapDispatchToProps = dispatch => ({
    getAllProducts: () => dispatch(getAllProducts()),
    applyFilters: filter_string => dispatch(applyFilters(filter_string)),
    postCart: productId => dispatch(postCart(productId))
  });
  
  export default connect(mapStoreToProps, mapDispatchToProps)(Home);