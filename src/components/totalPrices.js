import React from "react";


import { useState, useEffect } from 'react';

function TotalPrices(){

    const [products, setProducts] = useState([]);
	let productos = Object.values(products)
    console.log(productos)
	 
		
	useEffect(()=>{
		fetch("http://localhost:3030/api/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.meta);
				console.log(data.meta)
			})
			
	}, []);


    return( 
        <div className="col-md-4 mb-4">
							<div className="card border-left-success shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Amount in products</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800"></div>
											$ {productos[7]}
										</div>
										<div className="col-auto">
											<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

    )
}

export default TotalPrices;