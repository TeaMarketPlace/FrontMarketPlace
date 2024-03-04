import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import TestButton from "../TestButton/TestButton";
import { Header } from "../Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense>
        <Outlet />
      </Suspense>
      <TestButton title="Login" route="/login" />
      <TestButton title="Home" route="/" />
    </div>
  );
};

export default Layout;
