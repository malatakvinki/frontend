import './App.css';
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./pages/Home";
import Casino from './pages/Casino';
import AddProviders from './pages/AddProviders'; 
import AddGame from './pages/AddGame';

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
            path="/casino/provider/:provider"
            element={<Casino />}
            
          ></Route>

          <Route
            path="/addProvider"
            element={<AddProviders />}
            
          ></Route>


          <Route
            path="/addGame"
            element={<AddGame />}
            
          ></Route>
          
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
