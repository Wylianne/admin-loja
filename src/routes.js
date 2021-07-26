import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './home/Home';
import AddProduct from './product/AddProduct';
import AddClient from './client/AddClient';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/AddClient' component={AddClient} />
                <Route path='/AddProduct' component={AddProduct}/>
            </Switch>
        </BrowserRouter>
    )
}
