
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./Redux/redux-store";


const renderEntireTree = (state) => {
    console.log(store)
    console.log(state)
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 dispatch={store.dispatch.bind(store)}
           /*      newPostText={store._state.profilePage.newPostText}
                 newMessageText={store._state.messagePage.newMessageText}*/
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());
//store.subscribe(renderEntireTree);

store.subscribe(()=>{
    let state=store.getState()
    renderEntireTree(state);
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();