import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product"
export default function HomePage() {
    const [products, set_products] = useState([]);
     useEffect(() => {
    async function doSomeDataFetching() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        "https://anddigital.herokuapp.com/products"
      );

      console.log("Got back:", res);
      set_products(res.data);
    }
    doSomeDataFetching();
  }, []);
  return (
        <div>
            {!Array.isArray(products) ? <div>Loading</div>: (products.map(product => {
                return(
                    <div>
                       <Product key={product.id} product={product}/>
                    </div>
                )
            }))}
        </div>
  )
  
    
}


        
          