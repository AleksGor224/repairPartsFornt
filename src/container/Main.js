import React from 'react';

// Import Routes for Navigation


//Redux
import {Provider} from 'react-redux';
import store from '../store/store';
import DeleteContainer from "./DeletedContainer"
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import PhonesContainer from "./PhonesContainer";
import AddNewContainer from "./AddNewContainer.js";


const Main = () => {
    return (
        <>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={PhonesContainer}/>
                    <Route path="/deleted/" component={DeleteContainer}/>
                    <Route path="/phone/new" component={AddNewContainer}/>
                </Switch>
            </Provider>
        </>

    );
}

export default Main;
