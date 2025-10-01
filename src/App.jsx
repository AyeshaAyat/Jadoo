import './App.css'
import { Routes, Route } from "react-router";
import RootLayout from './components/layouts/RootLayout';

import Desitnations from './components/pages/Desitnations';
import Hotels from './components/pages/Hotels';
import Flights from './components/pages/Flights';
import Bookings from './components/pages/Bookings';
import Login from './components/Login';
import Signup from './Signup';
function App() {


  return (
   <>
   <Routes>
    <Route path='/' element={<RootLayout/>}>
    
        <Route path='desitination/' element={<Desitnations/>}/>
        <Route path='hotels/' element={<Hotels/>}/>
        <Route path='flights/' element={<Flights/>}/>
        <Route path='bookings/' element={<Bookings/>}/>
        <Route path='login/' element={<Login/>}/>
        <Route path='signup/' element={<Signup/>}/>
    </Route>
   </Routes>
   </>
  )
}

export default App
