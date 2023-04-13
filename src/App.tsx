import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp, Main, NotFound } from "./pages";
import { UserStorage } from "./context";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
