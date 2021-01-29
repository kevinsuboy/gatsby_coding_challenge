import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import './global.css'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});
