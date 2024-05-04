import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/HomePage/HomePage";
import GuidePage from "./pages/GuidePage/GuidePage";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/guide" element={<GuidePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
