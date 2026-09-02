import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/logement/Logement";
import Event from "./pages/events/Event";
import Console from "./pages/console/Console";
import Computer from "./pages/computer/Computer";
import NoFound from "./pages/noFound/NoFound";
function App() {
  return (
    <Routes>
      {" "}
      <Route path="/" element={<Home />} />{" "}
      <Route path="/shop" element={<Shop />} />{" "}
      <Route path="/event" element={<Event />} />{" "}
      <Route path="/console" element={<Console />} />{" "}
      <Route path="/computer" element={<Computer />} />{" "}
      <Route path="*" element={<NoFound />} />{" "}
    </Routes>
  );
}
export default App;
