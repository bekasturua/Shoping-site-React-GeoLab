import Page from "./pages";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import apiRequest from "../apiRequest";

export default function Product() {
  const params = useParams();
  const { productId } = params;
  const { data, isLoading } = useQuery(["product", productId], () =>
    apiRequest("GET", `api/products/${productId}`)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <Page>
      <div className="card-home">
        <div className="card">
          <img src={data.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.description}</p>
            <p className="card-text">${data.price}</p>
            <button type="button" class="btn btn-success">
              <i class="fa-solid fa-cart-arrow-down"></i> Add To Cart
            </button>
          </div>
        </div>
      </div>
    </Page>
  );
}
