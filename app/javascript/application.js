// Entry point for the build script in your package.json
// import "@hotwired/turbo-rails"
// import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from './redux/configureStore';
import Greeting from './components/Greeting';

function App() {
  return (
    <>
    <Routes>
      <Route element={<Greeting/>} path="/" />
    </Routes>
    </>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>,
    </Provider>
    </BrowserRouter>,
  document.getElementById('root'),
);
