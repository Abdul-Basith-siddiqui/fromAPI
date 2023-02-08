import "./App.css";
import FirstPage from "./first";
import SecondPage from "./second";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
