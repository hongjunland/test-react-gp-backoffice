import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import HomePage from "./Home";
import RedirectPage from "./RedirectPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/auth2/redirect" element={<RedirectPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
