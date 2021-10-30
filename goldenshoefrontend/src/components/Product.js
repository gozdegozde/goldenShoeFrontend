export default function Product({ product }) {
  return (
    <div
      style={{
        width: "25%",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      <strong>{product.name}</strong> ({product.description})
      <img
        src={product.imageUrl}
        alt={product.description}
        style={{
          display: "block",
          maxWidth: "100%",
        }}
      />
    </div>
  );
}