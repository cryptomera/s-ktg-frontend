import Header from "./components/common/Header";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import Manifesto from "./components/Manifesto";
import Studios from "./components/Studios";
import Timeline from "./components/Timeline";

function App() {
  return (
    <div className="px-24">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/thestudios" element={<Studios />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
