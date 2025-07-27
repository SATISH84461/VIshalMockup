import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';

export default function App() {

  return (
    <BrowserRouter basename="/VIshalMockup">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
