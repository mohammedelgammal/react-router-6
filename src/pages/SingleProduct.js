import { Link, useParams } from "react-router-dom";
import products from "../data";

const SingleProduct = () => {
  const { productId } = useParams(),
    product = products.find((product) => product.id === productId),
    { image, name } = product;
  return (
    <section className="section product">
      <article>
        <h4>{name}</h4>
        <img src={image} alt={name} />
      </article>
      <Link to="/products" className="btn">
        Back to Products Page
      </Link>
    </section>
  );
};

export default SingleProduct;
