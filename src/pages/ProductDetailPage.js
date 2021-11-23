import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import chart from '../chart.png';
export default function ProductDetailPage() {
    
    const { productId } = useParams();
    const [product, set_product] = useState([]);
    const [brand, setBrand] = useState();
    const [size, setSize] = useState();
     useEffect(() => {
    async function fetchProduct() {
      console.log("I'm gonna fetch some data!");

      // Getting back data from the net, through the wire, air, and the ocean:
      const res = await axios.get(
        `http://localhost:4000/products/${productId}`
      );

      console.log("Bu ne:", res);
      
      set_product(res.data);
    }
    
    fetchProduct();
  }, [productId]);

   
  return <div style ={{textAlign: "center",padding: "60px"}}>
      <h1>Product details</h1>
        <div style={{margin: "auto",textAlign: "center",width:" 40%",padding: "80px"}}>
      {product ? (
        <>
         
          
          <div style ={{margin: "margin: auto",
            textAlign: "center",
              width:" 140%",
              border: "3px solid red",
              padding: "20px"}}>
       <h2 >{product.name}</h2>
            <img alt={product.name} src={product.imageUrl} style={{
        width: "80%",
        padding: "10px",
        boxSizing: "border-box",

      }}/>
            <div >
              <h3>Details</h3>
              <p>{product.description}</p>
              <h3>Price</h3>
              <p>{product.price} €</p>
              <h3>Stock Details</h3>
              {product.available ? (<p>In Stock</p>) : (<p>Out of Stock</p>)}
               <img alt='chart' src ={chart} style={{
                width: "80%",
                padding: "10px",
                boxSizing: "border-box",
              }}/> 
              
               
              <h2>Find your size with your current shoes</h2>
              <select value ={brand} onChange ={e =>setBrand(e.target.value)} >
                <option>Brand</option>
                <option >Nike</option>
                <option>Adidas</option>
                <option>Skechers</option>
                <option>Christian Louboutin</option>
                {console.log(brand)}
              </select>
             <select value ={size} onChange ={e =>setSize(e.target.value)}>
                <option>Size</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                 {console.log(typeof(size))}
              </select>
                {(() => {
                    if (brand === "Brand"|| size === "Size" || brand === undefined || size === undefined){
                      return(
                        <h1>Please chose a brand and size</h1>
                      )
                    }
                    else if (brand === "Adidas" || brand === "Nike") {
                      return (
                        <h1>Your size is {size}</h1>
                      )
                    } else if (brand === "Skechers") {
                      return (
                        <h1>Your size is {parseInt(size)+1}</h1>
                      )
                    } else {
                      return (
                         <h1>Your size is {parseInt(size)-1}</h1>
                      )
                    }
                  })()}

            </div>
            {product.available ? (<Link  to= "/cart" ><button>Add to Cart</button> </Link>) : 
            (<p></p>)}
            
          </div>
        </>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  </div>
}