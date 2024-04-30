import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AppLayout from './components/Layout';
import './css/custom.css';
import AuthorizeRoute from "./components/api-authorization/AuthorizeRoute";

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (

            <Routes>
                {AppRoutes.map((route, index) => {
                    const {element, requireAuth, ...rest} = route;
                    return <Route key={index} {...rest} element=
                        {
                            requireAuth ?
                                <AppLayout><AuthorizeRoute {...rest} element={element}/></AppLayout>
                                : <AppLayout>{element}</AppLayout>
                        }/>;
                })}
            </Routes>

        );
    }
}
