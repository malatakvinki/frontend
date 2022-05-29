import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Casino from './pages/Casino';
import AddProviders from './pages/AddProviders';

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

          <Route
            path="/addProvider"
            element={<AddProviders />}
            
          ></Route>
          
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
