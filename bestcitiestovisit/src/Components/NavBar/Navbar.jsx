import { MenuData } from "./MenuData";
import "./Navbar.css"


export const NavBar = () => {
  return (
    <nav className="NavbarItems">
      <h1 className="logo">Cities guide</h1>
      <ul className="nav-menu">
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
