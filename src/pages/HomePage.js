import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
import Category from "../components/Category";
import '../../src/App.css'
export default function HomePage() {
    const [products, set_products] = useState([]);
    const [categories, set_categories] = useState([]); 
   
     useEffect(() => {
    async function doSomeDataFetching() {

      const res = await axios.get(
        "http://localhost:4000/products"
      );

      set_products(res.data);
    }
    doSomeDataFetching();
  }, []);

  useEffect(() => {
    async function fetchCategories() {
     

      
      const res = await axios.get(
        "http://localhost:4000/categories"
      );

      set_categories(res.data);
    }
    fetchCategories();
  }, []);


  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
     async function search() {
       const results = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    }
    search();
  }, [searchTerm]);
 
  return (
    <table>
      <tr>
        <td>
          <input
               type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
          />
        <ul>
             {searchResults.map(item => (
              <Link to= {`/product/${item.id}`}><li>{item.name}</li></Link>
        ))}
        </ul>
        </td>
        <td>
    
        </td>
      </tr>
      <td>
        
             {!Array.isArray(categories) ? <div>Loading</div>: (categories.map(cat => {
                return(

               <td style ={{paddingTop: "0px",  display: "flex",
  flexDirection: "column"}}>
                  
                         
                         <Category key={cat.id} category={cat} />
                   </td>  
               
                )
            }))}
        
       </td> 
       <td>
         <tr>
            {(products.map((product,i)=> {
                return(
                  
          <td id="bor_panel">
              <Product key={i} product={product}/>
             </td> 
           
                )
            }))}
        </tr>
       
      </td>
    </table>

  )
    
}

          