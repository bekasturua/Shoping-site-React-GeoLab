import Page from "../pages/pages";
import { useQuery } from "react-query";
import apiRequest from "../apiRequest";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home() {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data } = useQuery(["products", searchParams.get("search")], () =>
  apiRequest("GET", `api/products${searchParams.get("search") ? `?q=${searchParams.get("search")}` : ""}`)
  );
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    setSearchValue(searchParams.get("search"));
  }, []);

  function onSearchSubmit(e) {
    e.preventDefault();
    setSearchParams({ search: searchValue });
  }

  return (
    <Page>
      <div className="search">
        <form action="" onSubmit={onSearchSubmit}>
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {(data || []).map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <Link to={`/product/${item.id}`}>
                  <h5 className="card-title">{item.title}</h5>
                </Link>
                <p className="card-text">${item.price}</p>
                <button type="button" className="btn btn-success">
                  <i className="fa-solid fa-cart-arrow-down"></i> Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
