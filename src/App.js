import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeDetail from './pages/RecipeDetail';
import FavoritesPage from './pages/FavoritesPage'; // Import the FavoritesPage component

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className='bg-black'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
          <Route path='favorites' element={<FavoritesPage />} /> {/* Add this route */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
