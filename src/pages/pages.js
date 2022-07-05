import { Link } from "react-router-dom";

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
            <Link to="/" className="navbar-brand" href="#">
              Home
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to="/product"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About Us
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <button type="button" className="btn btn-info">
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </button>
          </div>
        </nav>
      </div>

      {children}

      <>
        {/* Remove the container if you want to extend the Footer to full width. */}
        <div className="container my-5">
          <footer
            className="text-center text-white"
            style={{ backgroundColor: "#f1f1f1" }}
          >
            {/* Grid container */}
            <div className="container pt-4">
              {/* Section: Social media */}
              <section className="mb-4">
                {/* Facebook */}
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                {/* Twitter */}
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fab fa-twitter" />
                </a>
                {/* Google */}
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fab fa-google" />
                </a>
                {/* Instagram */}
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fab fa-instagram" />
                </a>
                {/* Linkedin */}
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fab fa-linkedin" />
                </a>
                {/* Github */}
                <a
                  className="btn btn-link btn-floating btn-lg text-dark m-1"
                  href="#!"
                  role="button"
                  data-mdb-ripple-color="dark"
                >
                  <i className="fab fa-github" />
                </a>
              </section>
              {/* Section: Social media */}
            </div>
            {/* Grid container */}
            {/* Copyright */}
            <div
              className="text-center text-dark p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
              © 2020 Copyright:
              <a className="text-dark" href="https://mdbootstrap.com/">
                MDBootstrap.com
              </a>
            </div>
            {/* Copyright */}
          </footer>
        </div>
        {/* End of .container */}
      </>
    </>
  );
}
