import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";

import "./App.scss";
import Layout from "./components/Layout/Layout.tsx";
import { Main } from "./pages/Main.tsx";

// TODO Need to move this component to Login page.

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
