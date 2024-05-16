import { IProducts } from "@/types";
import StarRating from "./StarRating";
import "../styles/product-detail.scss";

const ProductDetail: React.FC<
  Omit<IProducts, "title" | "image" | "category">
> = ({ description, rating, price }) => {
  return (
    <div className="description-continer">
      <p>${price}</p>
      <p className="product-description">{description}</p>
      <StarRating rating={rating} />
      <button className="add-cart-button">Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
