import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Home from './components/Home';
import Details from './components/Details';
import store from './redux/configureStore';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:idCompany" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
