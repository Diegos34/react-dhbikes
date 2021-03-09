import React from "react";


import { useState, useEffect } from 'react';

function ListProducts(){

    const [products, setProducts] = useState([]);
		
	useEffect(()=>{
		fetch("http://localhost:3030/api/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.data.products);
				
			})
			
	}, []);


    return( 
        
		
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary"> LISTADO DE PRODUCTOS </h6>
        </div>    
            <ul>
            {
            products.map((product, i)=>(
            <li>{product.name}</li>
            ))
            }
            </ul>     
       
      
        </div>
    </div>
)
}

export default ListProducts;