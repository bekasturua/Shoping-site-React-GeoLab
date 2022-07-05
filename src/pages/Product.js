import Page from "./pages";
import productImg from "../img/product1.jpg";
import { useParams } from "react-router-dom";

export default function Product() {
  const params = useParams();

  console.log(params);

  return (
    <Page>
      <div className="card-home">
        <div className="card">
          <img src={productImg} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}
