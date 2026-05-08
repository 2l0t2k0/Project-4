import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet /> {/* Child routes render here */}
      </main>
    </>
  );
}