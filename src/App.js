import {BrowserRouter , Routes , Route} from "react-router-dom";
import home from "./app/Pages/Home";
import login from "./app/Pages/Login";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={"/home"} />
      <Route path="/login" element={<login />} />
    </Routes>
    </BrowserRouter>
   
);
}

export default App;
