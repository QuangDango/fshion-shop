import React from "react";
import { Redirect } from "react-router-dom";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";
import CartContainer from "../views/Cart/CartContainer";
import BaseLayout from "../layouts/BaseLayout";

var routes = [
  {
    path: "/",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },

  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/" />,
  },
  {
    path: "/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/shops/:category",
    layout: BaseLayout,
    component: CategoryContainer,
  },
  {
    path: "/cart",
    layout: BaseLayout,
    component: CartContainer,
  },
];

export default routes;