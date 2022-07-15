import products from "../data";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <section className="section">
        <h2>products</h2>
        {products.map((product) => {
          return (
            <div key={product.id} className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <Link
                  to={`/products/${product.id}`}
                  className="btn btn-primary"
                >
                  More info..
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Products;
