import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section">
      <h2>404 Not Found</h2>
      <p>This page cannot be found, try going back where you were!</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </section>
  );
};
export default Error;
