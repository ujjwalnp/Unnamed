import './App.css';
import { Routes, Route } from 'react-router-dom';
import Admin from './layouts/admin';
import Customer from './layouts/customer';
import AdminDashboard from './pages/admin/adminDashboard';
import HomePage from './pages/customer/homePage';
import Error from './pages/Error';
import ProductDetails from './pages/customer/ProductDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          </Route>
        <Route path="/" element={<Customer />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
