import { NavLink, Outlet } from "react-router-dom";


export const Layout = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <ul className="ul">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>

           
              <NavLink to="/animals">Animals</NavLink>
            </li>
          </ul>
        </nav>
       
      </header>
      <main>
        <p className="para">This is a page about animals</p>
      </main>
      <Outlet />
    </>
  );
};
