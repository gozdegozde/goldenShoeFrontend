import { Link } from "react-router-dom";

export default function Category({ category }) {
  
  return (
     
         
    <td >
      <Link to= {`/categories/${category.id}`}><strong>{category.title}</strong> </Link>

    </td>

  );
}