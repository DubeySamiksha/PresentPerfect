const ProductCard = ({ productData }) => {
  const { imageUrl, brand, product, rating, price } = productData;

  return (
    <div className="card">
      <img
        width="100%"
        height={200}
        className="image"
        alt="product image"
        src={imageUrl}
      />
      <h3 className="brand">{brand}</h3>
      <h3 className="name">{product}</h3>
      <h3 className="rating">{rating.toFixed(1)} stars</h3>
      <h3 className="price">Rs. {price / 100}</h3>
    </div>
  );
};

export default ProductCard;
