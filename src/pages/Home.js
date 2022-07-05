import Page from "./pages";
import { useQuery } from "react-query";
import apiRequest from "../apiRequest";

export default function Home() {
  const { data } = useQuery("products", () =>
    apiRequest("GET", "api/products")
  );

  console.log(data);

  return (
    <Page>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {(data || []).map((item) => (
          <div className="col">
            <div className="card h-100">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Page>
  );
}
