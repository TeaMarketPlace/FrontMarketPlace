import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import { ThemeProvider } from "./providers/theme-provider.tsx";

import "./App.scss";
import Layout from "./components/Layout/Layout.tsx";
import { Main } from "./pages/Main.tsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
