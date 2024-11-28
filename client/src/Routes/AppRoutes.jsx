import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBarApp } from '../components/NavBarApp/NavBarApp';
import FooterApp from '../components/FooterApp/FooterApp';
import { Home } from '../Pages/Home/Home';
import { HarryPotter } from '../Pages/HarryPotter/HarryPotter';
import { StrangerThings } from '../Pages/StrangerThings/StrangerThings';

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <div className="page-container">
        <NavBarApp />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/harry-potter" element={<HarryPotter />} />
            <Route path="/stranger-things" element={<StrangerThings />} />
          </Routes>
        </main>
        <FooterApp />
      </div>
    </BrowserRouter>
  );
};
