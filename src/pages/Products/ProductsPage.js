import { Link } from "react-router-dom";

function ProductsPage(props) {
  console.log("Inside ProductsPage: ", { props });

  const { products } = props;

  return (
    <main>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => {
          return (
            <li key={index}>
              <h3>{product.name}</h3>
              <p>£{product.price}</p>
              <Link to={`/products/${product.id}`} state={{ product }}>
                View Product
              </Link>

              <Link to={`/products/${product.id}/edit`} state={{ product }}>
                Edit
              </Link>

              {/* 
                TODO: Add a link to the edit page here 
                Pass the product data as state in the link, just
                like we are doing for the view product link above
              */}
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ProductsPage;
