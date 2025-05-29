import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home/Home'
import NotFoundPage from './components/layout/NotFoundPage';

import Dashboard from "./pages/Dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Default } from './pages/Auth/Default';
import Ads from './pages/Ads/ads';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/auth">
          <Route path="login" element={<Default />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ads" element={<Ads />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App