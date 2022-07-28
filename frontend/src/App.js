import Home from "./components/Home";
import Nav from "./components/layout/Nav";
import Sidebar from "./components/admin/Sidebar";
import PoultryDetails from "./components/poultry/PoultryDetails";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Mortality from "./components/admin/mortality/Mortality";
import Dashboard from "./components/admin/Dashboard";
import NewProduct from "./components/admin/product/NewProduct";
import Chick from "./components/admin/chicks/Chick";
import Egg from "./components/admin/eggs/Egg";
import Feeds from "./components/admin/feeds/Feeds";
import Auth from "./components/auth/Auth";
import { useSelector } from "react-redux";
import Header from "./components/layout/Header";
import ProductList from "./components/admin/product/ProductList";
import UpdateProduct from "./components/admin/product/UpdateProduct";

function App() {
  const user = useSelector((state) => state.authReducer.authData);
  return (
    <div>
      {/* <Nav /> */}
      <Header />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Navigate to="home" />}
            // element={user ? <Navigate to="home" /> : <Navigate to="../auth" />}
          />

          <Route
            path="/admin"
            element={user ? <Dashboard /> : <Navigate to="../auth" />}
          />

          <Route
            path="/auth"
            element={user ? <Navigate to="/home" /> : <Auth />}
          />

          <Route path="/home" element={<Home />} />
          <Route path="/poultry/:id" element={<PoultryDetails />} />

          <Route path="/auth" element={<Auth />} />

          <Route path="/admin" element={<Dashboard />} />
          <Route path="/admin/poultry" element={<NewProduct />} />
          <Route path="/admin/poultry/:id" element={<UpdateProduct />} />
          <Route path="/admin/poultrieslist" element={<ProductList />} />

          <Route path="/admin/chicks" element={<Chick />} />
          <Route path="/admin/eggs" element={<Egg />} />
          <Route path="/admin/feeds" element={<Feeds />} />
          {/* <Route path="/admin/quarantine" element={< />} /> */}
          <Route path="/admin/mortality" element={<Mortality />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
