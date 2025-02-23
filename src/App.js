import {BrowserRouter , Routes , Route} from "react-router-dom";
import home from "./app/Pages/Home";
import Login from "./app/Pages/Login";
import Home from "./app/Pages/Home";
import Signup from "./app/Pages/Signup";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup />} />
    
    </Routes>
    </BrowserRouter>
   
);
}

export default App;
