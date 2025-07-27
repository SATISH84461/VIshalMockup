import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

export default function App() {

  return (
    <>
      <h1 className="text-2xl font-bold text-center my-4">Vishal Mockup</h1>
      <BrowserRouter basename="/VIshalMockup">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
