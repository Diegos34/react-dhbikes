import './App.css';
import SideBars from "./components/sideBars";
import Dhbikes from "./components/dhbikes";
import Categories from "./components/categories";
import TotalPrices from "./components/totalPrices";
import ListProducts from "./components/listProducts";
import {useEffect, useState} from "react";
import listProducts from './components/listProducts';

function App() {
	const [products, setProducts] = useState([]);
		
	useEffect(()=>{
		fetch("http://localhost:3030/api/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.data.products);
				console.log(data.data.products)
			})
			
	}, []);

	const [users, setUsers] = useState([]);
		
	useEffect(()=>{
		fetch("http://localhost:3030/api/users")
			.then(res => res.json())
			.then(data => {
				setUsers(data.data.users);
				
			})
			
	}, []);

	
	

	return (
      <div id="wrapper">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" rel="stylesheet"></link>
	      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"></link>
		
		  <SideBars />
	
		
		 
		 
		<div id="content-wrapper" className="d-flex flex-column">

		
			<div id="content">

		
				<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

		
					<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
						<i className="fa fa-bars"></i>
					</button>

		
					<ul className="navbar-nav ml-auto">

		
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
		
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

		
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div className="topbar-divider d-none d-sm-block"></div>

		
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">DH BIKES</span>
								<img className="img-profile rounded-circle" src="logo.png" width="60"></img>
							</a>
						</li>

					</ul>

				</nav>
		

		
				<div className="container-fluid">

		
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					
					
      

		
					<div className="row">

		
						<div className="col-md-4 mb-4">
							<div className="card border-left-primary shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Products in Data Base</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800"> 
												{
													
													products.length
													
												}
        									</div>
										</div>
										<div className="col-auto">
											<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

		
						<TotalPrices/>

		
						<div className="col-md-4 mb-4">
							<div className="card border-left-warning shadow h-100 py-2">
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Users quantity
											</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800"></div>{users.length}
										</div>
										<div className="col-auto">
											<i className="fas fa-user-check fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
					<Dhbikes/>
					
					<Categories/>
						
					</div>
				</div>
		
			</div>
	
			<ListProducts/>
	
			<footer className="sticky-footer bg-white">
				<div className="container my-auto">
					<div className="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2021</span>
					</div>
				</div>
			</footer>
	

		</div>
	

	</div>
  );
}

export default App;
