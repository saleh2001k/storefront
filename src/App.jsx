import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.scss';
import Header from './Components/Header/index';
import Footer from './Components/Footer/index';
import ProductList from './Components/Products';
import Categories from './Components/Categories';
import { Provider } from 'react-redux'; // Import Provider


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<>
          <ProductList />
          <Categories />
        </>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
