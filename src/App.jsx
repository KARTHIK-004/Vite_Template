import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hello from "./components/Hello";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
