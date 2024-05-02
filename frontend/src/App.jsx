import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<HomePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
