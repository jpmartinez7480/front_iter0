import React, { Component } from 'react';

import Header from "../header/header";
import Calendar from "../calendar/calendar";

import { Form, FormGroup, FormControl, Col, ControlLabel, Grid, Row, Button } from 'react-bootstrap';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import './add.css';

class Add extends Component{
	constructor(props,context){
		super(props,context);
		this.handleChange = this.handleChange.bind(this);
		

		this.state = {
			value: ''
		};
	}
		
		getValidationStateName(){
			const length = this.state.value.length;
			if(length >= 5) return 'success';
			else if(length === 0) return null;
			else if (length >= 1 && length <= 4) return 'error';
		}

		handleChange(e){
			this.setState({value: e.target.value});
		}	

	render(){
		return(
			<div className = "h">
				<Header />
				<div className = "container-fluid">
				<Grid>
					<Row className = "show-grid">
						<Col lg = {3} md =  {3}></Col>
						<Col lg = {6} md = {6}>
							<h2 id = "titulo_add">Añadir Producto</h2>
							<Form horizontal>
								<FormGroup controlId = "frm_cat">
									<Col componentClass = 	{ControlLabel} sm = {2}>Categoria</Col>
									<Col sm = {10}>
										<select>
											<option value = "importado">Importado</option>
											<option value = "nacional">Nacional</option>
										</select>
									</Col>
								</FormGroup>
								<FormGroup controlId = "frm_date">
									<Col componentClass = 	{ControlLabel} sm = {2}>Fecha vencimiento</Col>
									<Col sm = {10}>
										<Calendar />
									</Col>
								</FormGroup>
								<FormGroup controlId = "frm_price">
									<Col componentClass = 	{ControlLabel} sm = {2}>Precio ($)</Col>
									<Col sm = {10}>
										<FormControl type = "text" placeholder = "250.000" />
									</Col>
								</FormGroup>
								<FormGroup 
									controlId = "frm_name"
									validationState = {this.getValidationStateName()}
								>
									<Col componentClass = 	{ControlLabel} sm = {2}>Nombre</Col>
									<Col sm = {10}>
										<FormControl 
										type = "text" 
										placeholder = "Notebook Lenovo g40" 
										value = {this.state.value}
										onChange = {this.handleChange}
										/>
									</Col>
								</FormGroup>
								
								
								<FormGroup>
									<Col sm = {10}>
										<Button id = "btn_annadir" bsStyle = "primary"  bsSize = "large">Añadir</Button>
									</Col>
								</FormGroup>
							</Form>;
						</Col>
						<Col lg = {3} md =  {3}></Col>
					</Row>
				</Grid>
			</div>

			</div>
			
		);
	}
}



export default Add;