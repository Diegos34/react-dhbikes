import React from "react";


import { useState, useEffect } from 'react';

function Dhbikes(){

    const [products, setProducts] = useState([]);
	
		
	useEffect(()=>{
		fetch("http://localhost:3030/api/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.data.products);
				console.log(data.data.products)
			})
			
	}, []);


    return( 
        
		
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" src="product_dummy.svg" alt="image dummy"></img>
									</div>
									<p>{products - 1}Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>
              
)
}

export default Dhbikes;