import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../domains/Home/Home.page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
