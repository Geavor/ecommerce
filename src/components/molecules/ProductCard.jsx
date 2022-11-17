import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { formatPrice } from "../../helpers/number";

const ProductCard = ({ product }) => {
  const { images, product_name, id, price, description } = product;

  const { state, dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  return (
    <article className="w-full max-w-sm bg-white rounded-lg shadow-lg p-5">
      <div className="mb-5 rounded-lg overflow-hidden">
        <Link to={`/productos/${id}`}>
          <img
            className="align-middle h-40 w-full object-cover"
            src={images[0]}
            alt={product_name}
          />
        </Link>
      </div>
      <div className="mb-6">
        <Link to={`/productos/${id}`}>
          <h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-2">
            {product_name}
          </h3>
        </Link>
        <p className="text-gray-500 line-clamp-2">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xl font-bold text-gray-900">
          {formatPrice(price)}
        </span>
      </div>
      <div>
        {state.cart.find((c) => c.id === product?.id) ? (
          <button className="bg-gradient" onClick={removeFromCart}>
            QUITAR DEL CARRITO
          </button>
        ) : (
          <button className="bg-gradient" onClick={addToCart}>
            AGREGAR AL CARRITO
          </button>
        )}
      </div>
    </article>
  );
};

export default ProductCard;
