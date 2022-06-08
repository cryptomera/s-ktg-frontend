import Header from "./components/common/Header";
import MobileHeader from "./components/common/MobileHeader";
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
    <BrowserRouter>
      <div className="xl:invisible xl:h-0 min-w-screen max-w-full">
        <MobileHeader />
      </div>
      <div className="invisible xl:visible">
        <Header />
      </div>
      <div className="xl:px-44 px-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/thestudios" element={<Studios />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
