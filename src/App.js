import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./store/index";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
