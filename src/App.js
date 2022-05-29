import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Casino from './pages/Casino';

function App() {
  return ( 
    <>
      <BrowserRouter>  
        <Routes>
          <Route
            path="/"
            element={<Home />}
            exact
          ></Route>

          <Route
            path="/casino"
            element={<Casino />}
            
          ></Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
