import { NavLink } from "react-router-dom";
import "./pages.modules.css";

export default function Page({ children }) {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "navbar-brand active" : "navbar-brand"
                    }
                    href="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/prod"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    href="/"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    href="/"
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-info">
              <i className="fa-solid fa-cart-shopping"></i> Cart
            </button>
          </div>
        </nav>
      </div>

      {children}

      <section id="key-features">
        <div>
          <ul className="key-feature__list">
            <li className="key-feature">
              <a className="section-soc_network" href="/">
                <i className="fa-brands fa-facebook"></i> Facebook
              </a>
            </li>
            <li className="key-feature">
              <a className="section-soc_network" href="/">
                <i className="fa-brands fa-instagram"></i> Instagram
              </a>
            </li>
            <li className="key-feature">
              <a className="section-soc_network" href="/">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <ul>
            <h5 className="footer-link">Number: +995 598 93 03 80</h5>
            <h5 className="footer-link">Mail: beqasturua3@gmail.com</h5>
          </ul>
        </div>
      </section>
    </>
  );
}
