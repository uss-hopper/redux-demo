import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import reducers from "./shared/reducers";
import {Provider} from "react-redux";
import {Route,BrowserRouter, Switch} from "react-router-dom";
import {FourOhFour} from "./pages/four-oh-four/FourOhFour";
import {Home} from "./pages/home/Home";
import {UserPosts} from "./pages/userPosts/UserPosts";
import {Posts} from "./pages/posts/Posts";

const store = createStore(reducers,applyMiddleware(thunk));

const Routing = (store) => (
	<>
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/user/:userId" component={UserPosts} userId=":userId"/>
				<Route exact path="/posts" component={Posts} />
				<Route exact path="/" component={Home}/>
				<Route component={FourOhFour}/>
			</Switch>
		</BrowserRouter>
	</Provider>
	</>
);

ReactDOM.render(Routing(store) , document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
