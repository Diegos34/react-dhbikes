import React from "react";
import { useState, useEffect } from 'react';

function Dhbikes(){

    const [products, setProducts] = useState([]);
	const [lastProduct, setLastProduct]= useState([]);
		
	useEffect(()=>{
		fetch("http://localhost:3030/api/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.meta);
				console.log(data.meta)
				setLastProduct(data.meta.lastProduct)
			})
			
	}, []);


    return( 
        
		
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">{lastProduct.name} </h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src={lastProduct.urlImage} alt="image dummy"></img>
									</div>
									<p>{lastProduct.description}</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>
              
)
}

export default Dhbikes;