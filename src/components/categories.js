import React from "react";
import {useEffect, useState} from "react";

function Categories(){

    const [categories, setCategories] = useState([]);
	const category_names = categories.map((category, i, array)=>(
		category.name
	  ))
	 
	
	
	useEffect(()=>{
		fetch("http://localhost:3030/api/categories")
			.then(res => res.json())
			.then(data => {
				setCategories(data.data.categories);
				
			})
			
	}, []);

 

return(
    <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<ul>
								<div className="card-body">
									<div className="row">
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
													Categoría {category_names[0]}
											
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
												Categoría {category_names[1]}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
												Categoría {category_names[2]}
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
												Categoría {category_names[3]}
													
												</div>
											</div>
										</div>
										<div className="col-lg-6 mb-4">
											<div className="card bg-info text-white shadow">
												<div className="card-body">
												Categoría {category_names[4]}
												</div>
											</div>
										</div>
										
										
									</div>
								</div>
								</ul>
							</div>
						</div>
)    
    
}
export default Categories;    