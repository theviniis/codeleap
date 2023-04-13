import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp, Main } from "./pages";
import { UserStorage } from "./context";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
