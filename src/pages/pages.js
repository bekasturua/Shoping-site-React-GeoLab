import { NavLink, Link } from "react-router-dom";
import "./pages.modules.css";
import { useTranslation } from "react-i18next";

export default function Page({ children }) {
  const { t, i18n } = useTranslation();

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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar-brand active" : "navbar-brand"
              }
              href="/"
              aria-current="page"
            >
              {t("home")}
              {/* Home */}
            </NavLink>
            <NavLink
              to="/prod"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              href="/"
            >
              {t("products")}
              {/* Products */}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              href="/"
            >
              {t("about_us")}
              {/* About Us */}
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              href="/"
            >
              {t("signup")}
              {/* About Us */}
            </NavLink>

            <div>
              <button onClick={() => i18n.changeLanguage("ka")}>
                {t("ka")}
              </button>
              <button onClick={() => i18n.changeLanguage("en")}>
                {t("en")}
              </button>
            </div>
            <div>
              <button type="button" className="btn btn-info">
                <i className="fa-solid fa-cart-shopping"></i> {t("cart")}
              </button>
            </div>
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
            <h5 className="footer-link">{t("number")}: +995 598 93 03 80</h5>
            <h5 className="footer-link">{t("mail")}: beqasturua3@gmail.com</h5>
          </ul>
        </div>
      </section>
    </>
  );
}
