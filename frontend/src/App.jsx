import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomePage from "./pages/GuidePage/HomePage";
import GuidePage from "./pages/GuidePage/GuidePage";
import PracticeMCQ from "./pages/McqPage/McqQns";
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/home" element={<HomePage/>} />
          <Route exact path="/guide" element={<GuidePage/>} />
          <Route exact path="/mcq" element={<PracticeMCQ/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
