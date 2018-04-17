import React, { Component } from 'react';

import { Table, Grid, Row, Col} from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css'; 

import Header from "../header/header";
import Item from "../item/item";

import './products.css'

class Product extends Component{

	state = {
		prod:[
			{"id":1,"name":"Confort","cost":10000,"expirationDate":"2008-11-11","category":1},
			{"id":2,"name":"Tallarines","cost":7000,"expirationDate":"2010-12-01","category":1},
			{"id":3,"name":"Arroz","cost":4000,"expirationDate":"2000-11-11","category":2},
			{"id":4,"name":"Mantequilla","cost":2000,"expirationDate":"2019-11-11","category":1},
			{"id":5,"name":"Hamburguesa","cost":100,"expirationDate":"2008-11-11","category":1},
			{"id":6,"name":"Mayonesa","cost":50000,"expirationDate":"2018-11-11","category":2},
			{"id":7,"name":"Ketchup","cost":60000,"expirationDate":"2008-12-11","category":2},
			{"id":8,"name":"Detergente","cost":70000,"expirationDate":"2008-10-11","category":1},
			{"id":9,"name":"Pañales","cost":80000,"expirationDate":"2008-11-12","category":2},
			{"id":10,"name":"Servilleta","cost":12000,"expirationDate":"2008-11-12","category":1}
		],
		cnt:1
	}
	
	buildList(){
		return this.state.prod.map((prod) => {
			return (
				<Item  key = {prod.id} it = {this.state.cnt++} code = {prod.id} name = {prod.name} cost = {prod.cost} expirationDate = {prod.expirationDate} category = {prod.category}/>
			)

			
		})
	}
	render(){
		return (
			<div className = "productos">
				<Header />
				<div className = "container-fluid">
					<Grid>
						<Row className = "show-grid">
							<Col lg = {1} md = {1}></Col>
							<Col lg = {10} md = {10}>
								<h2 style = {{marginBottom: 20 + 'px'}}>Listado de productos</h2>
								<Table striped bordered condensed hover>
									<thead>
										<tr>
											<th className = "datos" >#</th>
											<th className = "datos" >Codigo</th>
											<th className = "datos" >Nombre</th>
											<th className = "datos" >Vence</th>
											<th className = "datos" >Categoria</th>
											<th className = "datos" >Precio</th>
											<th className = "datos" >Accion</th>
										</tr>
									</thead>
									<tbody className = "datos">
											{this.buildList()}
									</tbody>
								</Table>;
							</Col>
							<Col lg = {1} md = {1}></Col>
						</Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default Product;