import { Link } from "react-router-dom";

export default function Product({ product }) {
  
  return (
     
         
    <td >
      <Link to= {`/product/${product.id}`}><strong>{product.name}</strong> ({product.description}) </Link>
    
      <img 
        src={product.imageUrl}
        alt={product.description}
        style={{
          
           width: "350px",
          height: "350px"
        }}
        
      />
      </td>

  );
}

