import { Outlet } from "react-router-dom";
import StyledNavbar from './../components/StyledNavbar';

const SharedLayout = () => {
  return (
    <>
      <section className="section">
        <StyledNavbar />
      </section>
      <Outlet />
    </>
  );
};

export default SharedLayout;
