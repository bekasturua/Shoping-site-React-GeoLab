import Page from "./pages";
import productImg from "../img/product1.jpg";

export default function Product() {
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
