import Page from "./pages";
import { useQuery } from "react-query";
import apiRequest from "../apiRequest";
import { Link } from "react-router-dom";

export default function Home() {
  const { data } = useQuery("products", () =>
    apiRequest("GET", "api/products")
  );

  console.log(data);

  return (
    <Page>
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
                <button type="button" class="btn btn-success">
                  <i class="fa-solid fa-cart-arrow-down"></i> Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
