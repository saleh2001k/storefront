import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './store/index'; // Import your Redux store
import './index.scss';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
// import ProductList from './Components/Products';
// import Categories from './Components/Categories';
import ProductsPage from './Components/Products/porductsPage';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<ProductsPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
