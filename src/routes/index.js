import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import { registerNav } from "../modules/Navigation";
import PageNotFound from "../views/PageNotFound";
import HomeRoutes from "./HomeRoutes";

function Routes() {

    return (
        <>
            <Router ref={registerNav}>
                <Switch>
                    {HomeRoutes.map((homeRoute, index) => {
                        return (
                            <Route
                                key={index}
                                path={homeRoute.path}
                                exact={homeRoute.exact}
                                component={props => {
                                    return (
                                        <homeRoute.layout {...props}>
                                            <homeRoute.component {...props} />
                                        </homeRoute.layout>
                                    );
                                }}
                            />

                        );
                    })}
                    <Route Redirect to="/PageNotFound" exact component={PageNotFound} />
                </Switch>
            </Router>
        </>
    )
}

export default Routes