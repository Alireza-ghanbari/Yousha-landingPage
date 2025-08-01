import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
