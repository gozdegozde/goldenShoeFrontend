import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import chart from '../chart.png';
export default function ProductDetailPage() {
    
      const { categoryId } = useParams();
    const [category, set_category] = useState([]);
     useEffect(() => {
    async function fetchProduct() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        `http://localhost:4000/categories/${categoryId}`
      );

      console.log("Bu ne:", res);
      
      set_category(res.data);
    }
    
    fetchProduct();
  }, [categoryId]);
  return <div style ={{textAlign: "center",padding: "60px"}}>
       
      {category ? (
        <>
         
       <h2 >{category.title}</h2>
        <h3>{console.log(category.products)}</h3>

         {!Array.isArray(category.products) ? <div>Product not found!</div> : (category.products.map(p => {
                return(
                    <Link to={`/product/${p.id}`}> <h1>{p.name}</h1> </Link>
                )
            }))}
     
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
 
}