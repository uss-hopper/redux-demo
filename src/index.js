import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {reducers} from "./shared/reducers";
import {Provider} from "react-redux";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {FourOhFour} from "./pages/four-oh-four/FourOhFour";
import {Home} from "./pages/home/Home";
import {UserPosts} from "./pages/userPosts/UserPosts";

//In order to use redux a store must be initialized and passed to the Provider component.
const store = createStore(reducers, applyMiddleware(thunk));

// Routing allows for react to have routed pages.
const Routing = (store) => (
	<>
		<Provider store={store}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/user/:userId" component={UserPosts} userId=":userId"/>
					<Route exact path="/" component={Home}/>
					<Route component={FourOhFour}/>
				</Switch>
			</BrowserRouter>
		</Provider>
	</>
);

ReactDOM.render(Routing(store), document.querySelector("#root"));

